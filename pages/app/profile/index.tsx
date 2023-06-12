/* eslint-disable @next/next/no-img-element */
import DetailLayout from "@/components/Layout/DetailLayout";
import { useAuthStore } from "@/store/auth-store";
import http from "@/utils/http";
import { useRouter } from "next/router";
import React, { ReactElement, useState } from "react";
import { useMutation, useQuery } from "react-query";
import toast from "react-simple-toasts";

const Profile = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState("");
  const [preview, setPreview] = useState("");

  const { data, isLoading } = useQuery(["profile"], async () => {
    const req = await http.get("/profile");
    setName(req.data.result.name);
    setPhone(req.data.result.phone_number);
    return req.data.result;
  });

  const updateAuth = useAuthStore((state) => state.updateAuth);
  const router = useRouter();
  const mutation = useMutation(
    async () => {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("address", "tidak ada");
      formData.append("phone_number", phone);
      if (preview) {
        formData.append("avatar", photo);
      }

      const req = await http.post("/profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      updateAuth(req.data.result.name, req.data.result.avatar);
      return req.data.result;
    },
    {
      onSuccess: () => {
        toast("Berhasil mengubah profile");
        router.back();
      },
      onError: () => {
        toast("Gagal mengubah profile");
      },
    }
  );

  const handleSubmit = (e: any) => {
    e.preventDefault();
    mutation.mutate();
  };

  return (
    <div className="p-5">
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          Loading ...
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center items-center">
            <label className="avatar" htmlFor="avatar">
              <div className="w-24 mask mask-squircle">
                <img src={preview ? preview : data.avatar} alt={data.name} />
              </div>
              <input
                type="file"
                name="avatar"
                id="avatar"
                className="hidden"
                onChange={(e: any) => {
                  if (e.target.files) {
                    setPhoto(e.target.files[0]);
                    setPreview(URL.createObjectURL(e.target.files[0]));
                  }
                }}
              />
            </label>
          </div>
          <div className="mt-5 space-y-5">
            <div>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Nama Lengkap"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="No Handphone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="footer-container">
            <button
              className={`btn btn-primary w-full mt-5 ${
                mutation.isLoading ? "loading" : ""
              }`}
              disabled={mutation.isLoading}
            >
              Simpan
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

Profile.getLayout = (page: ReactElement) => {
  return <DetailLayout title="Profile">{page}</DetailLayout>;
};

export default Profile;
