import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userInfoState } from "../recoil/atoms";

function UserInfo() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const updateFiled = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  return (
    <>
      <Link to={"/user"}>user link</Link>
      <p>idx :{userInfo.id}</p>
      <p>user ID :{userInfo.user}</p>
      <p>user NAME :{userInfo.name}</p>
      <p>
        <span>id :</span>
        <input type="text" name="id" onChange={updateFiled} />
      </p>
      <p>
        <span>user :</span>
        <input type="text" name="user" onChange={updateFiled} />
      </p>
      <p>
        <span>name :</span>
        <input type="text" name="name" onChange={updateFiled} />
      </p>
    </>
  );
}

export default UserInfo;
