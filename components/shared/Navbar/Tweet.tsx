// pages/tweet.tsx
import { useEffect } from "react";
import Link from "next/link";

export default function TweetPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <Link
        className="twitter-timeline"
        data-width="500"
        data-height="500"
        href="https://twitter.com/trondao?ref_src=twsrc%5Etfw"
      >
        Tweets by trondao
      </Link>
    </div>
  );
}
