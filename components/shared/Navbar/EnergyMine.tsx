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

  // Update TRX when USDT changes
  const handleUsdtChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const usdtValue = parseFloat(e.target.value);
    setUSDT(e.target.value);
    if (!isNaN(usdtValue)) {
      setTRX((usdtValue * conversionRate).toFixed(2));
    } else {
      setTRX("");
    }
  };

  // Update USDT when TRX changes
  const handleTrxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const trxValue = parseFloat(e.target.value);
    setTRX(e.target.value);
    if (!isNaN(trxValue)) {
      setUSDT((trxValue / conversionRate).toFixed(2));
    } else {
      setUSDT("");
    }
  };

  // Copy function
  const handleCopy = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
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
    <section className="border-r border-none bg-lime-400 py-10 shadow-light-300 dark:shadow-none">
      <div className="flex justify-center gap-5 sm:flex-wrap lg:flex-nowrap">
        <div className="lg:ms-20 sm:me-10 sm:w-[650px] lg:w-[750px]">
          <Card className="text-dark100_light900 background-light900_dark200 h-full py-14">
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
                  The FeeTrx energy Rental platform is an energy exchange
                  platform in wave field ecology. Our goal is to reduce the TRX
                  fee required for wave traders to consume energy. <br /> <br />
                  The exchange process is simple and fast, with a favorable
                  price. We provide you with a safer and more efficient energy
                  exchange service 24 hours a day.
                </p>
                <h2 className="text-2xl pt-5 pb-2">Instructions</h2>
                <ul>
                  <li className="list-disc">
                    Please use decentralized wallet to rent energy.
                  </li>
                  <br />
                  <li className="list-disc">
                    According to the requirements, the system accountant
                    calculates the total amount and amount. Support TRX or USDT
                    payments.
                  </li>
                  <br />
                  <li className="list-disc">
                    After payment, the platform will distribute the
                    corresponding energy to your account.
                  </li>
                  <br />
                  <li className="list-disc">
                    Advocate for on-demand leasing and use it again! Unlimited
                    number of transactions per day!
                  </li>
                </ul>
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
        <div className="flex flex-col sm:me-10 lg:me-16 sm:w-[650px] lg:w-[430px]">
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
          <Card className="text-dark100_light900 background-light900_dark200 h-full">
            <CardContent>
              <h5 className="mt-5 text-center">Token Exchange (TRX/USDT)</h5>
              <h6 className="active-theme mt-0 py-2 text-sm">
                Exchange Quantity = (Received Quantity × Exchange Rate - Gas
                fee)
              </h6>
              <div>
                <form>
                  <div className="flex-between gap-1">
                    <div className="flex-between w-full flex-col gap-1">
                      <label htmlFor="usdt">USDT</label>
                      <input
                        type="text"
                        id="usdt"
                        className="text-dark100_light900 background-light900_dark200 w-full rounded-md border px-1 py-3 text-center"
                        value={usdt}
                        onChange={handleUsdtChange}
                      />
                      <label htmlFor="trx">TRX</label>
                      <input
                        type="text"
                        id="trx"
                        className="text-dark100_light900 background-light900_dark200 w-full rounded-md border px-1 py-3 text-center"
                        value={trx}
                        onChange={handleTrxChange}
                      />
                      <div className="flex-start w-full flex-wrap gap-2">
                        <span className="pt-5">Platform Billing Address</span>
                        <span>
                          <Image
                            src="/assets/icons/qrcode1.svg"
                            width={20}
                            height={20}
                            alt="qrcode"
                            className="active-theme pt-5"
                          />
                        </span>

                        <div className="mt-2 flex-between gap-2 text-dark100_light900 background-light900_dark200 w-full rounded-md border px-1 py-3 text-center">
                          <input
                            type="text"
                            className="w-full text-dark100_light900 background-light900_dark200"
                            value="THH8j7n8kcq6DmdAkSrUhQzn63jPoTpsWw"
                            readOnly
                          />
                          <span
                            className="w-6 cursor-pointer"
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
                                  className={`active-theme ${result ? "text-green-700" : ""}`}
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
                  </div>
                </form>
              </div>
              <div>
                <h6 className="active-theme pt-6">Amount</h6>
                <p className="text-left lg:w-full">
                  Just transfer TRX or USDT token to the platform exchange
                  address, then the platform will automatically transfer the
                  corresponding amount of USDT or TRX token after receiving your
                  exchange amount to your transfer address.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default EnergyMine;
