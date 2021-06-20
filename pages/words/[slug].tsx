import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import { join } from "path";
import React from "react";

export default function Post({ mdxSource, data }) {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div className="wrapper">
        <h1>{data.title}</h1>
        <MDXRemote {...mdxSource} />
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.slug);

  return {
    props: {
      ...post,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  console.log(posts);
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post,
        },
      };
    }),
    fallback: false,
  };
}

const postsDirectory = join(process.cwd(), "posts");

const getAllPosts = () => {
  return fs
    .readdirSync(postsDirectory)
    .map((post) => post.replace(/\.mdx$/, ""));
};

const getPost = async (slug) => {
  const path = join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(path, "utf8");
  const { content, data } = matter(fileContents);
  const mdxSource = await serialize(content, { scope: data });
  return { mdxSource, data };
};
