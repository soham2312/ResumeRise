import { create } from "zustand";

const [useStore] = create((set) => ({
  data: {},
  setData: (key, value) =>
    set((state) => ({ data: { ...state.data, [key]: value } })),
}));
