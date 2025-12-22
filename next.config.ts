import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
   images: {
    unoptimized: true,
  },
  basePath: "/colegio-el-refugio",
  assetPrefix: "/colegio-el-refugio/",
};

export default nextConfig;
