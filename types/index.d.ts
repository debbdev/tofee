export interface SidebarLink {
  imgURL: string;
  route: string;
  label: string;
}

export interface Payment {
  id: string;
  info: string;
  date: string;
  resource: number;
  price: number;
  payout: number;
  fullfilled: number;
  sell: string;
}
export interface Logos {
  imgURL: string;
  route: string;
  label: string;
}

export interface Transactions {
  info: string;
  buyer: string;
  exchange: string;
  energy: string;
  date: string;
  payout: string;
  status: string;
}

export interface FAQ {
  id: string;
  title: string;
  body: string;
}

export interface Blogs {
  id: number;
  heading: string;
  blogText: string;
  img: string;
  time: string;
}

export interface TransactionsData {
  type: "transaction";
  txID: string;
  fee: number;
  raw_data: {
    contract: [
      {
        parameter: {
          value: {
            owner_address: string;
            to_address: string;
            amount: number;
          };
        };
      },
    ];
  };
  ret: {
    contractRet: string;
  };
  blockTimestamp: number;
  // owner_address: string;
  // from: string;
  // to_address: string;
  // to: string;
  amount: string;
  energy: string;
  contractRet: string;
  confirmed: boolean;
  cost: {
    net_fee?: number;
  };
  tokenInfo: {
    symbol: string;
    decimals: number;
    tokenType: string;
    tokenName: string;
    tokenLogo: string;
  };
}
export interface TransferData {
  type: "transfer";
  transaction_id: string;
  block_timestamp: number;
  // transferFromAddress: string;
  from: string;
  // ownerAddress: string;
  // toAddress: string;
  to: string;
  value: number;
  amount: number;
  energy: string;
  confirmed: boolean;
  cost: {
    net_fee?: number;
  };
  tokenInfo: {
    symbol: string;
    decimals: number;
    tokenType: string;
    tokenName: string;
    tokenLogo: string;
  };
}
export interface TronTransaction {
  hash: string;
  timestamp: number;
  ownerAddress: string;
  toAddress: string;
  amount: number;
  confirmed: boolean;
  contractType: number;
}

export interface TronGridEvent {
  type: string;
  transaction_id: string;
  contract_address: string;
  event: string;
  result: {
    from: string;
    to: string;
    value: string;
  };
  block_timestamp: number;
}

export interface CoinQuote {
  data: {
    [symbol: string]: {
      id: number;
      name: string;
      symbol: string;
      quote: {
        USD: {
          price: number;
          volume_24h: number;
          market_cap: number;
          percent_change_24h: number;
          percent_change_7d: number;
          last_updated: string;
        };
      };
    };
  };
  status: {
    timestamp: string;
    error_code: number;
    error_message: string | null;
  };
}

export interface PriceData {
  tron: {
    symbol: string;
    name: string;
    price: number;
    percentChange24h: number;
    lastUpdated: Date;
  };
  tomo: {
    symbol: string;
    name: string;
    price: number;
    percentChange24h: number;
    lastUpdated: Date;
  };
}
