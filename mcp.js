import { login } from "./login.js";

export default async function handler(req, res) {
  try {
    const token = await login();

    const mcpResponse = await fetch("https://mcp.turkishtechlab.com/mcp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cookie": token
      },
      body: JSON.stringify(req.body)
    });

    const result = await mcpResponse.json();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}