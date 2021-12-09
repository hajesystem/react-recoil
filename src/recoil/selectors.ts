import { selector } from "recoil";
import { withSelectorState } from "./atoms";

export const selectorState = selector({
  // get 함수만 제공되면 Selector는 읽기만 가능한 RecoilValueReadOnly 객체를 반환.
  key: "selectorState", //내부적으로 atom을 식별하는데 사용되는 고유한 문자열. 이 문자열은 어플리케이션 전체에서 다른 atom과 selector에 대해 고유해야 한다. 지속성을 위하여 사용된다면 실행 전반에 걸쳐 안정적일 필요가 있다.
  // 파생된 상태의 값을 평가하는 함수. 값을 직접 반환하거나 비동기적인 Promise나 또는 같은 유형을 나타내는 다른 atom이나 selector를 반환할 수 있다
  get: ({ get }) => {
    const selectorStateValues = get(withSelectorState); // get을 사용하여 withSelectorState atom을 구독한다.
    // 주로 비동기 코드를 사용한다. ex) axios
    const newData = { ...selectorStateValues, age: "14", address: "서울시" };

    return newData;
  },
});
