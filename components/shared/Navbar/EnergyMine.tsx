import React, { useState, useEffect } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import FlipCountdown from "@rumess/react-flip-countdown";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useQRCode } from "next-qrcode";
import { PriceData } from "@/types";

function EnergyMine() {
  const { SVG } = useQRCode();
  // eslint-disable-next-line no-unused-vars
  const [mode, setMode] = useState<"dark" | "light">("dark");
  const [usdt, setUSDT] = useState<string>("");
  const [trx, setTRX] = useState<string>("");
  const [price, setPrice] = useState<PriceData | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [dialog, setDialog] = useState<{ visible: boolean; message: string }>({
    visible: false,
    message: "",
  });
  const [maxScreen, setMaxScreen] = useState<boolean>(false);
  useEffect(() => {
    const checkScreenSize = () => {
      setMaxScreen(window.innerWidth < 640);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch("/api/liveTicker");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to fetch price");
        }

        const tronData = data.data["825"];
        const tomoData = data.data["1958"];
        console.log(tronData);
        console.log(tomoData);
        setPrice({
          tron: {
            symbol: tronData.symbol,
            name: tronData.name,
            price: tronData.quote.USD.price,
            percentChange24h: tronData.quote.USD.percent_change_24h,
            lastUpdated: new Date(tronData.quote.USD.last_updated),
          },
          tomo: {
            symbol: tomoData.symbol,
            name: tomoData.name,
            price: tomoData.quote.USD.price,
            percentChange24h: tomoData.quote.USD.percent_change_24h,
            lastUpdated: new Date(tomoData.quote.USD.last_updated),
          },
        });
      } catch (err) {
        console.error("Error fetching price:", err);
      }
    };

    fetchPrice();

    // Refresh price every 60 seconds
    const interval = setInterval(fetchPrice, 60000);
    return () => clearInterval(interval);
  }, []);

  // Conversion rate
  // const conversionRate = 0.1284;
  // const difference = 0.1;
  // const usdtCharge = 5.86;
  const usdtCharge = price?.tomo.price;

  // Update TRX when USDT changes
  const handleUsdtChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const usdtValue = parseFloat(e.target.value);
    setUSDT(e.target.value);
    if (!isNaN(usdtValue)) {
      setTRX((usdtCharge ? usdtCharge * usdtValue : 0).toFixed(2));
    } else {
      setTRX("");
    }
  };

  // Update USDT when TRX changes
  const handleTrxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const trxValue = parseFloat(e.target.value);
    setTRX(e.target.value);
    if (!isNaN(trxValue)) {
      setUSDT((usdtCharge ? trxValue / usdtCharge : 0).toFixed(2));
    } else {
      setUSDT("");
    }
  };

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
    <section className="w-full bg-amber-400 py-10 shadow-light-300 dark:shadow-none">
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-screen-sm  flex-col-reverse max-lg:w-[84rem] max-sm:w-80 sm:w-full sm:max-w-screen-sm lg:max-w-screen-xl lg:flex-row lg:justify-between lg:gap-16">
          <div className="mx-auto mb-8 flex-1 sm:order-2 sm:p-3 lg:order-1 lg:mb-0 lg:p-0">
            <Card className="text-dark100_light900 background-light900_dark200 h-full max-w-screen-sm p-6 max-sm:w-80 sm:max-w-screen-sm sm:p-10 lg:w-[45rem] lg:max-w-screen-xl lg:p-14">
              <CardContent className="flex flex-col lg:flex-row lg:gap-10">
                <div className="flex flex-1 flex-wrap justify-center gap-4 lg:h-[50px] lg:w-[300px]">
                  <Image
                    src="/assets/images/coin1.png"
                    width={300}
                    height={100}
                    alt="coin"
                    className="animate-spin-slow"
                  />
                </div>
                <div className="flex-1">
                  <h1 className="text-xl font-bold">FEM: FeeTrx Energy Mine</h1>
                  <div className="mt-2 flex items-center gap-4">
                    <h2 className="text-sm">49.9% APY</h2>
                    <Image
                      src="/assets/icons/account.svg"
                      width={15}
                      height={15}
                      alt="coin"
                      className="brand-color"
                    />
                  </div>
                  <p className="mt-4 max-w-screen-sm sm:max-w-screen-sm lg:max-w-screen-sm">
                    The FeeTrx energy rental platform is an energy exchange
                    platform in wave field ecology. Our goal is to reduce the
                    TRX fee required for wave traders to consume energy. <br />
                    <br />
                    The exchange process is simple and fast, with a favorable
                    price. We provide you with a safer and more efficient energy
                    exchange service 24 hours a day.
                  </p>
                </div>
              </CardContent>
              <h2 className="mx-auto pt-3 text-xl font-semibold max-sm:w-40  sm:w-full sm:px-8">
                Instructions
              </h2>
              <div className="flex-start mx-auto max-w-screen-sm flex-wrap max-sm:w-80 sm:max-w-screen-sm sm:gap-0 sm:px-12  lg:max-w-screen-lg lg:gap-6 lg:px-8">
                <ul className="mx-auto mt-3 list-disc max-lg:w-[19rem] max-sm:w-60 sm:mx-auto sm:w-full lg:mx-0 lg:w-64">
                  <li>Please use a decentralized wallet to rent energy.</li>
                  <li>
                    The system accountant calculates the total amount and
                    amount. Support TRX or USDT payments.
                  </li>
                </ul>
                <ul className="mx-auto mt-3 list-disc max-lg:w-[19rem] max-sm:w-60 sm:mx-auto sm:w-full lg:mx-0 lg:w-64">
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
                    className="brand-color"
                  />
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="mx-auto flex flex-col-reverse max-lg:w-[30rem] sm:order-1 sm:w-full sm:p-3 lg:order-2 lg:w-[30rem] lg:p-0">
            <Card className="text-dark100_light900 background-light900_dark200 mb-8 p-3 max-lg:w-[30rem] max-sm:w-80 sm:order-2 sm:w-full lg:w-[30rem]">
              <CardContent>
                <h2 className="py-4 text-xl">Next FEM & TRX rewards in:</h2>
                <div className="w-[17.8rem] sm:w-full">
                  <FlipCountdown
                    hideYear
                    hideMonth
                    hideDay
                    endAtZero
                    titlePosition="bottom"
                    hourTitle="Hours"
                    minuteTitle="Minutes"
                    secondTitle="Seconds"
                    size={maxScreen ? "base" : "medium"}
                    endAt={"2025-12-12 01:26:58"}
                    theme={mode === "dark" ? "dark" : "light"}
                  />
                </div>
              </CardContent>
            </Card>
            <Card className="text-dark100_light900 background-light900_dark200 p-6 max-lg:w-[30rem] max-sm:w-80 sm:order-1 sm:w-full lg:w-[30rem]">
              <CardContent>
                <h5 className="mt-5 text-center text-xl">
                  Token Exchange (TRX/USDT)
                </h5>
                <h6 className="brand-color mb-4 mt-2 text-center text-sm">
                  Exchange Quantity = (Received Quantity × Exchange Rate - Gas
                  fee)
                </h6>
                <form>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="usdt" className="text-center text-sm">
                        USDT
                      </label>
                      <input
                        type="text"
                        id="usdt"
                        className="background-light900_dark200 w-full rounded-md border px-3 py-2 text-center"
                        value={usdt}
                        onChange={handleUsdtChange}
                      />
                      <label htmlFor="trx" className="text-center text-sm">
                        TRX
                      </label>
                      <input
                        type="text"
                        id="trx"
                        className="background-light900_dark200 w-full rounded-md border px-3 py-2 text-center"
                        value={trx}
                        onChange={handleTrxChange}
                      />
                      <div className="flex items-center gap-2">
                        <span className="text-sm">
                          Platform Billing Address
                        </span>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Image
                              src="/assets/icons/qrcode1.svg"
                              width={20}
                              height={20}
                              alt="qrcode"
                              className="brand-color cursor-pointer"
                            />
                          </DialogTrigger>
                          <DialogContent className="text-dark100_light900 background-light900_dark200 flex items-center justify-center">
                            <SVG
                              text={"THH8j7n8kcq6DmdAkSrUhQzn63jPoTpsWw"}
                              options={{
                                margin: 2,
                                width: 200,
                                color: {
                                  dark: "#010599FF",
                                  light: "#FFBF60FF",
                                },
                              }}
                            />
                          </DialogContent>
                        </Dialog>
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
                                className={`cursor-pointer ${result ? "text-green-700" : "brand-color"}`}
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
                <h6 className="brand-color pt-3 text-base">Amount</h6>
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
