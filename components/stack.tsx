import { ImageProps } from "next/image";
import { Image } from "./image";

export function Stack(props: { images: ImageProps[] }) {
  return (
    <div className="flex content-center">
      {props.images.map((image) => {
        const { className, ...rest } = image;
        return (
          <Image
            className={`min-w-0 ${className}`}
            key={image.src as string}
            {...rest}
          />
        );
      })}
    </div>
  );
}
