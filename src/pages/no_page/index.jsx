import React from "react";
import { useNavigate } from "react-router-dom";

const NoPage = () => {
  const goBack = useNavigate();
  return (
    <div>
      <h1 className="fw-bold my-5 bg-danger p-5 text-center display-1 text-light">
        <button className="p-2" onClick={()=> goBack("/")}>Go Home</button> <br />
        404 Page Not Found!
      </h1>
    </div>
  );
};

export default NoPage;
