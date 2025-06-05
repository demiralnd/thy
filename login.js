let sessionToken = null;

export async function login() {
  const response = await fetch("https://mcp.turkishtechlab.com/sse", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      memberNumber: "TK227818451",
      password: "170599"
    })
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  const cookies = response.headers.get("set-cookie");
  sessionToken = cookies?.split(";")[0];
  return sessionToken;
}