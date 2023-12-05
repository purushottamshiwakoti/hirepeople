import { create } from "zustand";

const useAuthStore = create((set) => ({
  fullName: "",
  email: "",
  id: "",
  role: "",
  setUserName: (name) => set({ fullName: name }),
  setRole: (roles) => set({ role: roles }),
  setUserEmail: (email) => set({ lastName: email }),
  setId: (userId) => set({ id: userId }),
  logout: () => set({ id: "", fullName: "", email: "" }),
}));

export default useAuthStore;
