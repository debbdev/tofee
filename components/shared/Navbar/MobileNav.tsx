"use client";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import NavBuyEnergy from "./NavBuyEnergy";
import CurrencyExchange from "./CurrencyExchange";
import { Card, CardContent } from "@/components/ui/card";
import FrequentlyAskedQuestion from "./FrequentlyAskedQuestion";
import Profile from "./Profile";
import Support from "./Support";

const NavContent = () => {
  const pathname = usePathname();
  return (
    <section className="flex h-full flex-col gap-6 pt-16">
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        return (
          <SheetClose asChild key={item.route}>
            <Dialog>
              <DialogTrigger asChild>
                <Link
                  href={item.route}
                  className={`${
                    isActive
                      ? "brand-gradient rounded-lg text-light-900"
                      : "text-neutral-500"
                  } flex items-center justify-start gap-4 bg-transparent p-4`}
                >
                  <Image
                    src={item.imgURL}
                    alt={item.label}
                    width={20}
                    height={20}
                    className={`${isActive ? "" : "brand-color"}`}
                  />
                  <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                    {item.label}
                  </p>
                </Link>
              </DialogTrigger>
              {(() => {
                switch (item.route) {
                  case "/energy-exchange":
                    return (
                      <DialogContent className="text-dark100_light900 background-light900_dark200 flex flex-col items-center overflow-hidden pb-20 pr-64 pt-0">
                        <NavBuyEnergy />
                      </DialogContent>
                    );
                  case "/currency-exchange":
                    return (
                      <DialogContent className="text-dark100_light900 background-light900_dark200 px-10 py-14">
                        <CurrencyExchange />
                      </DialogContent>
                    );
                  case "/about-us":
                    return (
                      <DialogContent className="text-dark100_light900 background-light900_dark200 py-12">
                        <Card>
                          <CardContent>
                            <h2 className="py-3 text-3xl">
                              FeeTrx Energy Market
                            </h2>
                            <p>
                              The FeeTrx energy Rental platform is an energy
                              exchange platform in wave field ecology. Our goal
                              is to reduce the TRX fee required for wave traders
                              to consume energy. The exchange process is simple
                              and fast, with a favorable price. We provide you
                              with a safer and more efficient energy exchange
                              service 24 hours a day.
                            </p>
                            <br />
                            <ul>
                              <li className="list-disc">
                                Solve the problem of excessive TRX fees
                              </li>
                              <br />
                              <li className="list-disc">Fast and convenient</li>
                              <br />
                              <li className="list-disc">
                                Applicable to USDT, contract transfer
                              </li>
                              <br />
                              <li className="list-disc">
                                Money Saving Expert for FeeTrx Users
                              </li>
                              <br />
                            </ul>
                          </CardContent>
                        </Card>
                      </DialogContent>
                    );
                  case "/freq-asked-question":
                    return (
                      <DialogContent className="text-dark100_light900 background-light900_dark200 items-center">
                        <FrequentlyAskedQuestion />
                      </DialogContent>
                    );
                  case "/profile":
                    return (
                      <DialogContent className="text-dark100_light900 background-light900_dark200">
                        <Profile />
                      </DialogContent>
                    );
                  case "/support":
                    return (
                      <DialogContent className="text-dark100_light900 background-light900_dark200 items-center pt-10">
                        <Support />
                      </DialogContent>
                    );
                }
              })()}
            </Dialog>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          width={36}
          height={36}
          alt="Menu"
          className="text-dark100_light900"
        />
      </SheetTrigger>

      <SheetContent
        side="right"
        className="background-light900_dark200 text-dark100_light900 no-scrollbar overflow-y-auto border-none"
      >
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/icons/coin.svg"
            width={23}
            height={23}
            alt="Tofee"
          />

          <p className="h2-bold text-dark100_light900 font-spaceGrotesk">
            FeeTrx <span className="text-amber-500">Energy</span>
          </p>
        </Link>
        <div className="no-scrollbar flex grow flex-col justify-between overflow-y-auto">
          <SheetClose asChild>
            <NavContent />
          </SheetClose>
        </div>
        <div>
          <SignedOut>
            <div className=" flex flex-col gap-3 pt-4">
              <SheetClose asChild>
                <Link href="/sign-in">
                  <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                    <span className="primary-brand-gradient">Log In</span>
                  </Button>
                </Link>
              </SheetClose>

              {/* <SheetClose asChild>
                <Link href="/sign-up">
                  <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none">
                    Sign Up
                  </Button>
                </Link>
              </SheetClose> */}
            </div>
          </SignedOut>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
