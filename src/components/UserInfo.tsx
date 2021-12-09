import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { atomState } from "../recoil/atoms";

function UserInfo() {
  // useRecoilState ===> atom에서 state를 가져오고, setState를 통해 state를 변경할 수 있다.
  const [userInfo, setUserInfo] = useRecoilState(atomState);

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
