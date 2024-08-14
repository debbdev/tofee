import { SignInButton, UserProfile, useUser } from "@clerk/nextjs";
import React from "react";

function Profile() {
  const { isSignedIn } = useUser();
  return (
    <div
      className={`${isSignedIn ? "text-dark100_light900 background-light900_dark200 flex  w-full flex-col items-center overflow-auto py-0 pl-96 pr-0" : "text-dark100_light900 background-light900_dark200"}`}
    >
      {isSignedIn ? <UserProfile routing="hash" /> : <SignInButton />}
    </div>
  );
}

export default Profile;
