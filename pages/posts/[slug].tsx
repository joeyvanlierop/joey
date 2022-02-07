import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { getPost, getPostSlugs } from "../../lib/Post";
import { Center } from "../index";

export default function TestPage({ source }) {
  return (
    <Center>
      <MDXRemote {...source} />
    </Center>
  );
}

export async function getStaticProps(context) {
  const post = getPost(context.params.slug);
  const mdxSource = await serialize(post.content);
  return { props: { source: mdxSource } };
}

export async function getStaticPaths() {
  return {
    paths: [
      ...getPostSlugs().map((slug) => {
        return {
          params: {
            slug,
          },
        };
      }),
    ],
    fallback: false,
  };
}
