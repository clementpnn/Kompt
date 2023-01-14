import { create } from "zustand";
import { persist } from "zustand/middleware"
import { User } from '../interfaces/interfaces'


export const userStore = create<User>()(
  persist(
    (set) => ({
      token: "",
      group: false,
      setUser: (token) => set((state) => ({token: token})),
      setGroup: (inGroup) => set((state) => ({group: inGroup})),
      deleteUser: () => set((state) => ({token: "", group: false}))
    }),
    {name: "global", getStorage: () => localStorage}
  )
)