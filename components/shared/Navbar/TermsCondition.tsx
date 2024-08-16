import React from "react";
import { Card, CardContent } from "@/components/ui/card";

function TermsAndConditions() {
  return (
    <>
      <Card className="text-dark100_light900 background-light900_dark200 flex-between mt-5 h-full flex-wrap gap-5 pt-3 ">
        <CardContent className="">
          <div className="lg:w-[400px]">
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
    </>
  );
}

export default TermsAndConditions;
