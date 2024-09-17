import Link from "next/link";
import React from "react";
import Tweet from "./Tweet";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import Contact from "./Contact";
import FrequentlyAskedQuestion from "./FrequentlyAskedQuestion";
import TermsAndConditions from "./TermsCondition";

function Discover() {
  return (
    <section className="background-light900_dark200  w-full px-4 py-8 sm:w-full">
      <div className="flex-between text-dark100_light900 mx-auto max-w-screen-sm flex-col max-lg:w-[84rem] max-sm:w-80 sm:w-full sm:max-w-screen-sm sm:flex-row sm:flex-wrap sm:gap-8 lg:w-[84rem] lg:max-w-screen-xl lg:items-start lg:gap-10 lg:px-0 lg:py-16">
        <div className="mb-8 max-sm:w-80 sm:mb-0 sm:w-full sm:px-10 lg:w-[30rem]">
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
        <div className="mb-8 flex flex-col max-sm:w-80 sm:mb-0 sm:w-full sm:px-10 lg:w-64">
          <h1 className=" text-xl font-bold">Links</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Link href="/freq-asked-question" className="mt-2 block">
                FAQ
              </Link>
            </DialogTrigger>
            <DialogContent className="text-dark100_light900 background-light900_dark200 items-center">
              <FrequentlyAskedQuestion />
            </DialogContent>
          </Dialog>

          <Link href="/" className="mt-2 block">
            Blog
          </Link>
          <Dialog>
            <DialogTrigger asChild>
              <Link href="/terms-conditions" className="mt-2 block">
                Terms & conditions
              </Link>
            </DialogTrigger>
            <DialogContent className="text-dark100_light900 background-light900_dark200 items-center">
              <TermsAndConditions />
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Link href="/contact" className="mt-2 block">
                Email support
              </Link>
            </DialogTrigger>
            <DialogContent className="text-dark100_light900 background-light900_dark200 items-center">
              <Contact />
            </DialogContent>
          </Dialog>

          <Link href="https://t.me/FeeTrxOfficial" className="mt-2 block">
            Telegram support
          </Link>
          <Link href="https://wa.me/243979788274" className="mt-2 block">
            WhatsApp
          </Link>
        </div>

        <Tweet />
      </div>
    </section>
  );
}

export default Discover;
