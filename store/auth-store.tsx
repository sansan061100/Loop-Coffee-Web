import http from "@/utils/http";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import nookies from "nookies";

type AauthStoreState = {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
};

type AuthStoreActions = {
  getProfile: () => void;
  logOut: () => void;
};

type AuthStore = AauthStoreState & AuthStoreActions;

const initialState = {
  name: "",
  email: "",
  avatar: "",
};
const authStore = (set: any) => ({
  user: initialState,
  getProfile: async () => {
    const req = await http.get("/profile");
    const { name, avatar, email } = req.data.result.user;
    set({
      user: {
        name,
        avatar,
        email,
      },
    });
  },
  logOut: () => {
    nookies.destroy(null, "jwt_token");
    set({ user: initialState });
  },
});

const useAuthStore = create(
  persist<AuthStore>(authStore, {
    name: "auth-store",
  })
);

export default useAuthStore;
