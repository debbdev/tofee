import { SignInButton, UserProfile, useUser } from "@clerk/nextjs";
import React from "react";

function ProfilePage() {
  const { isSignedIn } = useUser();
  return (
    <div
      className={`${isSignedIn ? "text-dark100_light900 background-light900_dark200 flex  w-full flex-col items-center justify-center overflow-x-auto p-0 lg:w-[29rem]" : "text-dark100_light900 background-light900_dark200"}`}
    >
      {isSignedIn ? <UserProfile routing="hash" /> : <SignInButton />}
    </div>
  );
}

export default ProfilePage;
