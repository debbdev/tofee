import React from "react";
import { Card, CardContent } from "@/components/ui/card";

function FrequentlyAskedQuestion() {
  return (
    <>
      <Card className="text-dark100_light900 background-light900_dark200 flex-between mt-5 h-36 flex-wrap gap-5 pt-3 ">
        <CardContent className="">
          <div className="lg:w-[400px]">
            <h1 className="text-xl">What is energy? Is energy free?</h1>
            <p className="mt-3 w-full">
              There are three types of resources in the TRON network: bandwidth,
              energy, and storage. Thanks to TRON&apos;s unique design model,
              the...
            </p>
          </div>
        </CardContent>
      </Card>
      <Card className="text-dark100_light900 background-light900_dark200 flex-between h-36 w-full flex-wrap gap-5 pt-3">
        <CardContent className="">
          <div className="lg:w-[400px]">
            <h1 className="text-xl">How to rent energy?</h1>
            <p className="mt-3 w-full">
              We provides wave field energy trading function, users can
              self-service rent at any time, real-time payment. The rental
              process is ...
            </p>
          </div>
        </CardContent>
      </Card>
      <Card className="text-dark100_light900 background-light900_dark200 flex-between  h-36 flex-wrap gap-5 pt-3">
        <CardContent className="">
          <div className="lg:w-[400px]">
            <h1 className="text-xl">How to purchase number of times</h1>
            <p className="mt-3 w-full">
              Fill in your estimated daily number of times transactions and
              transfer TRX/USDT payment to designation billing address.
            </p>
          </div>
        </CardContent>
      </Card>
      <Card className="text-dark100_light900 background-light900_dark200 flex-between  h-36 flex-wrap gap-5 pt-3">
        <CardContent className="">
          <div className="lg:w-[400px]">
            <h1 className="text-xl">When will the energy arrive?</h1>
            <p className="mt-3 w-full">
              After the payment is completed,the energy will be received within
              6 second. In rare cases, there will be a delay of 30 to 60
              seconds.
            </p>
          </div>
        </CardContent>
      </Card>
      <Card className="text-dark100_light900 background-light900_dark200 flex-between  h-36 flex-wrap gap-5 pt-3">
        <CardContent className="">
          <div className="lg:w-[400px]">
            <h1 className="text-xl">
              How many orders can I have at the same time?
            </h1>
            <p className="mt-3 w-full">
              Multiple purchases can be made under the same address, with no
              limits.
            </p>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export default FrequentlyAskedQuestion;
