/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    nodeMiddleware: true,
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
