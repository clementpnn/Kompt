import create from 'zustand'
import { State } from '../interfaces/interfaces';

export const useBooleanStore = create<State>((set, get) => ({
  isTrue: false,
  toggle: () => set((state) => ({ isTrue: !state.isTrue })),
}));