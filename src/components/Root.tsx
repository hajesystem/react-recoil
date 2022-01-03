import React from 'react';
import { Link } from 'react-router-dom';

function Root() {
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
    </>
  );
}

export default Root;
