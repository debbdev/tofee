"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/shared/Navbar/Navbar";
import BuyEnergy from "@/components/shared/Navbar/BuyEnergy";
import Transactions from "@/components/shared/Navbar/Transactions";
import { columns } from "@/constants";
import { TransactionsData, TransferData } from "@/types";
import EnergyMine from "@/components/shared/Navbar/EnergyMine";
import Discover from "@/components/shared/Navbar/Discover";
import Footer from "@/components/shared/Navbar/Footer";
import FeeTrxVideo from "@/components/shared/Navbar/FeeTrxVideo";

const CACHE_KEY = "tronDataCache";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<{
    transactions: TransactionsData[];
    transfers: TransferData[];
  }>({
    transactions: [],
    transfers: [],
  });

  useEffect(() => {
    const cachedData = localStorage.getItem(CACHE_KEY);
    if (cachedData) {
      setData(JSON.parse(cachedData));
    }

    const fetchData = async () => {
      try {
        const response = await fetch("/api/tron");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();

        const newData = {
          transactions: result.transactions || [],
          transfers: result.transfers || [],
        };
        const cachedDataString = localStorage.getItem(CACHE_KEY);
        if (JSON.stringify(newData) !== cachedDataString) {
          setData(newData);
          localStorage.setItem(CACHE_KEY, JSON.stringify(newData));
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();

    const pollingInterval = setInterval(fetchData, 30000);

    return () => clearInterval(pollingInterval);
  }, []);

  return (
    <main className="background-light900_dark200 relative min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="background-light900_dark200 flex-center mx-auto w-full max-w-screen-sm flex-wrap gap-5 pb-5 pt-24 max-lg:gap-56 max-sm:gap-5 sm:max-w-screen-sm sm:gap-5 lg:max-w-screen-xl lg:gap-20 lg:pt-0">
        <FeeTrxVideo />
        <BuyEnergy />
      </div>
      <Transactions
        columns={columns}
        transactions={data.transactions}
        transfers={data.transfers}
      />
      <EnergyMine />
      <Discover />
      <Footer />
    </main>
  );
};

export default Layout;
