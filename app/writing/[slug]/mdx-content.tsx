"use client";

import { Nook } from "@components/home";
import * as Journal from "@components/journal";
import { MDXRemote } from "next-mdx-remote";
import NextImage from "next/image";
import { useState } from "react";

const KnifeImage = () => {
  const [blur, setBlur] = useState(true);

  return (
    <NextImage
      src={require("@public/images/DSC06435.jpg")}
      placeholder="blur"
      alt="Da boys with their knives"
      className={blur ? "blur-[20px]" : "animate-unblur"}
      onLoadingComplete={() => setBlur(false)}
    />
  );
};

const components = { Journal, Nook, KnifeImage };

export function MdxContent({ source }) {
  return <MDXRemote {...source} components={components} />;
}
