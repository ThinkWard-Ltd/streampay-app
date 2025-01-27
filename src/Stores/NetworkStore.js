import {clusterApiUrl} from "@solana/web3.js"

export const CLUSTER_LOCAL = 'local'
export const CLUSTER_DEVNET = 'devnet'
export const CLUSTER_TESTNET = 'testnet'
export const CLUSTER_MAINNET = 'mainnet-beta'

const clusterUrls = {
    [CLUSTER_LOCAL]: () => 'http://127.0.0.1:8899',
    [CLUSTER_DEVNET]: () => clusterApiUrl(CLUSTER_DEVNET),
    [CLUSTER_TESTNET]: () => clusterApiUrl(CLUSTER_TESTNET),
    [CLUSTER_MAINNET]: () => clusterApiUrl(CLUSTER_MAINNET),
}

const programIds = {
    [CLUSTER_LOCAL]: () => prompt("Program ID?"),
    [CLUSTER_DEVNET]: () => "H977mPPrgznZR4gFe2bZL9y1XSDbQUAAMvxZ48PJ3ExB",
    [CLUSTER_TESTNET]: () => "H977mPPrgznZR4gFe2bZL9y1XSDbQUAAMvxZ48PJ3ExB",
    [CLUSTER_MAINNET]: () => null, // TODO: publish the program to mainnet
}

const useNetworkStore = (set: Function, get: Function) => ({
    // state
    cluster: localStorage.cluster || CLUSTER_DEVNET,
    programId: programIds[localStorage.cluster || CLUSTER_DEVNET](),

    // actions
    clusterUrl: () => clusterUrls[get().cluster](),
    explorerUrl: () => {
        const cluster = get().cluster
        return cluster === CLUSTER_LOCAL ? `custom&customUrl=${encodeURIComponent(get().clusterUrl)}` : cluster
    },
    setCluster: (cluster: string) => {
        get().persistStoreToLocalStorage()
        const programId = programIds[cluster]()
        if (programId) {
            set({cluster, programId})
        }
        else {
            set({cluster: CLUSTER_DEVNET, programId: programIds[CLUSTER_DEVNET]()})
        }
    }
})

export default useNetworkStore