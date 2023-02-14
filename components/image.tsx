import NextImage, { ImageProps, StaticImageData } from "next/image";

export function Image(props: ImageProps) {
  return <NextImage className="rounded" {...props} />;
}
