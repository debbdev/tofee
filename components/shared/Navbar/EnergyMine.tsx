import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import FlipCountdown from "@rumess/react-flip-countdown";
import { useTheme } from "@/context/ThemeProvider";

function EnergyMine() {
  const { mode } = useTheme();
  return (
    <section className="border-r border-none bg-lime-400 py-10 shadow-light-300 dark:shadow-none">
      <div className="me-60 ms-60 flex justify-center gap-5 ">
        <div className="ms-10">
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
                  income. <br /> <br /> Moreover, there&apos;s no requirement
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
              <h2 className="py-4"> Next FEM & TRX rewards in:</h2>
              <FlipCountdown
                hideYear
                hideMonth
                hideDay
                endAtZero
                titlePosition="bottom"
                hourTitle="Hours"
                minuteTitle="Minutes"
                secondTitle="Seconds"
                endAt={"2025-12-12 01:26:58"}
                theme={mode === "dark" ? "dark" : "light"}
              />
            </CardContent>
          </Card>
          <Card className="text-dark100_light900 background-light900_dark200">
            <CardContent className="">
              <h5 className="mt-5 text-center">Token Exchange (TRX/USDT)</h5>
              <h6 className="active-theme mt-0 pt-0">
                Exchange Quantity = (Received Quantity × Exchange Rate - Gas
                fee)
              </h6>
              <div className="">
                <form>
                  <div className="flex-between gap-1">
                    <div className="flex-between w-full flex-col gap-1">
                      <label htmlFor="name">USDT</label>
                      <input
                        type="text"
                        className="text-dark100_light900 background-light900_dark200 w-full rounded-md border px-1 py-3 text-center"
                      />
                      <label htmlFor="name">TRX</label>
                      <input
                        type="text"
                        className="text-dark100_light900 background-light900_dark200 w-full rounded-md border px-1 py-3 text-center"
                      />
                      <label htmlFor="name">Platform Exchange Address</label>
                      <input
                        type="text"
                        className="text-dark100_light900 background-light900_dark200 w-full rounded-md border px-1 py-3 text-center"
                        placeholder="Exchange Address"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="">
                <h6 className="active-theme pt-4">Amount</h6>
                <p className="text-left lg:w-[520px]">
                  Just transfer TRX or USDT token to the platform exchange
                  address, then the platform will automatically transfer the
                  corresponding amount of USDT or TRX token after receiving your
                  exchange amount to your transfer address.
                </p>
              </div>
              {/* <form>
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
              </form> */}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default EnergyMine;
