import { createThirdwebClient, getContract } from "thirdweb";
import { resolveContractAbi } from "thirdweb/contract";
import { ethereum } from "thirdweb/chains";
import {useReadContract} from "thirdweb/react"
const client = createThirdwebClient({ clientId: "86c3b16a19c7a5887ff4226b0c38c9d0", secretKey: "SEoMOkc3ag7KlkXxhUhI4EYwmTf9Z0a8ws1GU_9YkW1sRjGOtWI5ius9qa13OjHTZ14-RiqyBkKWgAo4piymuA" });
const contractABI = require('./stake_abi.json');
const myContract = getContract({
  client,
  address: "0xf01a65f0ca8c3a9703cfab5b442956f1d6b9c515",
  chain: ethereum,
  abi: contractABI
});
// const test = await myContract.call("getPlans");
// console.log(test);

// const abi = await resolveContractAbi(myContract).;

// const { data, isLoading } = useReadContract({
//     abi,
//     method: "function tokenURI(uint256 tokenId) returns (string)"
//     params: [1n],
//   });

// const res = await  myContract.