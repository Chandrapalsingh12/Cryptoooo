import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Page/Home";
// Rainbow Kit
import "@rainbow-me/rainbowkit/styles.css";
import { configureChains, createClient, goerli, mainnet, WagmiConfig } from "wagmi";
import { publicProvider } from 'wagmi/providers/public';
import { getDefaultWallets,RainbowKitProvider } from "@rainbow-me/rainbowkit";

const {chains, provider} = configureChains(
  [mainnet, goerli],
  [publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: 'My APp',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})


function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <BrowserRouter>
          <div className="wrap">
            <div className="nav-section">
              <Navbar />
            </div>
            <div className="contant-section">
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
