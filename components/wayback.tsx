import { Git } from "./git";

export async function Wayback() {
  const deployments = await fetchDeployments();

  if (deployments.length == 0) {
    return <p>Deplyment machine broke</p>;
  }

  return (
    <ol className="flex flex-col">
      {deployments.map((deployment) => (
        <li
          className="py-1 border-b last:border-b-0 border-[#2e2e2e]"
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
  const data = await fetch("https://api.vercel.com/v6/deployments", options)
    .then((resp) => resp.json())
    .then((json) => json.deployments)
    .then((deployments) =>
      deployments.map((deployment) => ({
        url: deployment.url,
        message: deployment.meta.githubCommitMessage,
        sha: deployment.meta.githubCommitSha,
      }))
    )
    .then((deployments) => deployments.reverse());

  return data;
}
