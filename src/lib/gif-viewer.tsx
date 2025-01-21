"use client";

import Image from "next/image";
import { useState } from "react";

export default function GifViewer({
  gifId,
  className,
  alt = "",
}: {
  gifId: string;
  className?: string;
  alt?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      {isHovered && (
        <Image
          width={400}
          height={400}
          alt={alt}
          src={`/img/gifs/${gifId}.gif`}
          className={className}
        />
      )}
      {!isHovered && (
        <Image
          width={400}
          height={400}
          alt={alt}
          src={`/img/gifs/${gifId}.png`}
          className={className}
        />
      )}
    </div>
  );
}
