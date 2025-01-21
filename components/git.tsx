export function WaybackLink({ sha, message, url, date }: { sha?: string; message: string; url: string; date?: string }) {
  const shortSha = sha?.substring(0, 7);
  const vercel_href = `https://${url}`;

  return (
    <span>
      <a href={vercel_href} target="blank" className="underline text-mono-11">
        {shortSha ?? date}
      </a>
      {": "}
      {message}
    </span>
  );
}

export function WaybackFileLink({ sha, message, url, date }: { sha?: string; message: string; url: string; date?: string }) {
  const shortSha = sha?.substring(0, 7);

  return (
    <span>
      <a href={url} target="blank" className="underline text-mono-11">
        {date}
      </a>
      {": "}
      {message}
    </span>
  );
}
