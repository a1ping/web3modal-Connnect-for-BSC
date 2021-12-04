import React, { useState } from "react";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { ABI } from "./ABI";

const WalletConnet = () => {
  const [currentAccount, setCurrentAccount] = useState();
  const [userAction, setUserAction] = useState();

  //  Create WalletConnect Provider
  const provider = new WalletConnectProvider({
    infuraId: "c179cb27087649e5ae0512c39449522c", // Required
    qrcodeModalOptions: {
      mobileLinks: ["metamask", "imtoken"]
    }
  });
  //  Create Web3
  const web3 = new Web3(provider);
  // const web3 = new Web3(provider);
  // const getAccount = async () => {
  //   return await web3.eth.getAccounts();
  // };
  // console.log(getAccount());

  provider.on("accountsChanged", (accounts) => {
    console.log("accountsChanged", accounts);
  });

  // Subscribe to chainId change
  provider.on("chainChanged", (chainId) => {
    console.log("chainChanged", chainId);
  });

  // Subscribe to session connection
  provider.on("connect", () => {
    console.log("connect");
    alert("connect");
  });

  // Subscribe to session disconnection
  provider.on("disconnect", (code, reason) => {
    console.log(code, reason);
  });

  const connect = async () => {
    //  Enable session (triggers QR Code modal)
    await provider.enable().catch((err) => {
      console.log("error", err);
    });
    console.log(provider, 11);
  };

  const enableEthereumButton = async () => {
    // const web3 = new Web3(provider);
    // //  Create Web3
    // // const accounts = await web3.eth.requestAccounts();
    // const accounts = await web3.eth.getAccounts();
    // const account = accounts[0];
    // console.log(account);
    if (provider.connected) {
      setCurrentAccount(provider.accounts[0]);
    }
    // console.log(provider);
    // console.log(web3.eth);
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    console.log(account);
  };
  const send = () => {
    console.log(currentAccount, "address");
    web3.eth.sendTransaction({
      from: currentAccount,
      gasPrice: web3.utils.toWei("0.0000001", "ether"),
      gas: "22000",
      to: "0x52dE8D3fEbd3a06d3c627f59D56e6892B80DCf12",
      value: web3.utils.toWei("0.00001", "ether")
      // value: "10000000",
      // nounce,
      // data: "0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b"
    });
    return;
    const contract = new web3.eth.Contract(
      ABI,
      "0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b",
      {
        from: currentAccount,
        gasPrice: web3.utils.toWei("0.00000001", "ether"),
        gas: "21000"
      }
    );
    contract.methods
      .transfer(
        "0x52dE8D3fEbd3a06d3c627f59D56e6892B80DCf12",
        web3.utils.toWei("0.000000001", "ether")
      )
      .send()
      .on("transactionHash", function (hash) {
        console.log("transactionHash", hash);
      })
      .on("receipt", function (receipt) {
        console.log("receipt", receipt);
      })
      .on("confirmation", function (confirmationNumber, receipt) {
        console.log("confirmation", confirmationNumber, receipt);
      })
      .on("error", (error) => {
        console.log("error", error);
        if (error.code === 4001) {
          setUserAction("User denied transaction.");
          console.log("User denied transaction.");
        }
      });

    console.log("send");
  };

  const sign = () => {
    console.log(currentAccount, "address");
    // web3.eth.sign({
    //   from: currentAccount,
    //   value: "signTest"
    // });
    // web3.eth.signTransaction({
    //   from: currentAccount,
    //   gasPrice: web3.utils.toWei("0.0000001", "ether"),
    //   gas: "22000",
    //   to: "0x52dE8D3fEbd3a06d3c627f59D56e6892B80DCf12",
    //   value: web3.utils.toWei("0.00001", "ether")
    //   // value: "10000000",
    //   // nounce,
    //   // data: "0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b"
    // });
  };

  const killSession = async () => {
    await provider.disconnect();
    console.log("killSession");
  };
  return (
    <>
      <h2>Hello, i am Web3.js</h2>
      <button onClick={enableEthereumButton}>Enable Ethereum</button>
      <h2>
        Account: <span>{currentAccount}</span>
      </h2>
      <p>
        <button onClick={connect}>Connect</button>
      </p>
      <p>
        <button onClick={send}>Send</button>
      </p>
      <p>
        <button onClick={sign}>Sign</button>
      </p>
      <p>
        <button onClick={killSession}>Kill session</button>
      </p>
    </>
  );
};

export default WalletConnet;
