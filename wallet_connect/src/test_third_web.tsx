import React from "react";
import { createThirdwebClient, getContract, prepareContractCall } from "thirdweb";
import { ethereum, defineChain } from "thirdweb/chains";
import { TransactionButton, useReadContract } from "thirdweb/react";



const client = createThirdwebClient({ clientId: "86c3b16a19c7a5887ff4226b0c38c9d0", secretKey: "SEoMOkc3ag7KlkXxhUhI4EYwmTf9Z0a8ws1GU_9YkW1sRjGOtWI5ius9qa13OjHTZ14-RiqyBkKWgAo4piymuA" });

// const contractABI = [
  
// ] as const;

export const testChain = defineChain(1);

const contract = getContract({
    client,
    address: "0xf01a65f0ca8c3a9703cfab5b442956f1d6b9c515",
    chain: testChain,
    // abi: contractABI
});




const PrintButton: React.FC = () => {
    // useReadContract({
    //     contract,
    //     method: "getPlans",
    //     // params: [],
    // });


    const handleClick = () => {
        {
            const { data } = prepareContractCall({ contract, method: "getPlans" });
            console.log(data?.length);

        }
    };

    return (
        <button onClick={handleClick}>
            Click Me
        </button>
    );


};

export default PrintButton;