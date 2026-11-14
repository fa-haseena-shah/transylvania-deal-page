"use client";

import Image from "next/image";
import { useState } from "react";

// prevent missing images or show fallback image
export default function SafeImage({ src, alt, fallbackSrc = null, ...rest }) {
  const [failed, setFailed] = useState(false);
  const finalSrc = !src || failed ? fallbackSrc : src;

  if (!finalSrc) return null;

  return <Image src={finalSrc} alt={alt} onError={() => setFailed(true)} {...rest} />;
}