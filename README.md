# React Recoil

- yarn add recoil

1.  index.tsx 에서 RecoilRoot 컴포넌트로 감싼다.

```html
<RecoilRoot>
  <App />
</RecoilRoot>
```

2.  Atom은 state의 일부를 나타낸다. \
    app이하의 컴포넌트에서 atom을 구독하고 변화가 생기면 재 랜던딩을 한다.\
    recoil/atoms.ts 작성

```tsx
const atomState = atom({
  key: "atomState", // 유일한 ID
  default: { id: "", user: "", name: "" }, // 기본값 설정
});
```
