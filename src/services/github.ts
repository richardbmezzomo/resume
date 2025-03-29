const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN; 
const GITHUB_USERNAME = "richardbmezzomo";

export async function getPinnedRepos() {
  const query = {
    query: `
      {
        user(login: "${GITHUB_USERNAME}") {
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                name
                description
                stargazerCount
                forkCount
                url
                primaryLanguage {
                  name
                  color
                }
              }
            }
          }
        }
      }
    `,
  };

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(query),
  });

  const json = await res.json();
  return json.data.user.pinnedItems.nodes;
}
