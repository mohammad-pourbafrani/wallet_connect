import { createThirdwebClient, getContract } from "thirdweb";
import { resolveContractAbi } from "thirdweb/contract";
import { ethereum } from "thirdweb/chains";
import {useReadContract} from "thirdweb/react"
const client = createThirdwebClient({ clientId: "86c3b16a19c7a5887ff4226b0c38c9d0", secretKey: "SEoMOkc3ag7KlkXxhUhI4EYwmTf9Z0a8ws1GU_9YkW1sRjGOtWI5ius9qa13OjHTZ14-RiqyBkKWgAo4piymuA" });
const contractABI = require('./stake_abi.json');
const myContract = getContract({
  client,
  address: "...",
  chain: ethereum,
  abi: contractABI
});
const abi = await resolveContractAbi(myContract).;

// const { data, isLoading } = useReadContract({
//     abi,
//     method: "function tokenURI(uint256 tokenId) returns (string)"
//     params: [1n],
//   });

const res = await  myContract.