import React from "react";

const UserList = ({ info, getSingleData }) => {
  console.log(info);
  return (
    <div className="d-flex justify-content-center">
      <div className="w-75">
        <div
          onClick={() => getSingleData(info)}
          className="my-1 d-flex py-2 rounded-2 justify-content-around align-items-center bg-success text-white fs-6 px-4 pointer-event "
          style={{ cursor: "pointer" }}
        >
          <div>
            <img width={20} height={20} src={info?.avatar} alt="avatar" />
          </div>
          <h3 className="fs-6">
            {" "}
            {info?.profile.firstName} {info?.profile.lastName}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default UserList;
