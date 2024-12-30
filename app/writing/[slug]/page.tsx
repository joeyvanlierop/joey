import { getPostSlugs } from "@lib/post";
import { redirect } from "next/navigation";

export default async function WritingPostRedirect({ params }) {
  redirect(`/things/${params.slug}`);
}

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({
    slug,
  }));
}