import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

function EnergyMine() {
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
    <div className="flex justify-center gap-5 sm:flex-wrap lg:flex-nowrap">
      <div className="flex flex-col sm:me-10 sm:w-[650px] lg:me-16 lg:w-[430px]">
        <Card className="text-dark100_light900 background-light900_dark200 h-full">
          <CardContent>
            <h5 className="mt-5 text-center">Token Exchange (TRX/USDT)</h5>
            <h6 className="active-theme mt-0 py-2 text-sm">
              Exchange Quantity = (Received Quantity × Exchange Rate - Gas fee)
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

                      <div className="flex-between text-dark100_light900 background-light900_dark200 mt-2 w-full gap-2 rounded-md border px-1 py-3 text-center">
                        <input
                          type="text"
                          className="text-dark100_light900 background-light900_dark200 w-full"
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
  );
}

export default EnergyMine;
