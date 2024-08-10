import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function EnergyMine() {
  return (
    <section className="border-r border-none bg-lime-400 py-10 shadow-light-300 dark:shadow-none">
      <div className="flex justify-center gap-10">
        <div className="">
          <Card className="text-dark100_light900 background-light900_dark200 py-14">
            <CardContent className="flex-between flex gap-10">
              <Image
                src="/assets/icons/account.svg"
                width={300}
                height={300}
                alt="coin"
                className="invert-colors"
              />
              <div className="lg:w-[400px]">
                <h1 className="text-3xl">FEM: FeeTrx Energy Mine</h1>
                <div className="flex justify-items-center gap-6">
                  <h2>49.9% APY</h2>
                  <Image
                    src="/assets/icons/account.svg"
                    width={15}
                    height={15}
                    alt="coin"
                    className="invert-colors"
                  />
                </div>
                <p className="mt-3 w-96">
                  Explore FEM, the real alternative to TRON mining. FEM is a
                  unique token with one of the most impressive APYs in the TRON
                  ecosystem. FEM gives a HUGE 90% of generated benefits back to
                  investors every single day and is designed to be the top
                  selection for individuals wanting to maximize their passive
                  income. <br /> <br /> Moreover, there`&apos;`s no requirement
                  for TRON staking! Simply mint FEM, and begin receiving TRON
                  rewards. FEM is the only token that represents a simple
                  pathway to generating TRON passive income with minimal effort.
                </p>
              </div>
            </CardContent>
            <CardFooter className="mt-4 justify-center">
              <Button
                variant={"outline"}
                className="flex-between flex w-96 justify-between gap-10"
              >
                WHITEPAPER{" "}
                <Image
                  src="/assets/icons/account.svg"
                  width={23}
                  height={23}
                  alt="coin"
                  className="invert-colors"
                />
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="flex flex-col">
          <Card className="text-dark100_light900 background-light900_dark200 mb-8">
            <CardContent>
              <h2> Next FEM & TRX rewards in:</h2>
            </CardContent>
          </Card>
          <Card className="text-dark100_light900 background-light900_dark200">
            <CardContent className=" flex flex-1 flex-col gap-6">
              <form>
                <div className="flex-between flex w-80 flex-wrap gap-4">
                  <div className="flex-between flex w-full gap-6">
                    <label htmlFor="name">Resource</label>
                    <Select>
                      <SelectTrigger id="framework">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="next">Energy</SelectItem>
                        <SelectItem value="sveltekit">BandWidth</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex-between flex w-full ">
                    <p>Energy</p>
                    <div className="flex gap-2">
                      <p>100,000</p>
                      <Image
                        src="/assets/icons/account.svg"
                        width={10}
                        height={10}
                        alt="thunder"
                        className="invert-colors"
                      />
                    </div>
                  </div>
                  <div className="flex-between flex w-full ">
                    <p>Energy</p>
                    <p>18 TRX</p>
                  </div>
                  <div className="flex-between flex w-full ">
                    <Image
                      src="/assets/icons/account.svg"
                      width={23}
                      height={23}
                      alt="promo"
                      className="invert-colors"
                    />
                    <p>18 TRX</p>
                    <Image
                      src="/assets/icons/account.svg"
                      width={23}
                      height={23}
                      alt="promo"
                      className="invert-colors"
                    />
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default EnergyMine;
