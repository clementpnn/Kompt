import { create } from "zustand"
import { persist } from "zustand/middleware"
import { User } from '../interfaces/interfaces'


export const userStore = create<User>() (

  persist(

    (set) => ({
      token: "",
      group: false,
      admin: 0,
      setUser: (token) => set((state) => ({token: token})),
      setAdmin: (newRole) => set((state) => ({admin: newRole})),
      setGroup: (inGroup) => set((state) => ({group: inGroup})),
      deleteUser: () => set((state) => ({token: "", group: false}))
    }),

    {name: "global", getStorage: () => localStorage}
    
  )

)

