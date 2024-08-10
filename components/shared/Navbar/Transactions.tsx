"use client";
import React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

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
    <section className="light-border custom-scrollbar sticky left-0  top-0 flex flex-col justify-between overflow-y-auto border-r border-none p-6 pt-36  shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[900px]">
      <div className="text-dark100_light900 background-light900_dark200 rounded-md border">
        <h1 className="text-center">ORDERS</h1>
        <Table>
          <TableHeader>
            {table?.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {cell.id === row.getValue("fullfilled") ? (
                        <Progress value={row.getValue("fullfilled")}>
                          %
                        </Progress>
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
            {/* <TableRow>
              <Button variant={"outline"}>sell</Button>
            </TableRow> */}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}

export default Transactions;
