import React from "react";
import { Link } from "react-router-dom";

function Root() {
  return (
    <>
      <div>
        <Link to={"/userecoilstate"}>useRecoilState link</Link>
      </div>
      <div>
        <Link to={"/userecoilvalue"}>useRecoilState link</Link>
      </div>
    </>
  );
}

export default Root;
