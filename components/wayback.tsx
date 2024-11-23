import { Git } from "./git";

export async function Wayback() {
  const deployments = await fetchDeployments();

  if (deployments.length == 0) {
    return <p>Deployment machine broke</p>;
  }

  return (
    <ol className="flex flex-col max-h-96 overflow-y-scroll -mr-3 max-w-96">
      {deployments.map((deployment) => (
        <li
          className="first:pt-0 py-2 border-b last:border-b-0 border-border"
          key={deployment.sha}
        >
          <Git
            message={deployment.message}
            url={deployment.url}
            sha={deployment.sha}
          />
        </li>
      ))}
    </ol>
  );
}

async function fetchDeployments() {
  if (!process.env.VERCEL_API_TOKEN) {
    return [];
  }

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.VERCEL_API_TOKEN}`,
      Accept: "*/*",
      "Content-Type": "application/json",
    },
  };

  const allDeployments: { url: string; message: string; sha: string }[] = [];
  let nextPagination: string | null = null;

  do {
    const url = `https://api.vercel.com/v6/deployments?projectId=${process.env.VERCEL_PROJECT_ID}&state=READY&limit=100&${nextPagination ? `until=${nextPagination}` : ""
      }`;

    const response = await fetch(url, options);
    const { deployments, pagination } = await response.json();

    // Append the current batch of deployments
    allDeployments.push(
      ...deployments.map((deployment) => ({
        url: deployment.url,
        message: deployment.meta?.githubCommitMessage || "No message",
        sha: deployment.meta?.githubCommitSha || "No SHA",
      }))
    );

    // Update pagination cursor
    nextPagination = pagination?.next || null;
  } while (nextPagination);

  return allDeployments;
}
