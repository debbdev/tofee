import { NextRequest, NextResponse } from "next/server";
import { TwitterApi, TwitterApiTokens } from "twitter-api-v2";

const appKey = process.env.TWITTER_API_KEY;
const appSecret = process.env.TWITTER_API_KEY_SECRET;
const accessToken = process.env.TWITTER_ACCESS_TOKEN;
const accessSecret = process.env.TWITTER_ACCESS_TOKEN_SECRET;
const bearerToken = process.env.TWITTER_BEARER_TOKEN;
const userName = process.env.TWITTER_USER;

// Function to handle requests to the Twitter API
export default async function fetchUser(req: NextRequest, res: NextResponse) {
  try {
    const client = new TwitterApi({
      appKey,
      appSecret,
      accessToken,
      accessSecret,
      bearerToken,
    } as TwitterApiTokens);

    const twitterBearer = client.readOnly;
    const userResponse = await twitterBearer.v2.userByUsername(
      userName as string
    );
    console.log(userResponse);

    if (!userResponse.data) {
      return res.status(404).json({ error: "User not found" });
    }

    const userId = userResponse.data.id;
    const tweetsResponse = await twitterBearer.v2.userTimeline(userId);

    const twitterInfo = {
      id: userResponse.data.id,
      name: userResponse.data.name,
      profileImageURL: userResponse.data.profile_image_url,
      username: userResponse.data.username,
      description: userResponse.data.description,
      text: tweetsResponse.data.data || [],
    };

    res.status(200).json(twitterInfo);
  } catch (error) {
    console.error("Error fetching Twitter data:", error);
    res.status(500).json({ error: "Error fetching Twitter data" });
  }
}
