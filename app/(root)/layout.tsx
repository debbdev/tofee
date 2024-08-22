"use client";
import React from "react";
import Navbar from "@/components/shared/Navbar/Navbar";
import BuyEnergy from "@/components/shared/Navbar/BuyEnergy";
import Transactions from "@/components/shared/Navbar/Transactions";
import { columns, transactions } from "@/constants";
import EnergyMine from "@/components/shared/Navbar/EnergyMine";
import Discover from "@/components/shared/Navbar/Discover";
import Footer from "@/components/shared/Navbar/Footer";
import YouTubeVideo from "@/components/shared/Navbar/Youtube";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative ">
      <Navbar />
      <div className="background-light900_dark200 flex-center flex-wrap gap-5 pb-5 pt-24 lg:w-full lg:gap-56 lg:pt-0">
        <YouTubeVideo />
        <BuyEnergy />
      </div>
      <Transactions columns={columns} data={transactions} />
      <EnergyMine />
      <Discover />
      <Footer />
    </main>
  );
};

export default Layout;
