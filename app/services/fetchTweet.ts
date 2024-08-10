// pages/api/fetchTweet.ts
import { embeddedTweet } from "@/constants";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const promises = embeddedTweet.map(async (item) => {
      const tweetId = item.url_id;
      const response = await fetch(
        `https://publish.twitter.com/oembed?url=https://twitter.com/user/status/${tweetId}`
      );

      if (!response.ok) {
        if (response.status === 404) {
          return { error: `Tweet with ID ${tweetId} not found` };
        } else if (response.status === 403) {
          return { error: `Access to tweet with ID ${tweetId} is restricted` };
        } else {
          console.error(
            `Failed to fetch tweet with ID ${tweetId}. Response status: ${response.status}`
          );
          const text = await response.text();
          console.error("Response text:", text);
          throw new Error(`Failed to fetch tweet with ID ${tweetId}`);
        }
      }

      const data = await response.json();
      return data;
    });

    const results = await Promise.all(promises);
    res.status(200).json(results);
  } catch (error: any) {
    console.error("Error in fetchTweet API route:", error);
    res
      .status(500)
      .json({ error: error.message || "An unexpected error occurred" });
  }
}
