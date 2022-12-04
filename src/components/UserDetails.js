import React from "react";

const UserDetails = ({ singleData }) => {
  return (
    <div>
      <div className="d-flex justify-content-center my-5">
        <img width={40} height={40} src={singleData?.avatar} alt="Pic" />
      </div>
      <h4 className="text-center fs-4">@{singleData?.profile?.username}</h4>
      <h4 className="text-start fs-4 my-4 p-4 rounded-2 bg-secondary bg-opacity-50">
        {singleData?.Bio}
      </h4>
      <div>
        <label className="text-secondary fs-5">Name</label>
        <h4 className="text-start fs-5 p-4 rounded-2 bg-secondary bg-opacity-50">
          {" "}
          {singleData?.profile?.firstName} {singleData?.profile?.lastName}
        </h4>
      </div>
      <div>
        <label className="text-secondary fs-5">Job title</label>
        <h4 className="text-start fs-5 p-4 rounded-2 bg-secondary bg-opacity-50">
          {" "}
          {singleData?.jobTitle}
        </h4>
      </div>
      <div>
        <label className="text-secondary fs-5">E-mail</label>
        <h4 className="text-start fs-5 p-4 rounded-2 bg-secondary bg-opacity-50">
          {" "}
          {singleData?.profile?.email}
        </h4>
      </div>

      <h4> </h4>
    </div>
  );
};

export default UserDetails;
