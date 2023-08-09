import Link from "next/link";
import { Clock } from "./clock";
import { Column } from "./column";

export function Footer() {
  return (
    <footer className="h-12 w-full border-t border-[#2e2e2e] absolute bottom-0 flex justify-center items-center text-sm text-[#707070]">
      <Column className="justify-center">
        <div className="flex justify-between items-center">
          <Git />
          <Clock />
        </div>
      </Column>
    </footer>
  );
}

function Git() {
  const sha = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA;
  const shortSha = sha.substring(0, 7);
  const owner = process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER;
  const slug = process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG;
  const message = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_MESSAGE;
  const href = "https://github.com/" + owner + "/" + slug + "/tree/" + sha;

  return (
    <span>
      <a href={href} target="blank" className="underline">
        {shortSha}
      </a>
      {": "}
      {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_MESSAGE}
    </span>
  );
}
