import logo from "../../images/logo2.png";
const Footer = () => {
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
      <div className="w-full flex  sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-[0.5] justify-center items-center">
          <img src={logo} alt="logo" className="w-32" />
        </div>
        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-4">
          <a href="https://coinmarketcap.com/currencies/bitcoin/" target="_blank" rel="noopener noreferrer"><p className="text-white hover:text-slate-400 text-base text-center mx-2 cursor-pointer">
            Market
          </p></a>
          <a href="https://coinmarketcap.com/currencies/bitcoin/" target="_blank" rel="noopener noreferrer"><p className="text-white hover:text-slate-400 text-base text-center mx-2 cursor-pointer">
            Exchange
          </p></a>
          <a href="https://coinmarketcap.com/currencies/bitcoin/" target="_blank" rel="noopener noreferrer"><p className="text-white hover:text-slate-400 text-base text-center mx-2 cursor-pointer">
            Tutorials
          </p></a>
          <a href="https://coinmarketcap.com/currencies/bitcoin/" target="_blank" rel="noopener noreferrer"><p className="text-white hover:text-slate-400 text-base text-center mx-2 cursor-pointer">
            Wallets
          </p></a>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col mt-5">
        <p className="text-white text-center">Designed and developed by</p>
        <a href="https://abishekupadhyay202.wixsite.com/abishek-upadhyay"><p className="text-white hover:text-slate-400 text-center">Abishek Upadhyay</p></a>
      </div>
      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5"/>
      <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-center">Krypt@2023</p>
      <p className="text-white text-center">All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
