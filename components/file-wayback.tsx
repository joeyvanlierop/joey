import dayjs from "dayjs";
import { WaybackFileLink } from "./git";

type Commit = {
  sha: string;
  message: string;
  url: string;
  date: string;
};

async function fetchCommits(owner: string, repo: string, path: string): Promise<Commit[]> {
  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/commits?path=${path}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Error fetching commits: ${response.statusText}`);
  }

  const data = await response.json();
  return data.map((commit: any) => ({
    sha: commit.sha,
    message: commit.commit.message,
    url: commit.html_url,
    date: commit.commit.author.date,
  }));
}

export default async function FileWayback({ owner, repo, path }: { owner: string; repo: string; path: string }) {
  try {
    const commits = await fetchCommits(owner, repo, path);

    return (
      <ol className="flex flex-col max-h-96 overflow-y-scroll -mr-3 max-w-96">
        {commits.map((commit) => (
          <li
            className="first:pt-0 py-2 border-b last:border-b-0 border-border"
            key={commit.sha}
          >
            <WaybackFileLink message={commit.message} url={commit.url} date={dayjs(commit.date).format("MMMM Do[,] YYYY")} />
          </li>
        ))}
      </ol>
    );
  } catch (error) {
    return <p>Error loading commits: {error.message}</p>;
  }
}
