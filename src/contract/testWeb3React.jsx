import { Web3ReactProvider, createWeb3ReactRoot } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

const SUPPORTED_CHAIN_IDS = [1, 4, 3, 42, 5, 56, 97, 1337];
const injected = new InjectedConnector({ supportedChainIds: SUPPORTED_CHAIN_IDS})
const walletconnect = new WalletConnectConnector({
    supportedChainIds: SUPPORTED_CHAIN_IDS,
    // bridge: <Replace me with WALLETCONNECT_BRIDGE_URL>,
    qrcode: true,
    pollingInterval: 15000
 })

// import your favorite web3 convenience library here
const Web3ProviderNetwork = createWeb3ReactRoot('NETWORK')

if (!!window.ethereum) {
  window.ethereum.autoRefreshOnNetworkChange = false
}

function getLibrary(provider) {
  return new Web3Provider(provider) // this will vary according to whether you use e.g. ethers or web3.js
}

const Web3ReactProviderReloaded = createWeb3ReactRoot('anotherOne')

export default function App () {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ReactProviderReloaded getLibrary={getLibrary}>
        {getLibrary}TESTING WEB3React/Core
        <button id ="connect_btn">Connect</button>
      </Web3ReactProviderReloaded>
    </Web3ReactProvider>
  )
}