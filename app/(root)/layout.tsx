"use client";
import React from "react";
import Navbar from "@/components/shared/Navbar/Navbar";
import BuyEnergy from "@/components/shared/Navbar/BuyEnergy";
import Transactions from "@/components/shared/Navbar/Transactions";
import { columns, transactions } from "@/constants";
import EnergyMine from "@/components/shared/Navbar/EnergyMine";
import Discover from "@/components/shared/Navbar/Discover";
import Footer from "@/components/shared/Navbar/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative ">
      <Navbar />
      <div className=" flex sm:flex-wrap">
        <BuyEnergy />
        <Transactions columns={columns} data={transactions} />
      </div>
      <EnergyMine />
      <Discover />
      <Footer />
    </main>
  );
};

export default Layout;
