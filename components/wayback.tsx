import { Git } from "./git";

export async function Wayback() {
  const deployments = await fetchDeployments();

  if (deployments.length == 0) {
    return <p>Deployment machine broke</p>;
  }

  return (
    <ol className="flex flex-col max-h-96 overflow-y-scroll -mr-3">
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
  const data = await fetch(
    "https://api.vercel.com/v6/deployments?app=joeyvanlierop&limit=1000",
    options
  )
    .then((resp) => resp.json())
    .then((json) => json.deployments)
    .then((deployments) =>
      deployments.filter((deployment) => ({
        deployment,
      }))
    )
    .then((deployments) =>
      deployments.map((deployment) => ({
        url: deployment.url,
        message: deployment.meta.githubCommitMessage,
        sha: deployment.meta.githubCommitSha,
      }))
    );

  return data;
}
