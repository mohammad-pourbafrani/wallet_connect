// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import { createThirdwebClient } from "thirdweb";
import { ethereum, defineChain, bsc } from "thirdweb/chains";
import { ThirdwebProvider, ConnectButton, useActiveAccount } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";

const client = createThirdwebClient({ clientId: "86c3b16a19c7a5887ff4226b0c38c9d0", secretKey: "SEoMOkc3ag7KlkXxhUhI4EYwmTf9Z0a8ws1GU_9YkW1sRjGOtWI5ius9qa13OjHTZ14-RiqyBkKWgAo4piymuA" });

const wallets = [
  createWallet("io.metamask"),
  createWallet("walletConnect"),
  createWallet("io.hippowallet"),
];

const smartChain = defineChain({
  id: 56,
  name: "Smart Chain",
  nativeCurrency: {
    name: "BNB Smart Chain",
    symbol: "BNB",
    decimals: 18,
  },
  blockExplorers: [
    {
      name: "bscscan",
      url: "https://bscscan.com",
    },
  ],
});
export default function App() {
  return (
    <ThirdwebProvider>
      <ConnectButton
        client={client}
        wallets={wallets}
        connectModal={{ size: "compact", showThirdwebBranding: false }}
        showAllWallets={false}
        chains={[bsc, ethereum]}
      />
    </ThirdwebProvider>
  );
}


const WalletInfo = () => {
  const address = useActiveAccount();

  return (
    <div>
      {address ? (
        <p>Connected wallet address: {address}</p>
      ) : (
        <p>No wallet connected</p>
      )}
    </div>
  );
};

// export const bsc = /* @__PURE__ */ defineChain({
//   id: 56,
//   name: "BNB Smart Chain Mainnet",
//   nativeCurrency: {
//     name: "BNB Chain Native Token",
//     symbol: "BNB",
//     decimals: 18,
//   },
// blockExplorers: [
//   {
//     name: "bscscan",
//     url: "https://bscscan.com",
//   },
// ],
// });



// /**
//  * @chain
//  */
// export const ethereum = /* @__PURE__ */ defineChain({
//   id: 1,
//   name: "Ethereum",
//   nativeCurrency: {
//     name: "Ether",
//     symbol: "ETH",
//     decimals: 18,
//   },
//   blockExplorers: [
//     {
//       name: "Etherscan",
//       url: "https://etherscan.io",
//     },
//   ],
// });

// /**
//  * @alias ethereum
//  * @chain
//  */
// export const mainnet = ethereum;

