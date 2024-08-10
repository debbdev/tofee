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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const NavContent = () => {
  const pathname = usePathname();

  return (
    <section className="flex h-full flex-col gap-6 pt-16">
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        // TODO

        return (
          <SheetClose asChild key={item.route}>
            <Dialog>
              <DialogTrigger asChild>
                <Link
                  href={item.route}
                  className={`${
                    isActive
                      ? "primary-gradient rounded-lg text-light-900"
                      : "text-dark300_light900"
                  } flex items-center justify-start gap-4 bg-transparent p-4`}
                >
                  <Image
                    src={item.imgURL}
                    alt={item.label}
                    width={20}
                    height={20}
                    className={`${isActive ? "" : "invert-colors"}`}
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
                      <DialogContent className="text-dark100_light900 background-light900_dark200">
                        <div className="text-dark100_light900 background-light900_dark200 py-5">
                          <div className=" flex flex-1 flex-col gap-6">
                            <form>
                              <div className="flex-between flex w-80 flex-wrap gap-4">
                                <div className="flex-between flex w-full gap-6">
                                  <label htmlFor="name">Resource</label>
                                  <Select>
                                    <SelectTrigger id="framework">
                                      <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                      <SelectItem value="next">
                                        Energy
                                      </SelectItem>
                                      <SelectItem value="sveltekit">
                                        BandWidth
                                      </SelectItem>
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
                          </div>
                        </div>
                      </DialogContent>
                    );
                  case "/currency-exchange":
                    return (
                      <DialogContent className="text-dark100_light900 background-light900_dark200">
                        <DialogHeader>
                          <DialogTitle>Withdraw Credit</DialogTitle>
                          <DialogDescription>
                            You are going to withdraw all your account credit (1
                            Credit = 1 TRX)
                          </DialogDescription>
                        </DialogHeader>
                        <p>
                          This action have no fee but you can only withdraw once
                          per 2 days and following requests before that time
                          will give you an error. This is only to avoid the
                          abuse of the system.
                        </p>
                        <br />
                        <p>Do you want to continue?</p>
                      </DialogContent>
                    );
                  case "/about-us":
                    return (
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>absolutely sure?</DialogTitle>
                          <DialogDescription>
                            This action cannot be undone. This will permanently
                            delete your account and remove your data from our
                            servers.
                          </DialogDescription>
                        </DialogHeader>
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
          className="invert-colors"
        />
      </SheetTrigger>

      <SheetContent
        side="right"
        className="background-light900_dark200 no-scrollbar overflow-y-auto border-none"
      >
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/images/site-logo.svg"
            width={23}
            height={23}
            alt="Tofee"
          />

          <p className="h2-bold text-dark100_light900 font-spaceGrotesk">
            FeeTrx <span className="text-primary-500">Energy</span>
          </p>
        </Link>
        <div className="no-scrollbar flex grow flex-col justify-between overflow-y-auto">
          <SheetClose asChild>
            <NavContent />
          </SheetClose>
        </div>
        <div>
          <SignedOut>
            <div className="flex flex-col gap-3">
              <SheetClose asChild>
                <Link href="/sign-in">
                  <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                    <span className="primary-text-gradient">Log In</span>
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
