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
import { ThirdwebProvider, ConnectButton, ConnectEmbed } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";

const client = createThirdwebClient({ clientId: "86c3b16a19c7a5887ff4226b0c38c9d0" , secretKey: "SEoMOkc3ag7KlkXxhUhI4EYwmTf9Z0a8ws1GU_9YkW1sRjGOtWI5ius9qa13OjHTZ14-RiqyBkKWgAo4piymuA" });

const wallets = [
  createWallet("io.metamask"),
  createWallet("walletConnect"),
  createWallet("io.hippowallet"),
];
export default function App() {
  return (
    <ThirdwebProvider>
      <ConnectButton
        client={client}
        wallets={wallets}
      />
    </ThirdwebProvider>
  );
}

