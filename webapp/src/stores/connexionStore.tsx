import { create } from "zustand";
import { persist } from "zustand/middleware"
import { Jwt, Logged, State } from "../interfaces/interfaces";



export const useBooleanStore = create<State>((set, get) => ({
  compteur: 0,
  increase: () => set((state) => ({ compteur: state.compteur + 1 })),
}));

export const useJwtStore = create<Jwt>((set) => ({
  jwt: "",
  setJwt: (newState) => set((state) => ({ jwt: state.jwt = newState })),
}));

export const useLoggedStore = create<Logged>((set) => ({
  isLogged: false,
  toggle: () => {
    set((state) => ({ isLogged: !state.isLogged }));
  },
}));
