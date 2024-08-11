// pages/tweet.tsx
import { useEffect } from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeProvider";

export default function Tweet() {
  const { mode } = useTheme();
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
    <div className="text-dark100_light900 background-light900_dark200">
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
      {/* <Link
        // eslint-disable-next-line tailwindcss/no-custom-classname
        className="twitter-timeline"
        data-width="500"
        data-height="700"
        href="https://twitter.com/trondao?ref_src=twsrc%5Etfw"
      >
        Tweets by trondao
      </Link> */}
    </div>
  );
}
