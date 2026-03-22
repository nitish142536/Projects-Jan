const BASE_URL = "http://localhost:5147";

export const loginUser = async (email: string, password: string) => {
  const response = await fetch(`${BASE_URL}/api/Auth/login`, { // ✅ fixed endpoint
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  // Handle empty or invalid JSON safely
  let data;
  try {
    data = await response.json();
  } catch {
    throw new Error("Invalid server response");
  }

  if (!response.ok) {
    throw new Error(data?.message || "Login failed");
  }

  return data;
};