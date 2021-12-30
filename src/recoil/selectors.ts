import { selector } from "recoil";
import { userState } from "./atoms";

export const userSelectorState = selector({
  // get 함수만 제공되면 Selector는 읽기만 가능한 RecoilValueReadOnly 객체를 반환.
  key: "userSelectorState",
  get: ({ get }) => {
    const state = get(userState); // get을 사용하여 atoms.ts/userState을 구독한다.
    return state;
  },
});
