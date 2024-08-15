import Link from "next/link";
import React from "react";
import Tweet from "./Tweet";

function Discover() {
  return (
    <section className="px-4 py-8">
      <div className=" text-dark100_light900 background-light850_dark100 flex-between flex-col sm:flex-row sm:flex-wrap sm:gap-8 lg:items-start lg:gap-10 lg:px-0 lg:py-16 lg:w-[84rem] mx-auto">
        <div className="mb-8 sm:mb-0 max-sm:w-[24rem] sm:w-full lg:w-[25rem] sm:px-10">
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
        <div className="mb-8 flex flex-col sm:mb-0 max-sm:w-[24rem] sm:w-[300px] lg:w-52 sm:px-10">
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
        <div className="mb-8 flex flex-col sm:mb-0 max-sm:w-[24rem] sm:w-[300px] lg:w-52 sm:px-10">
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
        <div className="max-sm:w-[24rem] sm:w-full lg:w-[25rem] sm:px-10">
          <Tweet />
        </div>
      </div>
    </section>
  );
}

export default Discover;
