import Link from "next/link";
import React from "react";
import Tweet from "./Tweet";
import Footer from "./Footer";

function Discover() {
  return (
    <section className="nav-background bg-background-mine bg-cover bg-center bg-no-repeat px-4 py-8">
      <div className=" flex-between mx-auto flex-col bg-transparent text-white sm:flex-row sm:flex-wrap sm:gap-8 lg:w-[84rem] lg:items-start lg:gap-10 lg:px-0 lg:py-16">
        <div className="mb-8 max-sm:w-96 sm:mb-0 sm:w-full sm:px-10 lg:w-[25rem]">
          <h1 className="text-xl font-bold">Discover FeeTrx Energy Market!</h1>
          <p className="mt-4">
            The Tron energy rental platform is an energy exchange platform in
            wave field ecology. Our goal is to reduce the TRX fee required for
            wave traders to consume energy.
            <br />
            <br />
            The exchange process is simple and fast, with a favorable price. We
            provide you with a safer and more efficient energy exchange service
            24 hours a day.
          </p>
          <p className="mt-4">
            Unlock the full potential of our platform, making use of our
            automated features.
          </p>
        </div>
        <div className="mb-8 flex flex-col max-sm:w-96 sm:mb-0 sm:w-[300px] sm:px-10 lg:w-52">
          <h1 className="text-xl font-bold">Links</h1>
          <Link href="/" className="mt-2 block">
            FAQ
          </Link>
          <Link href="/" className="mt-2 block">
            Medium
          </Link>
          <Link href="/" className="mt-2 block">
            Blog
          </Link>
          <Link href="/" className="mt-2 block">
            Terms & conditions
          </Link>
        </div>
        <div className="mb-8 flex flex-col max-sm:w-96 sm:mb-0 sm:w-[300px] sm:px-10 lg:w-52">
          <h1 className="text-xl font-bold">Contact Us</h1>

          <Link href="/" className="mt-2 block">
            Email support
          </Link>
          <Link href="/" className="mt-2 block">
            Telegram support
          </Link>
          <Link href="/" className="mt-2 block">
            Twitter
          </Link>
        </div>
        <div className="max-sm:w-96 sm:w-full sm:px-10 lg:w-[25rem]">
          <Tweet />
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Discover;
