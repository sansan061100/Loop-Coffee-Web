import http from "@/utils/http";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  id: number;
  name: string;
  avatar: string;
  role: number;
}
interface AuthStore {
  user: User;
  isLogin: boolean;
  login: (accessToken: string) => void;
  logout: () => void;
}

const authStore = persist<AuthStore>(
  (set) => ({
    user: {
      id: 0,
      name: "",
      avatar: "",
      role: 0,
    },
    isLogin: false,
    login: async (accessToken) => {
      try {
        const req = await http.post("login", {
          token: accessToken,
        });
        const { token, user } = req.data.result;
        localStorage.setItem("token", token);
        set({
          user: user,
          isLogin: true,
        });
        return Promise.resolve(user);
      } catch (error) {
        return Promise.reject(error);
      }
    },
    logout: () => {
      localStorage.removeItem("token");
      set({
        user: {
          id: 0,
          name: "",
          avatar: "",
          role: 0,
        },
        isLogin: false,
      });
    },
  }),
  {
    name: "auth-store",
  }
);

export const useAuthStore = create(authStore);
