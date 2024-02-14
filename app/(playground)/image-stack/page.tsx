import { getUrl } from "@lib/url";
import { Metadata } from "next";
import { ImageStack } from "./image-stack";

export const metadata: Metadata = {
  title: "Image Stack",
  description: "Elegant design for horizontally stacked images.",
  metadataBase: new URL(getUrl()),
  openGraph: {
    title: "Image Stack",
    description: "Elegant design for horizontally stacked images.",
    url: "https://joeyvanlierop.com/image-stack",
    type: "website",
    images: "/og.png",
  },
};

export default function Home() {
  return (
    <ImageStack
      images={[
        {
          alt: "Da boys with their knives",
          src: "/images/DSC06435.jpg",
          width: 1024,
          height: 683,
        },
        {
          alt: "Da boys with their knives",
          src: "/images/DSC06435.jpg",
          width: 1024,
          height: 683,
        },
      ]}
    />
  );
}
