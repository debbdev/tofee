import React from "react";

export default function YouTubeVideo() {
  return (
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/2fgnSncKokE?si=GPeoX2UAx9qusNCh"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="px-8 sm:w-full sm:px-8 lg:w-[35rem] lg:px-0"
    ></iframe>
  );
}
