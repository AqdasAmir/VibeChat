import {create} from 'zustand';

export const useAuthStore = create((set) => ({
    authUser: {name: "aamsh", _id: "1234", age: 16},
    isLoggedIn: false,

    login: () => {
        console.log("we just logged in ");
        set({ isLoggedIn: true })
    },
})
)