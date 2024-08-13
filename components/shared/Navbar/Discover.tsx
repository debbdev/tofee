import Link from "next/link";
import React from "react";
import Tweet from "./Tweet";

function Discover() {
  return (
    <section className="">
      <div className="text-dark100_light900 background-light850_dark100 flex justify-center py-10 sm:gap-44 sm:flex-wrap lg:flex-nowrap lg:gap-[8rem] lg:w-[80rem] lg:ms-[17rem]">
        <div className="sm:w-[650px] lg:w-[24rem]">
          <h1 className="text-xl">Discover FeeTrx Energy Market!</h1>
          <br />
          <p>
            Experience a new level of earning potential with staked Tron tokens
            through our re-imagined tron energy rental platform.
          </p>
          <br />
          <p>
            Unlock the full potential of our platform, making use of our
            automated features, including:
          </p>
          <br />
          <p>
            Don&apos;t be fooled by Tron mining sites that don&apos;t exist,
            dive into real gains through holding TEM and enjoy passive income
            with our comprehensive Tron pool solution.
          </p>
          <br />
          <p>
            Empower yourself with a suite of cutting-edge tools, designed to
            rent tron energy, optimize your Tron income and revolutionize your
            earning capabilities.
          </p>
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
