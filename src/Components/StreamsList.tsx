import EmptyStreams from "../Components/EmptyStreams";
import { _swal, getDecodedAccountData } from "../utils/helpers";
import { Stream } from "../Components";
import { _cancelStream, _withdrawStream } from "../Actions";
import { getUnixTime } from "date-fns";
import {
  ERR_NOT_CONNECTED,
  ERR_NO_STREAM,
  TX_FINALITY_CONFIRMED,
} from "../constants";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import useStore, { StoreType } from "../Stores";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { StreamStatus } from "../types";

const storeGetter = (state: StoreType) => ({
  balance: state.balance,
  setBalance: state.setBalance,
  streams: state.streams,
  addStream: state.addStream,
  deleteStream: state.deleteStream,
  clearStreams: state.clearStreams,
  cluster: state.cluster,
  wallet: state.wallet,
  connection: state.connection(),
});

export default function StreamsList() {
  const {
    wallet,
    connection,
    balance,
    setBalance,
    streams,
    addStream,
    deleteStream,
    clearStreams,
    cluster,
  } = useStore(storeGetter);

  //componentWillMount
  useEffect(() => {
    clearStreams();
    const savedStreams = JSON.parse(localStorage.streams || "{}");
    const publicKey = wallet?.publicKey?.toBase58();
    if (publicKey === undefined) {
      toast.error(ERR_NOT_CONNECTED);
      return;
    }
    const newStreams = savedStreams?.[cluster]?.[publicKey] || {};
    const streamID = window.location.hash.substring(1);

    if (streamID) {
      try {
        new PublicKey(streamID);
        newStreams[streamID] = undefined; // We're setting the data few lines below
      } catch (e) {
        toast.error(ERR_NO_STREAM);
      }
    }

    for (const id in newStreams) {
      if (newStreams.hasOwnProperty(id)) {
        //first, the cleanup
        let pk = undefined;
        try {
          pk = new PublicKey(id);
        } catch (e: any) {
          toast.error(e.message + id);
          //removeStream(id, true);
        }

        if (pk) {
          connection?.getAccountInfo(new PublicKey(id)).then((result) => {
            if (result?.data) {
              addStream(id, getDecodedAccountData(result.data));
            } else {
              if (id === streamID) {
                toast.error(ERR_NO_STREAM);
              }
            }
          });
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function withdrawStream(id: string) {
    if (connection === null || wallet === null || wallet.publicKey === null) {
      toast.error(ERR_NOT_CONNECTED);
      return;
    }
    const success = await _withdrawStream(id, streams[id], connection, wallet);
    if (success) {
      const newBalance =
        (await connection.getBalance(wallet.publicKey, TX_FINALITY_CONFIRMED)) /
        LAMPORTS_PER_SOL;
      const streamData = await connection.getAccountInfo(
        new PublicKey(id),
        TX_FINALITY_CONFIRMED
      );
      setBalance(newBalance);
      if (streamData !== null) {
        addStream(id, getDecodedAccountData(streamData.data));
      }
    }
  }

  async function cancelStream(id: string) {
    if (connection === null || wallet === null || wallet.publicKey === null) {
      toast.error(ERR_NOT_CONNECTED);
      return;
    }
    const { amount } = streams[id];
    const now = new Date();
    const oldBalance = balance;
    const success = await _cancelStream(id, streams[id], connection, wallet);
    if (success) {
      const newBalance =
        (await connection.getBalance(wallet.publicKey, TX_FINALITY_CONFIRMED)) /
        LAMPORTS_PER_SOL;
      const newWithdrawn = amount - (newBalance - oldBalance);
      setBalance(newBalance);
      addStream(id, {
        ...streams[id],
        withdrawn: newWithdrawn,
        canceled_at: getUnixTime(now),
        status: StreamStatus.canceled,
      });
    }
  }

  async function removeStream(id: string, skipPrompt?: boolean) {
    if (!skipPrompt && (await _swal())) {
      deleteStream(id);
    }
  }

  if (
    Object.keys(streams).length === 0 ||
    wallet?.publicKey?.toBase58() === undefined
  ) {
    return <EmptyStreams />;
  }
  const entries = Object.entries(streams)
    .sort(([, stream1], [, stream2]) => stream2.start - stream1.start)
    .map(([id, data]) => (
      <Stream
        key={id}
        onStatusUpdate={(status) => addStream(id, { ...streams[id], status })}
        onWithdraw={() => withdrawStream(id)}
        onCancel={() => cancelStream(id)}
        id={id}
        data={data}
        myAddress={wallet?.publicKey?.toBase58() as string}
        removeStream={() => removeStream(id)}
      />
    ));
  return <>{entries}</>;
}