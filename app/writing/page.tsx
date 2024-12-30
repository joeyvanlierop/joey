import { redirect } from "next/navigation";

export default async function WritingPageRedirect() {
  redirect(`/things`);
}