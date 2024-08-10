import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
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
import { Label } from "@radix-ui/react-menubar";
import Image from "next/image";

function BuyEnergy() {
  return (
    <div className="custom-scrollbar sticky  left-0 top-0 ms-64 flex h-full flex-col justify-between overflow-y-auto border-r border-none p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[406px]">
      <Card className="text-dark100_light900 background-light900_dark200 mb-5 py-5">
        <CardContent className=" flex flex-1 flex-col gap-6">
          <Form>
            <div className="flex-between flex w-80 flex-wrap gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Buy Amount</Label>
                <Input id="number" placeholder="100000" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Resource</Label>
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
                <Label htmlFor="name">Duration</Label>
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
                <Label htmlFor="name">Price</Label>
                <Input id="number" placeholder="60" />
              </div>
              <div className="flex w-full flex-col space-y-1.5">
                <Label htmlFor="name">Target</Label>
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
              </div>
            </div>
          </Form>
        </CardContent>
      </Card>
      <Card className="text-dark100_light900 background-light900_dark200 py-5">
        <CardContent className=" flex flex-1 flex-col gap-6">
          <Form>
            <div className="flex-between flex w-80 flex-wrap gap-4">
              <div className="flex-between flex w-full gap-6">
                <Label htmlFor="name">Resource</Label>
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
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export default BuyEnergy;
