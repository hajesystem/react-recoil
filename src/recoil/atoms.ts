import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: { id: "initial ID", user: "initial User", name: "initial Name" },
});
