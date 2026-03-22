const BASE_URL = "http://localhost:5147/api/Auth";

export const registerUser = async (data: {
  fullName: string;
  email: string;
  phone: string;
  password: string;
}) => {
  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Registration failed");
  }

  return result;
};