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
import { useQRCode } from "next-qrcode";

function BuyEnergy() {
  const { SVG } = useQRCode();
  const [transfer, setTransfer] = useState<number | string>("");
  const [selectMode, setSelectMode] = useState<number | null>(null);
  // eslint-disable-next-line tailwindcss/no-custom-classname, no-unused-vars
  const [currency, setCurrency] = useState<"TRX" | "USDT">("TRX");
  const flashSaleDiscount = 1; // 1% discount
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
    if (transfer && selectMode === 7) {
      const transferValue = parseFloat(transfer as string);
      const calcResult = transferValue * selectMode;
      const referenceValue = 13.5366 * transferValue;
      const calculatedSavings =
        (referenceValue - calcResult) * flashSaleDiscount;
      return calculatedSavings.toFixed(2);
    } else if (transfer && selectMode === 1.1) {
      const transferValue = parseFloat(transfer as string);
      const calcResult = transferValue * selectMode;
      const referenceValue = 1.72 * transferValue;
      const calculatedSavings =
        (referenceValue - calcResult) * flashSaleDiscount;
      return calculatedSavings.toFixed(2);
    }
    return "";
  }, [transfer, selectMode, flashSaleDiscount]);

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
    <div className="custom-scrollbar mx-auto gap-5 p-6 max-sm:w-[26rem] sm:w-[26rem] lg:w-[28rem] lg:p-4">
      <Card className="text-dark100_light900 background-light900_dark200 mb-8 w-full px-6 py-5">
        <CardContent className="flex flex-col gap-6">
          <div>
            <h6>
              <span className="mr-3 rounded-md bg-amber-500 p-2 text-white">
                01
              </span>
              Quantity
            </h6>
          </div>
          <form>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <label htmlFor="name">Number of Transfers</label>
                <HoverCard>
                  <HoverCardTrigger>
                    <Image
                      src="assets/icons/help.svg"
                      width={12}
                      height={12}
                      alt="help"
                      className="brand-color"
                    />
                  </HoverCardTrigger>
                  <HoverCardContent className="text-dark100_light900 background-light900_dark200">
                    Fill in your estimated daily number of transactions and the
                    system will automatically estimate the daily energy
                    consumption
                  </HoverCardContent>
                </HoverCard>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-5">
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
                      <SelectItem id="mySelect" value="7">
                        7 TRX/1 Hour
                      </SelectItem>
                      <SelectItem id="mySelect" value="1.1">
                        1.1 USDT/Unlimited
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <h6>
                <span className="mr-3">32000</span>Energy per Transaction
              </h6>
            </div>
          </form>
        </CardContent>
      </Card>
      <Card className="text-dark100_light900 background-light900_dark200 px-6 py-5">
        <CardContent className="flex flex-col gap-6">
          <div>
            <h6>
              <span className="mr-3 rounded-md bg-amber-500 p-2 text-white">
                02
              </span>
              Payment
            </h6>
          </div>
          <div className="flex w-full items-center justify-between">
            <div>
              <h6>Amount</h6>
            </div>
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-5">
              <span>{calculateResult}</span>
              <span>{selectMode === 7 ? "TRX" : "USDT"}</span>
              <span onClick={() => handleCopy(calculateResult)}>
                <Dialog>
                  <DialogTrigger asChild>
                    <Image
                      src="/assets/icons/copy.svg"
                      alt="copy"
                      width={20}
                      height={20}
                      className={`brand-color cursor-pointer ${result ? "text-green-700" : "brand-color"}`}
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
          <div className="flex w-full items-center justify-between">
            <h6>Save Approximately:</h6>
            <div className="flex items-center gap-5">
              {transfer && selectMode && <span>{calculateSavings}</span>}
              <span>{selectMode === 7 ? "TRX" : "USDT"}</span>
            </div>
          </div>
          <div className="flex-start flex gap-2">
            <span>Platform Billing Address</span>
            <span className="flex items-center gap-2">
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
                    text={"TKJVEqQJ4xkfkrg8HA6AozDT27RS9gDLw1"}
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
            </span>
          </div>
          <div className="text-dark100_light900 background-light900_dark200 mt-2 flex w-full items-center justify-between gap-2 rounded-md border px-1 py-3 text-center">
            <input
              type="text"
              className="text-dark100_light900 background-light900_dark200 w-full"
              value="TKJVEqQJ4xkfkrg8HA6AozDT27RS9gDLw1"
              readOnly
            />
            <span
              onClick={() => handleCopy("TKJVEqQJ4xkfkrg8HA6AozDT27RS9gDLw1")}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Image
                    src="/assets/icons/copy.svg"
                    alt="copy"
                    width={20}
                    height={20}
                    className={`brand-color cursor-pointer ${result ? "text-green-700" : ""}`}
                  />
                </DialogTrigger>
                {dialog.visible && (
                  <DialogContent className="text-dark100_light900 background-light900_dark200">
                    <span className="ml-2 text-green-700">
                      Wallet Address Successfully Copied!
                    </span>
                  </DialogContent>
                )}
              </Dialog>
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default BuyEnergy;
