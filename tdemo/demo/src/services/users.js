import { api } from "./api";

export function fetchUsers() {
  return api.get("/users.json").then((response) => response.data);
}
