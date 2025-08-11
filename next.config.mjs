import { createNextConfig } from 'next/config';

const nextConfig = createNextConfig({
  reactStrictMode: true,
  images: {
    domains: ['your-image-source.com'], // replace with your image source domain
  },
  experimental: {
    optimizeCss: true
},
  webpack(config) {
    
    return config;
  }
});

export default nextConfig;