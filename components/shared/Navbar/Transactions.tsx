import React, { useEffect, useState } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "./Progress";
import { TransactionsData, TransferData } from "@/types";
import Info from "./Info";
import {
  fetchTronTransactions,
  fetchTronTransfers,
} from "@/app/api/tronweb/route";

type CombinedData = TransactionsData | TransferData;

interface TransactionsProps {
  columns: ColumnDef<CombinedData>[];
  initialTransactions?: TransactionsData[];
  initialTransfers?: TransferData[];
  walletAddress: string;
}

function Transactions({
  columns,
  initialTransactions = [],
  initialTransfers = [],
  walletAddress,
}: TransactionsProps) {
  const [transactions, setTransactions] =
    useState<TransactionsData[]>(initialTransactions);
  const [transfers, setTransfers] = useState<TransferData[]>(initialTransfers);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const [txs, transferData] = await Promise.all([
          fetchTronTransactions(walletAddress),
          fetchTronTransfers(walletAddress),
        ]);

        setTransactions(txs);
        setTransfers(transferData);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch data:", err);
        setError("Failed to load transaction data");
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
    // Poll every 10 seconds
    const interval = setInterval(loadData, 10000);

    return () => clearInterval(interval);
  }, [walletAddress]);

  const combinedData = React.useMemo(() => {
    const allData = [...transactions, ...transfers];
    return allData.sort((a, b) => {
      const timestampA =
        "block_timestamp" in a ? a.block_timestamp : a.blockTimestamp;
      const timestampB =
        "block_timestamp" in b ? b.block_timestamp : b.blockTimestamp;
      return timestampB - timestampA;
    });
  }, [transactions, transfers]);

  const table = useReactTable({
    data: combinedData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <section className="background-light900_dark200 light-border custom-scrollbar w-full overflow-x-auto border-none px-8 py-5 shadow-none sm:w-full sm:px-8 sm:pb-20 sm:pt-0 lg:w-full lg:px-0 lg:pb-16 lg:pt-5">
      <div className="text-dark100_light900 background-light900_dark200 mx-auto max-w-screen-sm rounded-md border max-sm:w-80 sm:w-full sm:max-w-screen-sm lg:w-[84rem] lg:max-w-screen-xl">
        <h1 className="pt-4 text-center">ORDERS</h1>
        <Table>
          <TableHeader>
            <TableRow>
              {table.getHeaderGroups().map((headerGroup) => (
                <React.Fragment key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </React.Fragment>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading && !table.getRowModel().rows.length ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Loading...
                </TableCell>
              </TableRow>
            ) : error ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center text-red-500"
                >
                  {error}
                </TableCell>
              </TableRow>
            ) : table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {cell.column.id === "confirmed" ? (
                        <Progress value={cell.getValue() as boolean} />
                      ) : cell.column.id === "token_logo" ? (
                        <Info value={row.original.type} />
                      ) : (
                        flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}

export default Transactions;
