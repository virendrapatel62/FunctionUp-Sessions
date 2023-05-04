import { atom } from "recoil";

export const usersAtom = atom({
  key: "users",
  default: [],
});
export const authAtom = atom({
  key: "auth",
  default: JSON.parse(localStorage.getItem("auth")) || {},
});
