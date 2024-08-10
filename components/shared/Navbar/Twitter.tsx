// pages/twitter.tsx
import React from "react";
import Image from "next/image";
import { GetServerSideProps } from "next";
import { TwitterInfo } from "@/types";

// Define the props interface for the Twitter component.
interface TwitterProps {
  twitterInfo: TwitterInfo;
  error?: string;
}

// Define the `getServerSideProps` function to fetch Twitter data on the server side.
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/twitter`);
    if (!response.ok) {
      throw new Error("Failed to fetch Twitter data");
    }
    const twitterInfo = await response.json();

    return {
      props: {
        twitterInfo,
      },
    };
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    return {
      props: {
        error: error.message,
      },
    };
  }
};

// Define the Twitter component to display Twitter user information.
const Twitter: React.FC<TwitterProps> = ({ twitterInfo, error }) => {
  // If there's an error, display an error message.
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Remove the "_normal" suffix from the profile image URL to get a larger image.
  //   const profileImageURL = twitterInfo.profileImageURL.replace(/_normal/g, "");

  // Render the Twitter user information with profile and banner images.
  return (
    <div className="w-auto overflow-hidden rounded-md border p-2">
      <div className="relative">
        {/* <Image
          className="mx-auto"
          alt="twitterProfilePic"
          src={twitterInfo.profileBannerURL}
          layout="responsive"
          width={1200}
          height={600}
        /> */}
        <div className="absolute left-4 top-14 rounded-full border-4 border-white lg:top-24">
          {/* <Image
            className="size-24 rounded-full"
            src={twitterInfo.profileImageURL}
            alt="twitterProfilePic"
            width={96}
            height={96}
          /> */}
        </div>
      </div>
      <div className="mt-28 px-4 lg:mt-16">
        <p className="text-lg font-bold leading-6">{twitterInfo.name}</p>
        <p className="text-sm text-gray-600">@{twitterInfo.username}</p>
        <p className="mt-4 whitespace-pre-wrap text-sm">{twitterInfo.text}</p>
      </div>
    </div>
  );
};

export default Twitter;
