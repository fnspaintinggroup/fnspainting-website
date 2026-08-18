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
        source: "/ko",
        destination: "/",
        permanent: true,
      },
      {
        source: "/ko/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/painting-tips",
        permanent: true,
      },
      {
        source: "/blog/:path*",
        destination: "/painting-tips/:path*",
        permanent: true,
      },
      {
        source: "/gallery",
        destination: "/painting-gallery",
        permanent: true,
      },
      {
        source: "/gallery/:path*",
        destination: "/painting-gallery/:path*",
        permanent: true,
      },
      {
        source: "/project/:path*",
        destination: "/projects/:path*",
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
