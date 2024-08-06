// profileDetails.js
import React from "react";
import { useUser } from "../context/UserContext";

function ProfileDetails() {
  const { user } = useUser();

  if (!user) {
    return <div className="text-lg my-4">No user details available</div>;
  }

  return (
    <>
      <h2 className="text-center text-cyan-300 my-4">User Details</h2>
      <div className="flex justify-center mx-auto items-center my-6">
        {/* <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Mobile: {user.mobile}</p>
      <p>Age: {user.age}</p>
      <p>Qualification: {user.qualification}</p>
      <p>Address: {user.address}</p> */}

        <div className=" font-sans border-2 border-gray-600 rounded-md">
          {/* <div className="flex-none w-48 relative">
          <img
            src="/classic-utility-jacket.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div> */}
          <form className="flex-auto p-6">
            <div className="flex flex-wrap">
              <h1 className="flex-auto text-lg font-semibold text-slate-900">
                Name: {user.name}
              </h1>
              <div className="text-lg font-semibold text-slate-500">
                Mobile N0: {user.mobile}
              </div>
              <div className="w-full flex-none text-sm font-medium text-slate-700 my-4">
                Email: {user.email}
              </div>
            </div>

            <div className="flex space-x-4 mb-6 text-sm font-medium">
              <div className="flex-auto flex space-x-4">
                <button
                  className="h-10 px-6 font-semibold rounded-md bg-black text-white"
                  type="submit"
                >
                  Age: {user.age}
                </button>
                <button
                  className="h-10 px-6 font-semibold rounded-md bg-black text-white"
                  type="button"
                >
                  Qualification: {user.qualification}
                </button>
              </div>
            </div>
            <p className="text-sm text-slate-700">Address: {user.address}</p>
          </form>
        </div>
      </div>
    </>
  );
}

export default ProfileDetails;
