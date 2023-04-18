import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { Loader } from "./index";
import { useState } from "react";
import { useContext } from "react";
import { shortenAddress } from "../utils/shortenAddress";
import { TransactionContext } from "../context/TransactionContext";
const Welcome = () => {
  const {
    connectWallet,
    connectedAccount,
    formData,
    setFormData,
    sendTransaction,
    isLoading
  } = useContext(TransactionContext);
  const handleChange=(e,name)=>{
      setFormData((prevState)=>({...prevState,[name]:e.target.value}));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const { addressTo, amount, message, keyword } = formData;
    if(!addressTo|| !amount|| !message|| !keyword)
    return;
    sendTransaction();
  };
  // const Input = ({ placeholder, name, type,id, value}) => (
  //   <input
  //     placeholder={placeholder}
  //     type={type}
  //     step="0.0001"
  //     value={value}
  //     key={placeholder}
  //     autoFocus="autoFocus"
  //     onChange={(e) => {
  //       setFormData((prevState)=>({...prevState,[name]:e.target.value}));
  //     }}
  //     className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  //   ></input>
  // );
  const commonStyles =
    "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-start md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Crypto
            <br />
            Across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the Crypto world. Buy and sell Cryptocurrencies easily on
            Krypt
          </p>
          {!connectedAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row  justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}
          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${commonStyles}`}>Reliability</div>
            <div className={`rounded-tr-2xl sm:rounded-none ${commonStyles}`}>
              Security
            </div>
            <div className={`rounded-none sm:rounded-tr-2xl ${commonStyles}`}>
              Ethereum
            </div>
            <div className={`rounded-none sm:rounded-bl-2xl ${commonStyles}`}>
              Web3.o
            </div>
            <div className={`rounded-bl-2xl sm:rounded-none ${commonStyles}`}>
              Low Fees
            </div>
            <div className={`rounded-br-2xl ${commonStyles}`}>Blockchain</div>
          </div>
        </div>
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 justify-end items-start rounded-xl flex-col h-40 mf:w-72 w-full my-5 eth-card white-glassmorphism">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">{shortenAddress(connectedAccount)}</p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justiy-start items-center blue-glassmorphism">
            <input
              placeholder="Address To"
              name="addressTo"
              type="text"
              id="1"
              value={formData.addressTo}
              className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
              onChange={(e)=>{handleChange(e,"addressTo")}}
            />
            <input
              placeholder="Amount (in Ether)"
              name="amount"
              type="number"
              id="2"
              step="0.0001"
              value={formData.amount}
              className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
              onChange={(e)=>{handleChange(e,"amount")}}
            />
            <input
              placeholder="Keyword (gif)"
              name="keyword"
              type="text"
              id="3"
              value={formData.keyword}
              className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
              onChange={(e)=>{handleChange(e,"keyword")}}
            />
            <input
              placeholder="Enter message"
              name="message"
              type="text"
              id="4"
              value={formData.message}
              className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
              onChange={(e)=>{handleChange(e,"message")}}
            />
            <div className="h-[1px] w-full bg-gray-400  my-2" />
            {isLoading ? (
              <Loader></Loader>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
              >
                Send Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
