import React, { useEffect, useState } from "react";
import { erc20ABI, useAccount } from "wagmi";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { ethers } from "ethers";
import SimpleStorage_abi from "../ABI.json";

function Home() {

  const contractAddress = "0xE257532A7d51DC34F8Be4ea74A1454a2c1bA5311"
  const { address, isConnecting, isDisconnected } = useAccount();

  const [balance, setBalance] = useState(null);
  const [totalSupply, setTotalSupply] = useState("");

  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);

  


  useEffect(() => {
    const updateEthers = () => {
      const tempProvider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(tempProvider);
  
      const tempSigner = tempProvider.getSigner();
      setSigner(tempSigner);
  
      const tempContract = new ethers.Contract(
        contractAddress,
        SimpleStorage_abi,
        tempSigner
      );
      setContract(tempContract);
    };
    updateEthers()
    // async function fetchData() {
    //   const contractAddress = new ethers.providers.Web3Provider(
    //     window.ethereum
    //   );
    //   const contractABI = erc2;
    //   const contract = new ethers.Contract(
    //     contractAddress,
    //     contractABI,
    //     "0x1234567890123456789012345678901234567890"
    //   );

    //   // Call the function that returns the total supply of tokens
    //   const totalSupply = await contract.price();

    //   // Convert the total supply from wei to ether
    //   const totalSupplyInEther = ethers.utils.formatEther(totalSupply);

    //   setTotalSupply(totalSupplyInEther);
    // }

    // fetchData();
  }, []);
  
  const totalSup = async()=>{
    let val = await contract.totalSupply()
    setTotalSupply(val)


  }

  useEffect(() => {
    const fetchBalance = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const balance = await provider.getBalance(
        "0x1234567890123456789012345678901234567890"
      );
      setBalance(parseFloat(ethers.utils.formatEther(balance)).toFixed(3));
    };
    fetchBalance();
    totalSup()
  }, []);

  if (isConnecting) return <div>Connecting…</div>;
  if (isDisconnected) return <div>Disconnected</div>;

  // const erc20 = new ethers.Contract("0xe2559F76A20417c7a93b34d570aE0b3F351Dd139", erc20ABI,provider)

  // const tokenName = await erc20.name();

  return (
    <div className="dashboard">
      <div className="dashboard-info">
        <div className="wallet-add">
          <AccountBalanceWalletIcon /> Wallet Address-{address}
        </div>

        <div className="wallet-allinfo">
          <div className="grid-container">
            <div className="grid-item">
              My Total Token <br />
              2300
            </div>
            <div className="grid-item">
              Total Token Value <br />
              2300$
            </div>
            <div className="grid-item">
              Taken Burned <br />
              2300$
            </div>
            <div className="grid-item">
              Total Supply
              <br />
              2300$
            </div>
            <div className="grid-item">
              Market Value
              <br />
              {balance}$
            </div>
            <div className="grid-item">
              Current Price
              <br />
              {totalSupply}$
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
