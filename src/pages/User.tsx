import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userInfoState } from "../recoil/atoms";

function User() {
  const [userInfo] = useRecoilState(userInfoState);
  return (
    <>
      <Link to={"/"}>root</Link>
      <div>
        <p>idx :{userInfo.id}</p>
        <p>user ID :{userInfo.user}</p>
        <p>user NAME :{userInfo.name}</p>
      </div>
    </>
  );
}

export default User;
