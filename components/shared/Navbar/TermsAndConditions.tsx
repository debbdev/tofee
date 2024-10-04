import React from "react";
import { Card, CardContent } from "@/components/ui/card";

function TermsAndConditions() {
  return (
    <section className="bg-neutral-200 pb-16 pt-28">
      <Card className=" mx-auto max-w-screen-sm pt-5 sm:max-w-screen-sm lg:max-w-screen-xl">
        <CardContent className="">
          <h4 className="pb-5 text-center text-base font-medium sm:text-center">
            Terms And Conditions
            <hr className="mx-6 max-w-screen-sm border-2 border-amber-600  sm:mx-6 sm:max-w-screen-sm lg:mx-0 lg:max-w-screen-xl" />
          </h4>
          <div className="max-w-screen-sm sm:max-w-screen-sm lg:max-w-screen-xl">
            <h1 className="text-xl">What is energy? Is energy free?</h1>
            <p className="mt-3 w-full">
              There are three types of resources in the TRON network: bandwidth,
              energy, and storage. Thanks to TRON&apos;s unique design model,
              the...
            </p>
            <p className="mt-3 w-full">
              We provides wave field energy trading function, users can
              self-service rent at any time, real-time payment. The rental
              process is ...
            </p>
            <p className="mt-3 w-full">
              Fill in your estimated daily number of times transactions and
              transfer TRX/USDT payment to designation billing address.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default TermsAndConditions;
