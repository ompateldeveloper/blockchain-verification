import { create } from "zustand";
import { persist } from "zustand/middleware";
export interface Company {
    id: string;
    name: string;
    address: string;
    phone: string;
    email: string;
    website: string;
    logo: string;
    sign: string;
}
export interface UserDetails {
    id: string;
    email: string;
    username: string;
    fname: string;
    lname: string;
    password: string;
    pk?: string;
    company?: Company;
    companyId?: string;
    updateUserDetails: (newDetails: Partial<UserDetails>) => void;
    clearUserDetails: () => void;
}

const defaultState = {
    id: "",
    email: "",
    username: "",
    fname: "",
    lname: "",
    password: "",
    pk: "",
    company: {
        id: "",
        name: "",
        address: "",
        phone: "",
        email: "",
        website: "",
        logo: "",
        sign: "",
    },
};

const useUserStore = create<UserDetails>()(
    persist(
        (set) => ({
            ...defaultState,
            updateUserDetails: (newDetails) => set((state) => ({ ...state, ...newDetails })),
            clearUserDetails: () => set(defaultState),
        }),
        {
            name: "user-storage",
        }
    )
);

export { useUserStore };
export default useUserStore;
