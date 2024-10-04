"use client";
import React from "react";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Navbar/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light900_dark200 relative min-h-screen overflow-x-hidden">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
