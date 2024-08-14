import Link from "next/link";
import React from "react";
import Tweet from "./Tweet";

function Discover() {
  return (
    <section className="">
      <div className="text-dark100_light900 background-light850_dark100 flex justify-center py-10 sm:flex-wrap sm:gap-44 lg:ms-[17rem] lg:w-[80rem] lg:flex-nowrap lg:gap-32">
        <div className="sm:w-[650px] lg:w-96">
          <h1 className="text-xl">Discover FeeTrx Energy Market!</h1>
          <br />
          <p>
            The tron energy Rental platform is an energy exchange platform in
            wave field ecology. Our goal is to reduce the TRX fee required for
            wave traders to consume energy.
            <br />
            <br />
            The exchange process is simple and fast, with a favorable price. We
            provide you with a safer and more efficient energy exchange service
            24 hours a day.
          </p>
          <br />
          <p>
            Unlock the full potential of our platform, making use of our
            automated features
          </p>
          <br />
        </div>
        <div className="flex flex-col sm:w-[650px] lg:w-52">
          <h1 className="text-xl">Links</h1>
          <Link href="/">FAQ</Link>
          <Link href="/">Email support</Link>
          <Link href="/">Telegram support</Link>
          <Link href="/">Twitter</Link>
          <Link href="/">Medium</Link>
          <Link href="/">Blog</Link>
          <Link href="/">API (Examples)</Link>
          <Link href="/">API (Postman)</Link>
          <Link href="/">Terms & conditions</Link>
        </div>
        <div className="sm:w-[650px] lg:w-[25rem]">
          <Tweet />
        </div>
      </div>
    </section>
  );
}

export default Discover;
