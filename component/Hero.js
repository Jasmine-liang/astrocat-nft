import React from "react";
import { ethers } from "ethers";
import { useWallet } from "use-wallet";
import { useCallback, useEffect, useMemo, useState } from "react";
import { CHAIN_ID, CONTRACT_ADDRESS } from "../utils/constants";
import abi from "../contract/abi.json";
import LoadingIndicator from "./LoadingIndicator";

function Button(props) {
  return (
    <button
      className="rounded-lg w-full bg-yellow-300 text-center px-16 py-2 border-2 border-black font-bold"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

function Hero() {
  const wallet = useWallet();
  const [amount, setAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isMinted, setIsMinted] = useState(false);
  const [txAddress, settxAddress] = useState(null);
  const [error, setError] = useState(false);

  const checkIfWalletIsConnected = () => {
    /*
     * First make sure we have access to window.ethereum
     */
    const { ethereum } = window;

    if (!ethereum) {
      alert("Make sure you have MetaMask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const signer = useMemo(
    () =>
      wallet.ethereum && wallet.account
        ? new ethers.providers.Web3Provider(wallet.ethereum).getSigner(
            wallet.account
          )
        : undefined,
    [wallet]
  );

  const contract = useMemo(
    () =>
      signer ? new ethers.Contract(CONTRACT_ADDRESS, abi, signer) : undefined,
    [signer]
  );

  const handleMint = useCallback(async () => {
    if (contract && signer) {
      try {
        setIsLoading(true);
        const price = await contract.price();
        const tx = await contract.mintCat(amount, {
          value: (price * amount).toString(),
        });
        contract.once("MintCat", (address, catsMinted, times, event) => {
          console.log(`Mint ${times}只领航猫成功！`);
          settxAddress(
            `https://mumbai.polygonscan.com/tx/${event.transactionHash}`
          );
          setIsLoading(false);   
        });
         setIsMinted(true);
      } catch (e) {
        setIsLoading(false);
        setIsMinted(false);
        setError(true);
        console.log(e);
      }
    }
  }, [contract, signer, amount]);

  const renderMintProgress = () => {
    if (isLoading) {
      return (
        <div className="text-white  font-bold text-2xl text-center flex space-x-20 items-center justify-center md:flex-wrap">
          <LoadingIndicator />
          <h1>Minting In Progress...</h1>
        </div>
      );
    }
    if (isMinted) {
      return (
        <div className=" text-white  font-bold text-xl text-center flex space-x-2">
          <h1>Mint Successfully! Check your transaction here:</h1>
          <a className="underline" href={txAddress}>
            LINK
          </a>
        </div>
      );
    }
    if(error){
      return (
        <div className=" text-white  font-bold text-xl text-center flex space-x-2">
          <h1>Mint Failed!</h1>
          <h1>{error}</h1>
        </div>
      );
    }
  };


  return (
    <div className="layout relative flex items-center justify-center flex-col ">
      <div className=" absolute  right-0">
        <img src="/images/hero1.png" alt="" />
      </div>
      <div className="font-fredoka-one mt-10 flex flex-col items-center">
        <h1 className="text-white text-3xl text-cente md:text-5xl">
          Start your journey with
        </h1>
        <h1 className="my-5 text-yellow-300 text-4xl md:text-8xl">AstroCat</h1>
      </div>
      <div className="w-40 h-40 ">
        <img
          className="rounded-lg shadow-effect"
          src="/images/cat2.png"
          alt=""
        />
      </div>

      <div className="my-5 font-roboto text-white text-base md:text-2xl md:my-10">
        <p className="mb-4">
          恰巧遇到领航的你，或许就是 UnknownDAO 失散已久的同伴，无论是否是今天,
        </p>
        <p>
          我们终将遇见，握住触手可及的新世界的绳索，领航
          UnknownDAO，推开新世界的大门。
        </p>
      </div>

      <div className="flex flex-col space-y-5 flex-warp">
        <input
          className="z-10 py-2 bg-primary-200 border-2 text-xl border-none text-center text-white rounded-lg"
          type="text"
          placeholder="Mint Amount,     Max: 10"
          onChange={(e) => setAmount(e.target.value)}
        />
        <div className="z-10 text-xl text-center text-black ">
          {wallet.status === "connected" ? (
            wallet.chainId === CHAIN_ID ? (
              <button
                className="rounded-lg px-16 w-full bg-yellow-300 text-center  py-2 border-2 border-black  font-bold"
                onClick={handleMint}
              >
                MINT
              </button>
            ) : (
              <Button
                onClick={async () => {
                  if (!signer) {
                    return;
                  }
                  try {
                    await signer.provider.send("wallet_switchEthereumChain", [
                      { chainId: `0x${CHAIN_ID.toString(16)}` },
                    ]);
                  } catch {
                    await signer.provider.send("wallet_addEthereumChain", [
                      {
                        chainId: `0x${CHAIN_ID.toString(16)}`,
                        chainName: "Matic(Polygon) Mainnet",
                        nativeCurrency: {
                          name: "Matic",
                          symbol: "MATIC",
                          decimals: 18,
                        },
                        rpcUrls: ["https://matic-mainnet.chainstacklabs.com/"],
                        blockExplorerUrls: ["https://polygonscan.com/"],
                      },
                    ]);
                  }
                }}
              >
                SWITCH NETWORK
              </Button>
            )
          ) : (
            <Button
              onClick={async () => {
                await wallet.connect("injected");
              }}
            >
              CONNECT METAMASK
            </Button>
          )}
        </div>
        <div className="flex z-10">
    {renderMintProgress()}
   
        </div>
    
      </div>
    </div>
   
  );
}

export default Hero;
