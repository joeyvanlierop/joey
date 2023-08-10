export function Git() {
  const sha = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA;
  const shortSha = sha?.substring(0, 7);
  const owner = process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER;
  const slug = process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG;
  const message = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_MESSAGE;
  const href = "https://github.com/" + owner + "/" + slug + "/commit/" + sha;

  return (
    <span>
      <a href={href} target="blank" className="underline">
        {shortSha}
      </a>
      {": "}
      {message}
    </span>
  );
}
