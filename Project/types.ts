export interface LoginRequest {
  email: string;
  password: string;
}

// Login Success Response Type
export interface LoginResponse {
  message: string;
  userId: number;
  email: string;
}

// Error Response Types
export interface ApiError {
  message: string;
}
export interface RegisterRequest {
  fullName: string;
  email: string;
  phone: string;
  password: string;
}
export interface RegisterResponse {
  message: string;
}