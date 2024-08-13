import React, { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

function BuyEnergy() {
  const [transfer, setTransfer] = useState<number | string>("");
  const [selectMode, setSelectMode] = useState<number | null>(null);
  // eslint-disable-next-line no-unused-vars
  const [currency, setCurrency] = useState<"TRX" | "USDT">("TRX");
  // const [remainingEnergy, setRemainingEnergy] = useState<number>(44552265);
  const flashSaleDiscount = 1; // 10% discount
  // const [copyStatus, setCopyStatus] = useState<string>("");
  const [result, setResult] = useState<string | null>(null);
  const [dialog, setDialog] = useState<{ visible: boolean; message: string }>({
    visible: false,
    message: "",
  });

  const onSelectModeChange = (value: string) => {
    setSelectMode(parseFloat(value));
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTransfer(e.target.value);
  };

  // Memoize the calculation result
  const calculateResult = useMemo(() => {
    const transferValue = parseFloat(transfer as string);
    if (transferValue && selectMode) {
      let calculatedResult;
      if (currency === "TRX") {
        calculatedResult = transferValue * selectMode;
      } else {
        calculatedResult = transferValue * selectMode; // Example conversion rate
      }
      return calculatedResult.toFixed(2);
    }
    return "";
  }, [transfer, selectMode, currency]);

  // Calculate savings based on transfer, selectMode, and currency
  const calculateSavings = useMemo(() => {
    if (transfer && selectMode === 6) {
      const transferValue = parseFloat(transfer as string);
      const calcResult = transferValue * selectMode;
      const referenceValue = 13.5366 * transferValue;
      const calculatedSavings =
        (referenceValue - calcResult) * flashSaleDiscount;
      return calculatedSavings.toFixed(2);
    } else if (transfer && selectMode === 0.7) {
      const transferValue = parseFloat(transfer as string);
      const calcResult = transferValue * selectMode;
      const referenceValue = 1.72 * transferValue;
      const calculatedSavings =
        (referenceValue - calcResult) * flashSaleDiscount;
      return calculatedSavings.toFixed(2);
    }
    return "";
  }, [transfer, selectMode, flashSaleDiscount]);

  // Effect to update remaining energy
  // useEffect(() => {
  //   if (transfer && selectMode) {
  //     const transferValue = parseFloat(transfer as string);
  //     const calcResult = transferValue * selectMode;
  //     const energyUsed = calcResult * 32000;
  //     setRemainingEnergy((prev) => prev - energyUsed);
  //   }
  // }, [transfer, selectMode]);

  // Handle copy functionality
  // const handleCopy = (text: string) => {
  //   navigator.clipboard.writeText(text).then(() => {
  //     setCopyStatus("Copied!");
  //     setTimeout(() => setCopyStatus(""), 2000);
  //   });
  // };
  const handleCopy = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setResult(text);
        setDialog({ visible: true, message: `${text} successfully Copied!` });

        // Hide the dialog after 3 seconds
        setTimeout(() => {
          setDialog((prev) => ({ ...prev, visible: false }));
        }, 3000); // Adjust the timeout duration as needed
      })
      .catch(() => {
        setDialog({ visible: true, message: "Failed to copy!" });

        // Hide the dialog after 3 seconds
        setTimeout(() => {
          setDialog((prev) => ({ ...prev, visible: false }));
        }, 3000); // Adjust the timeout duration as needed
      });
  };

  return (
    <div className="custom-scrollbar left-0 top-0 flex h-full justify-around overflow-y-auto border-r border-none p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden sm:ms-10 sm:flex-row sm:flex-wrap sm:gap-5 lg:ms-64 lg:w-[406px] lg:flex-col lg:flex-nowrap lg:gap-0">
      <Card className="text-dark100_light900 background-light900_dark200 mb-5 py-5">
        <CardContent className=" flex flex-1 flex-col gap-6">
          <div className="flex-start">
            <h6>
              <span className="mr-3 rounded-md bg-red-950 p-2 text-white">
                01
              </span>
              Quantity
            </h6>
          </div>
          <form>
            <div className="flex-between w-80 flex-wrap gap-4">
              <div className="flex-start gap-2">
                <label htmlFor="name">Number of Transfers</label>
                <HoverCard>
                  <HoverCardTrigger>
                    <Image
                      src="assets/icons/help.svg"
                      width={12}
                      height={12}
                      alt="help"
                      className="active-theme"
                    />
                  </HoverCardTrigger>
                  <HoverCardContent className="text-dark100_light900 background-light900_dark200">
                    Fill in your estimated daily number of transactions and the
                    system will automatically estimate the daily energy
                    consumption
                  </HoverCardContent>
                </HoverCard>
              </div>
              <div className="flex w-80 flex-col space-y-1.5">
                <div className="flex-between gap-5">
                  <Input
                    id="number"
                    type="text"
                    value={transfer}
                    onInput={onChangeInput}
                    placeholder="10"
                    className="text-dark100_light900 background-light900_dark200"
                  />

                  <Select onValueChange={onSelectModeChange}>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent
                      position="popper"
                      className="text-dark100_light900 background-light900_dark200"
                    >
                      <SelectItem id="mySelect" value="6">
                        6 TRX/1 Hour
                      </SelectItem>
                      <SelectItem id="mySelect" value="0.7">
                        0.7 USDT/Unlimited
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <h6>
                <span className="mr-3">32000</span>Energy per Transaction <br />
              </h6>
              {/* <h5>Remaining Energy of the platform</h5>
              <input
                type="text"
                className="text-dark100_light900 background-light900_dark200 w-full rounded-md border px-1 py-3 text-center"
                value={remainingEnergy.toLocaleString()}
                readOnly
              /> */}
            </div>
          </form>
        </CardContent>
      </Card>
      <Card className="text-dark100_light900 background-light900_dark200 mb-5 py-5">
        <CardContent className=" flex flex-1 flex-col gap-6">
          <div className="flex-start">
            <h6>
              <span className="mr-3 rounded-md bg-red-950 p-2 text-white">
                02
              </span>
              Payment
            </h6>
          </div>
          <div className="flex-between w-80">
            <div>
              <h6>Amount</h6>
            </div>
            {/* <div className="flex cursor-pointer">
              <div
                className={`h-8 w-16 rounded-l-md border-2 border-solid  bg-white px-2 py-1 text-base text-black ${currency === "TRX" ? "bg-green-700 text-white" : ""}`}
                onClick={() => setCurrency("TRX")}
              >
                TRX
              </div>
              <div
                className={`h-8 w-16 rounded-r-md border-2 border-solid  bg-white px-2 py-1 text-base text-black ${currency === "USDT" ? "bg-green-700 text-white" : ""}`}
                onClick={() => setCurrency("USDT")}
              >
                USDT
              </div>
            </div> */}
          </div>
          <div className="flex-between w-80">
            <div className="flex-between gap-5">
              <span className="">{calculateResult}</span>
              <span>{selectMode === 6 ? "TRX" : "USDT"}</span>
              <span onClick={() => handleCopy(calculateResult)}>
                <Dialog>
                  <DialogTrigger asChild>
                    <Image
                      src="/assets/icons/copy.svg"
                      alt="copy"
                      width={20}
                      height={20}
                      className={`active-theme ${result ? "text-green-700" : "cursor-pointer"}`}
                    />
                  </DialogTrigger>
                  {calculateResult && dialog.visible && (
                    <DialogContent className="text-dark100_light900 background-light900_dark200">
                      <span className="ml-2 text-green-700">
                        {dialog.message || "Select Transfer and Mode"}
                      </span>
                    </DialogContent>
                  )}
                </Dialog>
              </span>
            </div>
            <div className="text-dark100_light900 background-light900_dark200 w-28 rounded-md border p-2">
              Flash Sale
            </div>
          </div>
          <div className="flex-between text-dark100_light900 background-light900_dark200 w-80">
            <h6>Save Approximately:</h6>
            <div className="flex-between gap-5">
              {transfer && selectMode && <span>{calculateSavings}</span>}
              <span>{selectMode === 6 ? "TRX" : "USDT"}</span>
            </div>
          </div>
          <div className="flex-start w-80 flex-wrap gap-2">
            <span>Platform Billing Address</span>
            <span>
              <Image
                src="/assets/icons/qrcode1.svg"
                width={20}
                height={20}
                alt="qrcode"
                className="active-theme"
              />
            </span>

            <div className="flex-between text-dark100_light900 background-light900_dark200 mt-2 w-full gap-2 rounded-md border px-1 py-3 text-center">
              <input
                type="text"
                className="text-dark100_light900 background-light900_dark200 w-full"
                value="TKJVEqQJ4xkfkrg8HA6AozDT27RS9gDLw1"
                readOnly
              />
              <span
                className="w-6 cursor-pointer"
                onClick={() => handleCopy("TKJVEqQJ4xkfkrg8HA6AozDT27RS9gDLw1")}
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
                        {"Wallet Address Successfully Copied!" || "Copy Filed"}
                      </span>
                    </DialogContent>
                  )}
                </Dialog>
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default BuyEnergy;
