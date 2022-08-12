export const network = {
  name: "Candle",
  chainId: 534,
  shortName: "CNDL",
  chain: "CNDL",
  network: "mainnet",
  networkId: 534,
  nativeCurrency: { name: "Candle", symbol: "CNDL", decimals: 18 },
  rpc: [
    "https://rpc.cndlchain.com",
    "wss://candleexplorer.com/socket",
  ],
  faucets: [],
  explorers: [
    { name: "Candleexplorer", url: "https://candleexplorer.com", standard: "EIP3091" },
    {
      name: "Candle Explorer",
      url: "https://candleexplorer.com",
      standard: "EIP3091",
    },
  ],
  infoURL: "https://candlelabs.org",
  parent: {
    type: "L1",
    chain: "eip155-1",
    bridges: [{ url: "https://bridge.candlelabs.org" }],
  },
};


export const supportedChainIds = [network.chainId, 534]
