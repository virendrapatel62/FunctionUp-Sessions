import { atom } from "recoil";

export const usersAtom = atom({
  key: "users",
  default: [],
});
