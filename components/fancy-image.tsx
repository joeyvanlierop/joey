"use client";

import Image, { ImageProps } from "next/image";
import Zoom from 'react-medium-image-zoom';

export const FancyImage = ({ title, ...rest }: ImageProps) => {
  return (
    <figure>
      <Zoom zoomMargin={20} ZoomContent={CustomZoomContent}>
        <Image {...rest} />
      </Zoom>
      {title && (
        <figcaption className="text-center">
          <i className="fancy">{title}</i>
        </figcaption>
      )}
    </figure>
  );
};
const CustomZoomContent = ({
  img,
}) => {
  return (
    <>
      {img}
    </>
  )
}