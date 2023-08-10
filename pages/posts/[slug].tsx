import { Column } from "@components/column";
import { Spacer } from "@components/spacer";
import { PostData, getPost, getPostSlugs } from "@lib/post";
import { ResetIcon } from "@radix-ui/react-icons";
import dayjs from "dayjs";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Link from "next/link";
import remarkGfm from "remark-gfm";
interface PostProps {
  data: PostData;
  source: MDXRemoteSerializeResult;
}

export default function Post({ data, source }: PostProps) {
  return (
    <div className="flex w-full justify-center">
      <Column>
        <div>
          <div className="flex flex-col">
            <div className="flex justify-between items-center ">
              <h3 className="font-title font-bold font-header">{data.title}</h3>
              <Link href={"/"}>
                <ResetIcon className="w-6 h-6 " />
              </Link>
            </div>
            <time className="font-header text-[#a0a0a0]">
              {dayjs(data.date).format("MMMM Do[,] YYYY")}
            </time>
          </div>
          <div>
            <Spacer />
          </div>
          <article className="prose dark:prose-invert">
            <MDXRemote {...source} />
          </article>
        </div>
      </Column>
    </div>
  );
}

export async function getStaticProps(context): Promise<{ props: PostProps }> {
  const post = getPost(context.params.slug);
  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  });
  return {
    props: {
      data: post.data,
      source: mdxSource,
    },
  };
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
