import Web3 from "web3";

// Connect to MetaMask (make sure MetaMask is installed)
const connectWallet = async () => {
    if (window.ethereum) {
        try {
            // await window.ethereum.request({ method: "eth_requestAccounts" });
            const web3 = new Web3(window.ethereum);
            const accounts = await web3.eth.getAccounts();
            console.log("Connected:", accounts[0]);
            return { web3, account: accounts[0] };
        } catch (error) {
            console.error("User denied access:", error);
        }
    } else if (window.bsc) {
        console.error("bsc connected");
    } else {
        console.error("Please install MetaMask!");
    }
};

export default connectWallet;

// import Web3 from "web3";

// const connectWallet = async () => {
//   if (window.ethereum) {
//     try {
//       // Request wallet connection
//       await window.ethereum.request({ method: "eth_requestAccounts" });

//       // Check if user is on BSC, if not — prompt switch
//       const chainId = await window.ethereum.request({ method: "eth_chainId" });

//       // BSC Mainnet chainId is 0x38 (56 in decimal)
//       if (chainId !== "0x38") {
//         try {
//           await window.ethereum.request({
//             method: "wallet_switchEthereumChain",
//             params: [{ chainId: "0x38" }],
//           });
//         } catch (switchError) {
//           // If BSC is not added to MetaMask, add it
//           if (switchError.code === 4902) {
//             await window.ethereum.request({
//               method: "wallet_addEthereumChain",
//               params: [{
//                 chainId: "0x38",
//                 chainName: "Binance Smart Chain Mainnet",
//                 nativeCurrency: {
//                   name: "BNB",
//                   symbol: "BNB",
//                   decimals: 18
//                 },
//                 rpcUrls: ["https://bsc-dataseed.binance.org/"],
//                 blockExplorerUrls: ["https://bscscan.com"]
//               }]
//             });
//           } else {
//             throw switchError;
//           }
//         }
//       }

//       const web3 = new Web3(window.ethereum);
//       const accounts = await web3.eth.getAccounts();

//       console.log("Connected to BSC with account:", accounts[0]);
//       return { web3, account: accounts[0] };
//     } catch (error) {
//       console.error("Connection failed:", error);
//     }
//   } else {
//     console.error("MetaMask is not installed.");
//   }
// };


// export default connectWallet;