const API_URL = import.meta.env.PUBLIC_API_URL

console.log("API_URL:", API_URL);

export async function api<T>(path: string): Promise<T> {
  const response = await fetch(`${API_URL}${path}`);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  return response.json();
}