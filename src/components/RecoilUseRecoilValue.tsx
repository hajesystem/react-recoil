import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userSelectorState } from "../recoil/selectors";

function RecoilUseRecoilValue() {
  // useRecoilValue : 값만 가져온다.
  const userInfo = useRecoilValue(userSelectorState);
  return (
    <>
      <h3>selector-useRecoilValue</h3>
      <Link to={"/"}>Home</Link>
      <h4>idx : {userInfo.id}</h4>
      <h4>user ID : {userInfo.user}</h4>
      <h4>user NAME : {userInfo.name}</h4>
    </>
  );
}

export default RecoilUseRecoilValue;
