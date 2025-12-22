'use client';

import Image from "next/image";
import { basePath } from "@/utils/basePath";

type AppImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

export default function AppImage({
  src,
  alt,
  width,
  height,
  className,
}: AppImageProps) {
  const isGithubPages = basePath !== "";

  // GitHub Pages → img nativo
  if (isGithubPages) {
    return (
      <img
        src={`${basePath}${src}`}
        alt={alt}
        className={className}
      />
    );
  }

  // Local / Vercel → next/image
  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 800}
      height={height ?? 600}
      className={className}
    />
  );
}
