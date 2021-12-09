import { atom } from "recoil";

export const atomState = atom({
  //atom() 함수는 쓰기 가능한 RecoilState 객체를 반환한다.
  key: "atomState", //내부적으로 atom을 식별하는데 사용되는 고유한 문자열. 이 문자열은 어플리케이션 전체에서 다른 atom과 selector에 대해 고유해야 한다.
  default: { id: "", user: "", name: "" }, //atom의 초기값 또는 Promise 또는 동일한 타입의 값을 나타내는 다른 atom이나 selector
});
// useRecoilState(): atom을 읽고 쓰려고 할 때 이 Hook을 사용한다. 이 Hook는 atom에 컴포넌트을 등록하도록 한다.
// useRecoilValue(): atom을 읽기만 할 때 이 Hook를 사용한다. 이 Hook는 atom에 컴포넌트를 등록하도록 한다.
// useSetRecoilState(): atom에 쓰려고만 할 때 이 Hook를 사용한다.
// useResetRecoilState(): atom을 초기값으로 초기화할 때 이 Hook을 사용한다.
// * 컴포넌트가 등록되지 않고 atom의 값을 읽어야 하는 드문 경우는 useRecoilCallback()를 참조하면 된다.

// selector에서 구독하기 위한 atom
export const withSelectorState = atom({
  key: "withSelectorState",
  default: {
    id: "",
    userId: "",
    age: "",
    sex: "",
    address: "",
    phone: "",
    email: "",
  },
});
