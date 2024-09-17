import React from "react";

export default function FeeTrxVideo() {
  return (
    <video
      width="560"
      height="315"
      controls
      className="px-8 sm:w-full sm:px-8 lg:w-[35rem] lg:px-0"
    >
      <source src="/assets/video/Feetrx.net.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
