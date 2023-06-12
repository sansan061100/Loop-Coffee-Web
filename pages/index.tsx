/* eslint-disable react-hooks/exhaustive-deps */
import MainLayout from "@/components/Layout/MainLayout";
import React, { ReactElement, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import { useGoogleLogin } from "@react-oauth/google";
import { useAuthStore } from "@/store/auth-store";
import { shallow } from "zustand/shallow";
import toast from "react-simple-toasts";
import { useRouter } from "next/router";

const Login = () => {
  const [login, isLogin] = useAuthStore(
    (state) => [state.login, state.isLogin],
    shallow
  );

  const handleLogin = useGoogleLogin({
    onSuccess: async (res) => {
      try {
        console.log(res.access_token);
        await login(res.access_token);
      } catch (error) {
        toast("Opps something went wrong");
      }
    },
  });

  const router = useRouter();
  useEffect(() => {
    if (isLogin) router.replace("/app/home");
  }, [isLogin]);

  return (
    <div>
      <Head>
        <title>Login - Loop Coffee</title>
      </Head>
      <div className="w-full relative h-80">
        <Image
          src="/img/login.jpg"
          alt="Login Image"
          height={120}
          width={500}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-5">
        <h1 className="text-xl font-bold">Pengalaman Terbaik Menikmati Kopi</h1>
        <p className="text-sm mt-2 text-gray-500">
          Bebas pilih cara pengambilan, bisa pickup atau dikirim langsung ke
          tujuan
        </p>
      </div>
      <div className="absolute right-5 left-5 bottom-5">
        <button
          onClick={() => handleLogin()}
          className="btn btn-primary w-full"
        >
          Login Dengan Google
        </button>
      </div>
    </div>
  );
};

Login.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Login;
