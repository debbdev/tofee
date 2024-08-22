import Link from "next/link";
import React from "react";
import Image from "next/image";
import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs";
import { useUser } from "@clerk/clerk-react";
import Page from "@/app/(auth)/sign-in/[[...sign-in]]/page";
import MobileNav from "./MobileNav";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function Navbar() {
  const { user } = useUser();

  return (
    <nav className="background-light900_dark200 text-dark100_light900 fixed z-50 w-full py-4 shadow-light-300 dark:shadow-none">
      <div className="flex-between container mx-auto lg:w-[90rem]">
        {/* Logo and Title */}
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/icons/coin.svg"
            width={23}
            height={23}
            alt="FeeTrx"
            className=""
          />
          <p className="lg:h2-bold  text-dark100_light900 sm:h1-bold font-spaceGrotesk">
            FeeTrx <span className="brand-color sm:text-2xl">Energy</span>
          </p>
        </Link>

        {/* Navbar Content */}
        <div className="flex items-center gap-9 sm:gap-5">
          {/* <div className="hidden sm:block">
            <Theme />
          </div> */}

          <Dialog>
            {!user ? (
              <DialogTrigger asChild>
                <SignedOut>
                  <SignInButton>
                    <Button variant={"outline"}>
                      <Image
                        src="/assets/icons/coin.svg"
                        width={23}
                        height={23}
                        alt="FeeTrx"
                      />
                    </Button>
                  </SignInButton>
                </SignedOut>
              </DialogTrigger>
            ) : (
              <DialogTrigger asChild>
                <SignedIn>
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: "h-10 w-10",
                      },
                      variables: {
                        colorPrimary: "#ff7000",
                      },
                    }}
                  />
                </SignedIn>
              </DialogTrigger>
            )}

            <DialogContent>
              <Page />
            </DialogContent>
          </Dialog>

          <MobileNav />
        </div>
      </div>
    </nav>
  );
}
