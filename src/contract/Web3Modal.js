import {useState} from "react"
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";

const presaleAddress = '0x97d0b13678bc7c9fa883a2cf57b10f12e2e9f802';
const tokenAddress = '0x7264c6C65c44E8613779D420D6b5FC14c8d3D7DB';  
let maxSupply = 50000000, eventFlag =false, checkFlag = false;    
const tokenRate = 0.0001176;
let presaleABI =  [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":true,"inputs":[],"name":"Token","outputs":[{"internalType":"contract BEP20Token","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"closeSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"contribute","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"exchangeRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"funding","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getWithdrawAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isClosed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maxMintable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"releaseFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_exchangeRate","type":"uint256"}],"name":"setTokenPricePerBNB","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address payable","name":"_address","type":"address"}],"name":"setWithdrawAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"}],"name":"setup","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"softCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"unsoldTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"rate","type":"uint256"}],"name":"updateRate","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdrawUnsoldTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"withdrwAddress","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}];
let tokenABI =    [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"DepositEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"WithdrawEvent","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"depositToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"platformAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"preSaleAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"setPlatformAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"setPreSaleAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferTo","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]

let web3Mod;
let connected, presaleContract ,tokenContract;
let currentWeb3, currentAccount, currentProvider, currentChainId, currentBalance;
const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: "c179cb27087649e5ae0512c39449522c",
      bridge: "https://bridge.walletconnect.org",
      qrcodeModalOptions: {        
        mobileLinks: [
          "metamask",
          "imtoken",
        ]
      }
    }
  }
};

const init = () => {
  if (window.ethereum) {
    window.ethereum.autoRefreshOnNetworkChange = false;
    if(window.ethereum.isMetaMask){
      console.log("MetaMask is aleady install.");
      web3Mod = new Web3Modal({cacheProvider: true, providerOptions}); 
      // web3Mod.clearCachedProvider();
    }else {    
      alert("Installed extenssion is not a MetaMaske.");
    }
  }else {    
      alert("Please install MetaMaske. DApp can't work rightly.");
  }
};
init();

const Web3ModalConpomnet = (bntid) => {
  const [provider, setProvider] = useState(null);

  const connect = async () => {
    let _provider;
    try {
      _provider = await web3Mod.connect();
      // await web3Mod.toggleModal();
    } catch (e) {
      console.log("Could not get a wallet connection", e);
      return;
    }
    if (_provider) {
      setProvider(_provider);
      _provider.on("accountsChanged", (accounts) => {      
        fetchAccountData(_provider);
        console.log("accountsChanged");
      });
      _provider.on("chainChanged", (chainId) => {
        window.location.reload();
        fetchAccountData(_provider);
        console.log("chainChanged");
      });
      _provider.on("networkChanged", (networkId) => {
        fetchAccountData(_provider);
        console.log("networkChanged");
      });
      _provider.on("disconnect", (code, reason) => {
        console.log("disconnect", code, reason); 
      });
      await fetchAccountData(_provider);
      connected = true;
    }
  };

  const disconnect = async () => {
    console.log("Killing the wallet connection", currentProvider);
    await web3Mod.clearCachedProvider();
    setProvider(null);
    currentProvider = null;
    currentAccount = "";
    connected = false;
  };

	const buy = async () => {
    if(connected) {
      let balance_bnb = document.getElementById('inp_bnb').value * 1e18
      if (balance_bnb >= 0.0001 * 1e8 && balance_bnb <= 2 * 1e18) {
        presaleContract.methods.contribute().send({ from: currentAccount, value: balance_bnb }, function (res) {
          console.log("Buy res: ", res);
        })
        .on("confirmation", function (confirmationNumber, receipt) {
          console.log("confirmation", confirmationNumber, receipt);
          getCroBalance();
        })
        .on("error", (error) => {
          console.log("error", error);
          if (error.code === 4001) {
            console.log("User Rejecte buy denied transaction.");
          }
        });
      } else {
        toastr('Please input BNB amount correctly.');
      }
    } else {
      toastr('Please connect MetaMask.');
    };
  };

  const fetchAccountData = async (provider) => {
    const _web3 = new Web3(provider);
    const accounts = await _web3.eth.getAccounts();
    const chainId = await _web3.eth.getChainId();
    currentProvider = provider;
    currentWeb3 = _web3;
    currentAccount =accounts[0];
    currentChainId = chainId;
    await getCroBalance();
  };

  const getCroBalance = async () => {
     console.log("chainId:", currentChainId, ", currentAccount:", currentAccount, ", provider: ", currentProvider);
    if (currentChainId === 56){      
      presaleContract = new currentWeb3.eth.Contract(presaleABI, presaleAddress);      
      tokenContract = new currentWeb3.eth.Contract(tokenABI, tokenAddress); 

      await presaleContract.methods.maxMintable().call().then(function (balance) {
        document.getElementById('max-mintable').innerText = format(balance / 1e18);
        maxSupply = balance / 1e18;
      });
      await presaleContract.methods.totalMinted().call().then(function (balance) {
        let percent = (balance / 1e18 / maxSupply) * 100;
        document.getElementById('contract_balance_pre').innerText = format(balance / 1e18);
        document.querySelector('#percent').style.width = percent + '%';
      });
      if(currentAccount)
        await tokenContract.methods.balanceOf(currentAccount).call().then(function (balance) {
          currentBalance = (balance / 1e18);
          document.getElementById('wallet_balance').innerText = format(currentBalance);
        });
      
      document.getElementById('tokenRate').innerText = Math.round( 1/tokenRate);
        if(!eventFlag){ 
          document.getElementById('btn_swap').addEventListener('click', buy);    
          document.getElementById('inp_bnb').addEventListener('keyup', in_bnb);
          document.getElementById('inp_iii').addEventListener('keyup', in_token);
          eventFlag = true;
        }   
    }
  };
  
	const format = (balance) => {
		balance = balance.toLocaleString('en-US');
		return balance;
	}

	const toastr = (msg) => {
    console.log(msg);
		let alert_lsit = document.querySelector('.alert_list')
		let alert = document.createElement('div')
		alert.innerHTML = msg
		alert_lsit.appendChild(alert)
		setTimeout(() => {
			alert.remove()
		}, 2500)
	}
  const in_bnb = () => {sync('inp_bnb', 'inp_iii', 1 / tokenRate);}
  const in_token = () => {sync('inp_iii', 'inp_bnb', tokenRate);}
	const sync = (from, to, rate) => {document.getElementById(to).value = document.getElementById(from).value * rate;}

  const check = async ()=>{
    if(! window.ethereum)   return;
    if(!checkFlag){
      if(web3Mod.cachedProvider === "injected"){
        console.log("web3Mod.cachedProvider: ", web3Mod.cachedProvider);
        // document.getElementById("bodyid").onload = await connect();
      }else if(Web3.givenProvider){
        console.log("Web3.givenProvider: ", Web3.givenProvider);
        fetchAccountData(Web3.givenProvider);
      }
      checkFlag = true;
    }
  }
  check();

  return (
        <p>
          {provider ?
            <button className = "connect" id={bntid} onClick={disconnect}>Web3Modal disconnect</button>  :
            <button className = "connect" id={bntid} onClick={connect}>Web3Modal connect</button>
          }
        </p>
  );
};

export default Web3ModalConpomnet;
