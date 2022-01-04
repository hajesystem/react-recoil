import React from 'react';
import { Link } from 'react-router-dom';
import { useResetRecoilState } from 'recoil';
import { userState } from '../recoil/atoms';

function Root() {
  // remove local storage
  const reset = useResetRecoilState(userState);
  const removeLocalStorage = () => {
    localStorage.removeItem('user_state');
    reset();
  };

  return (
    <>
      <div>
        <Link to={'/userecoilstate'}>useRecoilState link</Link>
      </div>
      <div>
        <Link to={'/userecoilvalue'}>selector & useRecoilValue link</Link>
      </div>
      <div>
        <Link to={'/recoilsyncselector'}>
          sync & selector & useRecoilValue link
        </Link>
      </div>
      <div>
        <Link to={'/recoilasyncselector'}>
          async & selector & useRecoilValue & React.Suspense link
        </Link>
      </div>
      <div>
        <button onClick={removeLocalStorage}>localStorage remove</button>
      </div>
    </>
  );
}

export default Root;
