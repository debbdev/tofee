import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import FlipCountdown from "@rumess/react-flip-countdown";
import { useTheme } from "@/context/ThemeProvider";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

function EnergyMine() {
  const { mode } = useTheme();
  const [usdt, setUSDT] = useState<string>("");
  const [trx, setTRX] = useState<string>("");
  const [result, setResult] = useState<string | null>(null);
  const [dialog, setDialog] = useState<{ visible: boolean; message: string }>({
    visible: false,
    message: "",
  });

  // Conversion rate
  const conversionRate = 0.1284;
  const difference = 0.1;

  // Update TRX when USDT changes
  const handleUsdtChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const usdtValue = parseFloat(e.target.value);
    setUSDT(e.target.value);
    if (!isNaN(usdtValue)) {
      setTRX((usdtValue / conversionRate - difference).toFixed(2));
    } else {
      setTRX("");
    }
  };

  // Update USDT when TRX changes
  const handleTrxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const trxValue = parseFloat(e.target.value);
    setTRX(e.target.value);
    if (!isNaN(trxValue)) {
      setUSDT((trxValue * conversionRate).toFixed(2));
    } else {
      setUSDT("");
    }
  };

  // Copy function
  const handleCopy = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setResult(text);
        setDialog({ visible: true, message: `${text} successfully Copied!` });
        setTimeout(
          () => setDialog((prev) => ({ ...prev, visible: false })),
          3000
        );
      })
      .catch(() => {
        setDialog({ visible: true, message: "Failed to copy!" });
        setTimeout(
          () => setDialog((prev) => ({ ...prev, visible: false })),
          3000
        );
      });
  };

  return (
    <section className="bg-lime-400 py-10 shadow-light-300 dark:shadow-none">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-16 lg:w-[84rem] mx-auto">
          <div className="mb-8 flex-1 lg:mb-0 p-3 sm:p-3 lg:p-0 ">
            <Card className="text-dark100_light900 background-light900_dark200 p-6 sm:p-10 lg:p-14 lg:w-[50rem] h-full">
              <CardContent className="flex flex-col lg:flex-row lg:gap-10">
                <div className="flex flex-wrap justify-center gap-4">
                  <Image
                    src="/assets/icons/account.svg"
                    width={150}
                    height={150}
                    alt="coin"
                    className="invert-colors"
                  />
                </div>
                <div className="flex-1">
                  <h1 className="text-2xl font-bold sm:text-3xl">
                    FEM: FeeTrx Energy Mine
                  </h1>
                  <div className="mt-2 flex items-center gap-4">
                    <h2 className="text-xl">49.9% APY</h2>
                    <Image
                      src="/assets/icons/account.svg"
                      width={20}
                      height={20}
                      alt="coin"
                      className="invert-colors"
                    />
                  </div>
                  <p className="mt-4">
                    The FeeTrx energy rental platform is an energy exchange
                    platform in wave field ecology. Our goal is to reduce the
                    TRX fee required for wave traders to consume energy. <br />
                    <br />
                    The exchange process is simple and fast, with a favorable
                    price. We provide you with a safer and more efficient energy
                    exchange service 24 hours a day.
                  </p>
                  <h2 className="pt-5 text-xl font-semibold">Instructions</h2>
                  <ul className="mt-3 list-disc pl-5">
                    <li>Please use a decentralized wallet to rent energy.</li>
                    <li>
                      The system accountant calculates the total amount and
                      amount. Support TRX or USDT payments.
                    </li>
                    <li>
                      After payment, the platform will distribute the
                      corresponding energy to your account.
                    </li>
                    <li>
                      Advocate for on-demand leasing and use it again! Unlimited
                      number of transactions per day!
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="mt-6 flex justify-center">
                <Button
                  variant={"outline"}
                  className="flex w-full max-w-xs justify-between"
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
          <div className="flex-1 p-3 sm:p-3 lg:p-0">
            <Card className="text-dark100_light900 background-light900_dark200 mb-8 p-3 lg:w-[30rem]">
              <CardContent>
                <h2 className="py-4 text-xl">Next FEM & TRX rewards in:</h2>
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
            <Card className="text-dark100_light900 background-light900_dark200 p-6 lg:w-[30rem]">
              <CardContent>
                <h5 className="mt-5 text-center text-xl">
                  Token Exchange (TRX/USDT)
                </h5>
                <h6 className="mb-4 mt-2 text-sm text-center active-theme">
                  Exchange Quantity = (Received Quantity × Exchange Rate - Gas
                  fee)
                </h6>
                <form>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="usdt" className="text-sm text-center">
                        USDT
                      </label>
                      <input
                        type="text"
                        id="usdt"
                        className="w-full rounded-md border px-3 py-2 text-center"
                        value={usdt}
                        onChange={handleUsdtChange}
                      />
                      <label htmlFor="trx" className="text-sm text-center">
                        TRX
                      </label>
                      <input
                        type="text"
                        id="trx"
                        className="w-full rounded-md border px-3 py-2 text-center"
                        value={trx}
                        onChange={handleTrxChange}
                      />
                      <div className="flex items-center gap-2">
                        <span className="text-sm">
                          Platform Billing Address
                        </span>
                        <Image
                          src="/assets/icons/qrcode1.svg"
                          width={20}
                          height={20}
                          alt="qrcode"
                          className="active-theme"
                        />
                      </div>
                      <div className="mt-2 flex items-center gap-2 rounded-md border px-2 py-1">
                        <input
                          type="text"
                          className="w-full border-none bg-transparent"
                          value="THH8j7n8kcq6DmdAkSrUhQzn63jPoTpsWw"
                          readOnly
                        />
                        <span
                          className="cursor-pointer"
                          onClick={() =>
                            handleCopy("THH8j7n8kcq6DmdAkSrUhQzn63jPoTpsWw")
                          }
                        >
                          <Dialog>
                            <DialogTrigger asChild>
                              <Image
                                src="/assets/icons/copy.svg"
                                alt="copy"
                                width={20}
                                height={20}
                                className={`cursor-pointer ${result ? "text-green-700" : " active-theme"}`}
                              />
                            </DialogTrigger>
                            {dialog.visible && (
                              <DialogContent className="text-dark100_light900 background-light900_dark200">
                                <span className="ml-2 text-green-700">
                                  {dialog.message}
                                </span>
                              </DialogContent>
                            )}
                          </Dialog>
                        </span>
                      </div>
                    </div>
                  </div>
                </form>
                <h6 className="pt-3 text-base text-orange-500">Amount</h6>
                <p className="text-left text-sm">
                  Just transfer TRX or USDT token to the platform exchange
                  address, then the platform will automatically transfer the
                  corresponding amount of USDT or TRX token after receiving your
                  exchange amount to your transfer address.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EnergyMine;
