/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["static.tronscan.org"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.tronscan.org",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // experimental: {
  // instrumentationHook: true,
  //  },
};

export default nextConfig;
