// pages/tweet.tsx
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Tweet() {
  // eslint-disable-next-line no-unused-vars
  const [mode, setMode] = useState<"dark" | "light">("dark");
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
    <div className="text-dark100_light900 background-light900_dark200 mx-auto px-0  max-sm:w-80 sm:w-full sm:px-0 lg:w-80 lg:px-0">
      {mode === "light" ? (
        <Link
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className="twitter-timeline"
          data-width="500"
          data-height="500"
          href="https://twitter.com/trondao?ref_src=twsrc%5Etfw"
        >
          Tweets by trondao
        </Link>
      ) : (
        <Link
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className="twitter-timeline"
          data-width="500"
          data-height="500"
          data-theme="dark"
          href="https://twitter.com/trondao?ref_src=twsrc%5Etfw"
        >
          Tweets by trondao
        </Link>
      )}
    </div>
  );
}
