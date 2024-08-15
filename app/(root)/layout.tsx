"use client";
import React from "react";
import Navbar from "@/components/shared/Navbar/Navbar";
import BuyEnergy from "@/components/shared/Navbar/BuyEnergy";
import Transactions from "@/components/shared/Navbar/Transactions";
import { columns, transactions } from "@/constants";
import EnergyMine from "@/components/shared/Navbar/EnergyMine";
import Discover from "@/components/shared/Navbar/Discover";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative ">
      <Navbar />
      <div className="flex flex-wrap bg-background-image bg-cover bg-center bg-no-repeat pb-14 pt-20 lg:w-full lg:items-center lg:justify-center lg:pt-0">
        <BuyEnergy />
        <Transactions columns={columns} data={transactions} />
      </div>

      <EnergyMine />
      <Discover />
    </main>
  );
};

export default Layout;
