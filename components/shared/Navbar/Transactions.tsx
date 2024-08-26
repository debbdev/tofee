import React from "react";
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

interface TransactionsProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

function Transactions<TData, TValue>({
  columns,
  data,
}: TransactionsProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <section className="background-light900_dark200 light-border custom-scrollbar w-full overflow-x-auto border-none px-8 py-5 shadow-none sm:w-full sm:px-8 sm:pb-20 sm:pt-0 lg:w-full lg:px-0 lg:pb-16 lg:pt-5">
      <div className="text-dark100_light900 background-light900_dark200 mx-auto max-w-screen-sm rounded-md border max-sm:w-80 sm:w-full sm:max-w-screen-sm lg:w-[84rem] lg:max-w-screen-xl">
        <h1 className="pt-4 text-center">ORDERS</h1>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
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
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {cell.column.id === "status" ? (
                        <Progress value={row.getValue("status") as number} />
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
