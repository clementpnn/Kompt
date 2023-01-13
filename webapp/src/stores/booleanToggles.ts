import create from 'zustand'
import { State, Jwt, Logged } from '../interfaces/interfaces';

export const useBooleanStore = create<State>((set, get) => ({
  compteur: 0,
  increase: () => set((state) => ({ compteur: state.compteur + 1 })),
}));


export const useJwtStore = create<Jwt>(() => ({
  jwt: {
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImF6ZUBhemUuY29tIiwiZXhwIjoxNjczNjA2ODA4fQ.DK-T1KNxlG96OeVXkjhJadBZ_z8Ti5_Do79nby_kNSo"
  },
}));

export const useLoggedStore = create<Logged>((set)=>({
  isLogged: false,
  toggle: ()=>{set(state=>({isLogged: !state.isLogged}))}
}))