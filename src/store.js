import {create} from "zustand";

const useStore = create((set) => ({
  selectedItem: null,
  setSelectedItem: (item) => set({ selectedItem: item }),
}));

export default useStore;
