"use client";

import Image, { ImageProps } from "next/image";

type ImageStackProps = { images: ImageProps[] };

export function ImageStack(props: ImageStackProps) {
  return (
    <div>
      {props.images.map((image) => (
        <Image {...image} />
      ))}
    </div>
  );
}
