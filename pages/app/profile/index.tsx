/* eslint-disable @next/next/no-img-element */
import DetailLayout from "@/components/Layout/DetailLayout";
import React, { ReactElement } from "react";

const Profile = () => {
  return (
    <div className="p-5">
      <div className="flex justify-center items-center">
        <div className="avatar">
          <div className="w-24 mask mask-squircle">
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt="Avatar"
            />
          </div>
        </div>
      </div>
      <div className="mt-5 space-y-5">
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="Nama Lengkap"
        />
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="No Handphone"
        />
      </div>
      <div className="footer-container">
        <button className="btn btn-primary w-full mt-5">Simpan</button>
      </div>
    </div>
  );
};

Profile.getLayout = (page: ReactElement) => {
  return <DetailLayout title="Profile">{page}</DetailLayout>;
};

export default Profile;
