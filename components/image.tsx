import { motion } from "framer-motion";
import NextImage, { ImageProps } from "next/image";
import { useState } from "react";

export function Image(props: ImageProps) {
  const [showModal, setShowModal] = useState(false);
  const { className, ...rest } = props;

  return (
    <>
      <motion.div layout layoutId={props.src as string}>
        <NextImage
          className={`rounded-lg object-contain shadow-xl ${props.className}`}
          onClick={() => setShowModal(true)}
          {...rest}
        />
      </motion.div>
      {showModal && (
        <div
          className="fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-white bg-opacity-50 transition-all dark:bg-black dark:bg-opacity-50"
          onClick={() => setShowModal(false)}
        >
          <motion.div layout layoutId={props.src as string} className="">
            <NextImage
              className={`relative rounded-lg shadow-xl ${props.className} max-h-[80vh] w-auto max-w-[80vw] rotate-0 object-contain`}
              {...rest}
            />
          </motion.div>
        </div>
      )}
    </>
  );
}
