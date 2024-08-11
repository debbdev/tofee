import React from "react";
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

function BuyEnergy() {
  return (
    <div className="custom-scrollbar sticky  left-0 top-0 ms-64 flex h-full flex-col justify-between overflow-y-auto border-r border-none p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[406px]">
      <Card className="text-dark100_light900 background-light900_dark200 mb-5 py-5">
        <CardContent className=" flex flex-1 flex-col gap-6">
          <div className="flex-start">
            <h6>
              <span className="mr-3 rounded-md bg-red-950 p-2">01</span>
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
                    Fill in your estimated daily number of times transactions
                    and the system will automatically estimate the daily energy
                    consumption
                  </HoverCardContent>
                </HoverCard>
              </div>
              <div className="flex flex-col space-y-1.5">
                <div className="flex-between gap-5">
                  <Input id="number" placeholder="10" />
                  <Select>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="2.5 TRX /10 Minute">
                        2.5 TRX /10 Minute
                      </SelectItem>
                      <SelectItem value="2.8 TRX /1 Hour">
                        2.8 TRX /1 Hour
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <h6>
                <span className="mr-3">32000</span>Energy per Transaction <br />
              </h6>
              <h5>Remaining Energy of the platform</h5>
              <input
                type="text"
                className="text-dark100_light900 background-light900_dark200 w-full rounded-md border px-1 py-3 text-center"
                value="40,854,495"
              />
              {/* <div className="flex flex-col space-y-1.5">
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
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="name">Duration</label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">5 min</SelectItem>
                    <SelectItem value="sveltekit">10 min</SelectItem>
                    <SelectItem value="astro">15 min</SelectItem>
                    <SelectItem value="nuxt">1 hour</SelectItem>
                    <SelectItem value="nuxt">1 day</SelectItem>
                    <SelectItem value="nuxt">2 days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="name">Price</label>
                <Input id="number" placeholder="60" />
              </div>
              <div className="flex w-full flex-col space-y-1.5">
                <label htmlFor="name">Target</label>
                <Input id="name" placeholder="address" />
              </div>
              <div className="flex w-full flex-col space-y-1.5">
                <div className="flex-between flex">
                  <HoverCard>
                    <HoverCardTrigger>
                      <Image
                        src="/assets/icons/account.svg"
                        width={23}
                        height={23}
                        alt="settings"
                        className="invert-colors"
                      />
                    </HoverCardTrigger>
                    <HoverCardContent>Allow Partial Fill</HoverCardContent>
                  </HoverCard>
                  <HoverCard>
                    <HoverCardTrigger>
                      <Image
                        src="/assets/icons/clock.svg"
                        width={23}
                        height={23}
                        alt="settings"
                        className="invert-colors"
                      />
                    </HoverCardTrigger>
                    <HoverCardContent>Allow Partial Fill</HoverCardContent>
                  </HoverCard>
                </div>
                <Input id="number" placeholder="100000" />
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
              </div> */}
            </div>
          </form>
        </CardContent>
      </Card>
      <Card className="text-dark100_light900 background-light900_dark200 mb-5 py-5">
        <CardContent className=" flex flex-1 flex-col gap-6">
          <div className="flex-start">
            <h6>
              <span className="mr-3 rounded-md bg-red-950 p-2">02</span>
              Payment
            </h6>
          </div>
          <div className="flex-between w-60">
            <div>
              <h6>Amount</h6>
            </div>
            <div className="flex">
              <div className="h-8 w-16 rounded-l-md bg-white px-2 py-1">
                TRX
              </div>
              <div className="h-8 w-16 rounded-r-md bg-green-700 px-2 py-1">
                USDT
              </div>
            </div>
          </div>
          <div className="flex-between w-60">
            <div className="flex-between gap-5">
              <span>NaN</span>
              <span>TRX</span>
              <span>
                <Image
                  src="/assets/icons/copy.svg"
                  alt="sun"
                  width={20}
                  height={20}
                  className="active-theme"
                />
              </span>
            </div>
            <div className="text-dark100_light900 background-light900_dark200 rounded-md border p-2">
              Flash Sale
            </div>
          </div>
          <div className="flex-between text-dark100_light900 background-light900_dark200 w-60">
            <h6>Save Approximately:</h6>
            <div className="flex-between gap-5">
              <span>NaN</span>
              <span>TRX</span>
            </div>
          </div>
          <div className="flex-start w-80 flex-wrap gap-2">
            {/* <div className="flex flex-col space-y-1.5">
                <label htmlFor="name">Number of Transfers</label>
                <div className="flex-between gap-5">
                  <Input id="number" placeholder="10" />
                  <Select>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="2.5 TRX /10 Minute">
                        2.5 TRX /10 Minute
                      </SelectItem>
                      <SelectItem value="2.8 TRX /1 Hour">
                        2.8 TRX /1 Hour
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <h6>
                <span className="mr-3">32000</span>Energy per Transaction <br />
              </h6> */}

            <span>Platform Billing Address</span>
            <span>
              <Image
                src="/assets/icons/qrcode1.svg"
                width={10}
                height={10}
                alt="qrcode"
                className="active-theme"
              />
            </span>

            <div className="mt-2 w-80">
              <input
                type="text"
                className="text-dark100_light900 background-light900_dark200 w-full rounded-md border px-1 py-3 text-center"
                value="40,854,495"
              />
            </div>
          </div>
        </CardContent>
      </Card>
      {/* <Card className="text-dark100_light900 background-light900_dark200 py-5">
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
      </Card> */}
    </div>
  );
}

export default BuyEnergy;
