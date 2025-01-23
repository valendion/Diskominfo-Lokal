import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
export const useSidebarStore = create(
  persist(
    (set) => ({
      isOpen: false,
      toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
      openSidebar: () => set({ isOpen: true }),
      closeSidebar: () => set({ isOpen: false }),
    }),
    {
      name: "sidebar", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export const useMenuStore = create(
  persist(
    (set) => ({
      textMenu: "",
      setTextMenu: (menu) => set(() => ({ textMenu: menu })),
    }),
    {
      name: "menu",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
