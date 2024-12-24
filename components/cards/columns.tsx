import { ColumnDef } from "@tanstack/react-table";
import { TransactionsData, TransferData } from "@/types";

type CombinedData = TransactionsData | TransferData;

export const columns: ColumnDef<CombinedData>[] = [
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => {
      const type = row.original.type;
      return (
        <span
          className={`rounded px-2 py-1 text-sm ${
            type === "transaction"
              ? "bg-blue-100 text-blue-800"
              : "bg-green-100 text-green-800"
          }`}
        >
          {type === "transaction" ? "TRX" : "TRC20"}
        </span>
      );
    },
  },
  {
    accessorKey: "txID",
    header: "Transaction ID",
    cell: ({ row }) => {
      const txId =
        "txID" in row.original
          ? row.original.txID
          : row.original.transaction_id;
      return (
        <a
          href={`https://tronscan.org/#/transaction/${txId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          {`${txId.slice(0, 8)}...${txId.slice(-8)}`}
        </a>
      );
    },
  },
  {
    accessorKey: "timestamp",
    header: "Time",
    cell: ({ row }) => {
      const timestamp = row.original.timestamp;
      return new Date(timestamp).toLocaleString();
    },
  },
  {
    accessorKey: "from",
    header: "From",
    cell: ({ row }) => {
      const from =
        "ownerAddress" in row.original
          ? row.original.ownerAddress
          : row.original.from;
      return from ? `${from.slice(0, 6)}...${from.slice(-6)}` : "N/A";
    },
  },
  {
    accessorKey: "to",
    header: "To",
    cell: ({ row }) => {
      const to =
        "toAddress" in row.original ? row.original.toAddress : row.original.to;
      return to ? `${to.slice(0, 6)}...${to.slice(-6)}` : "N/A";
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const { amount, tokenInfo } = row.original;

      if (!tokenInfo) {
        // If tokenInfo is undefined, show a fallback message
        return "N/A";
      }

      const decimals = tokenInfo.decimals || 0; // Default to 0 if decimals is missing
      const symbol = tokenInfo.symbol || "UNKNOWN"; // Default to UNKNOWN if symbol is missing
      const formattedAmount = amount / Math.pow(10, decimals);

      return `${formattedAmount.toFixed(6)} ${symbol}`;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status =
        "contractRet" in row.original ? row.original.contractRet : "SUCCESS";
      return (
        <span
          className={`rounded px-2 py-1 text-sm ${
            status === "SUCCESS"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {status}
        </span>
      );
    },
  },
];
