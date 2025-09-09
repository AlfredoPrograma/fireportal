import axios from "axios";

/**
 * Axios instance pre-configured with the API base URL.
 *
 * The base URL is determined by the `VITE_API_URL` environment variable.
 * If the environment variable is not set, it defaults to `'http://localhost:8080/api/v1'`.
 *
 */
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080/api/v1',
})

/**
 * Represents a generic API response structure.
 *
 */
export type ApiResponse<T> = {
  data: T;
}; 