import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userState } from '../recoil/atoms';

// useRecoilState를 이용하여 atom을 가져오고 set을 이용하여 state를 변경한다.
function RecoilUseRecoilState() {
  const [userInfo, setUserInfo] = useRecoilState(userState);

  const updateFiled = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  return (
    <>
      <h3>useRecoilState</h3>
      <Link to={'/'}>Home</Link>
      <h4>idx : {userInfo.id}</h4>
      <h4>user ID : {userInfo.user}</h4>
      <h4>user NAME : {userInfo.name}</h4>
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

export default RecoilUseRecoilState;
