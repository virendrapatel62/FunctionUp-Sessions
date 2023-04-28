import { atom } from "recoil";

export const tweetsAtom = atom({
  key: "tweets",
  default: [],
});
