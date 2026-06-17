/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home-1",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home-2",
        destination: "/",
        permanent: true,
      },
      {
        source: "/work",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/portfolio-2",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/portfolio-2/:path*",
        destination: "/projects",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
