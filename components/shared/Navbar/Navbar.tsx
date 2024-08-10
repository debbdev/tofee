import Link from "next/link";
import React from "react";
import Image from "next/image";
import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs";
import { useUser } from "@clerk/clerk-react";
import Page from "@/app/(auth)/sign-in/[[...sign-in]]/page";
// import Page2 from "@/app/(auth)/sign-up/[[...sign-up]]/page";
import Theme from "./Theme";
import MobileNav from "./MobileNav";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function Navbar() {
  const { user } = useUser();
  return (
    <nav className="background-light900_dark200 fixed z-50 flex w-full justify-around gap-96 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/images/site-logo.svg"
          width={23}
          height={23}
          alt="FeeTrx"
        />
        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          FeeTrx <span className="text-primary-500">Energy</span>
        </p>
      </Link>
      {/* Currency Exchange Energy Exchange */}
      <div className="flex-between gap-8">
        <Theme />
        <Dialog>
          {!user ? (
            <DialogTrigger asChild>
              <SignedOut>
                <SignInButton>
                  <Button variant={"outline"}>
                    <Image
                      src="/assets/images/site-logo.svg"
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
            {/* <SignUp /> */}
            {/* <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader> */}
          </DialogContent>
        </Dialog>

        <MobileNav />
      </div>
    </nav>
  );
}
