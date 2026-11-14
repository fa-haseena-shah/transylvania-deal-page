/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.techneapp-staging.site" },
      { protocol: "https", hostname: "lcv-staging.site" },
    ],
  },
};

export default nextConfig;
