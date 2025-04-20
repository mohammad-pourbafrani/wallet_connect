import React, { FunctionComponent } from 'react';

import { ContractOptions, createThirdwebClient, getContract } from "thirdweb";
import { resolveContractAbi } from "thirdweb/contract";
import { ethereum } from "thirdweb/chains";
import { useReadContract } from "thirdweb/react"
const client = createThirdwebClient({ clientId: "86c3b16a19c7a5887ff4226b0c38c9d0", secretKey: "SEoMOkc3ag7KlkXxhUhI4EYwmTf9Z0a8ws1GU_9YkW1sRjGOtWI5ius9qa13OjHTZ14-RiqyBkKWgAo4piymuA" });
const contractABI = require('./stake_abi.json');
// const myContract = getContract({
//   client,
//   address: "0xf01a65f0ca8c3a9703cfab5b442956f1d6b9c515",
//   chain: ethereum,
//   abi: contractABI
// });

// const { data, isLoading } = useReadContract({
//   myContract,
//   method: "function tokenURI(uint256 tokenId) returns (string)"
//   params: [1n],
// });


const myContract = getContract({
  client,
  address: "0xf01a65f0ca8c3a9703cfab5b442956f1d6b9c515",
  chain: ethereum,
  abi: contractABI
});


// // Read data from contract
// const { data: plans, isLoading, error } = useContractRead(
//   myContract,
//   "getPlans"
// );



const PrintButton: FunctionComponent = () => {
  const { data: plans, isLoading, error } = useReadContract(
  myContract.abi,
  
);
  const handleClick = async (): Promise<void> => {
    console.log("click me");
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s',
  };

  const hoverStyle: React.CSSProperties = {
    backgroundColor: '#45a049',
  };

  return (
    <button
      onClick={handleClick}
      style={buttonStyle}
    // onMouseOver={(e) => (e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor!)}
    // onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor!)}
    >
      Click Me
    </button>
  );
};

export default PrintButton;



