import React from "react";

const Profile = ({
  first_name,
  last_name,
  phone_number,
  email,
  account_type,
}) => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="bg-white rounded shadow p-4 w-full m-4 max-w-md">
          <p className="text-xl mb-4">Profile Information</p>
          <div className="flex flex-col gap-2">
            <div className="">
              <p className="text-sm">First Name</p>
              <input
                type="text"
                value={first_name}
                className="border p-1 my-2 w-full"
              />
            </div>
            <div className="">
              <p className="text-sm">Last Name</p>
              <input
                type="text"
                value={last_name}
                className="border p-1 my-2 w-full"
              />
            </div>
            <div className="">
              <p className="text-sm">Email</p>
              <input
                type="text"
                value={email}
                className="border p-1 my-2 w-full"
              />
            </div>
            <div className="">
              <p className="text-sm">Phone No.</p>
              <input
                type="text"
                value={phone_number}
                className="border p-1 my-2 w-full"
              />
            </div>
            <div className="">
              <p className="text-sm">Account Type</p>
              <input
                type="text"
                value={account_type}
                className="border p-1 my-2 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
