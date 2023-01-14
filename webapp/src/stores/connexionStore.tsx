import { create } from "zustand";
import { persist } from "zustand/middleware"
import { Jwt } from '../interfaces/interfaces'


export const useAuthStore = create<Jwt>()(
  persist(
    (set) => ({
      token: "",
      setToken: (token) => set((state) => ({token: token})),
      deleteToken: () => set((state) => ({token: ""}))
    }),
    {name: "global", getStorage: () => localStorage}
  )
)

