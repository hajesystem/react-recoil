import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { atomState } from "../recoil/atoms";
import { selectorState } from "../recoil/selectors";

function User() {
  // useRecoilValue ==> atom에서 state값을 가져온다.
  const userInfo = useRecoilValue(atomState);
  const ageSex = useRecoilValue(selectorState);
  return (
    <>
      <Link to={"/"}>root</Link>
      <div>
        <p>idx :{userInfo.id}</p>
        <p>user ID :{userInfo.user}</p>
        <p>user NAME :{userInfo.name}</p>
      </div>
      <div>
        <p>age:{ageSex.age}</p>
        <p>sex:{ageSex.address}</p>
        <p>id:{ageSex.id}</p>
      </div>
    </>
  );
}

export default User;
