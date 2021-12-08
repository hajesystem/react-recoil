import { atom } from "recoil";

export const userInfoState = atom({
  key: "userInfoState",
  default: { id: NaN, user: "none", name: "no name" },
});
