/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // @cloudflare/next-on-pages doesn't support the Next.js image optimizer
    unoptimized: true,
  },
};

export default nextConfig;
