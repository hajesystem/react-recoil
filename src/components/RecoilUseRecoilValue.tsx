import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userSelectorState } from '../recoil/selectors';

function RecoilUseRecoilValue() {
  // useRecoilValue : 값만 가져온다.
  const { name, user } = useRecoilValue(userSelectorState);
  console.log(name, user);
  return (
    <>
      <h3>selector-useRecoilValue</h3>
      <Link to={'/'}>Home</Link>
      <h4>user ID : {user}</h4>
      <h4>user NAME : {name}</h4>
    </>
  );
}

export default RecoilUseRecoilValue;
