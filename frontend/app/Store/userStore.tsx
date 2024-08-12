import create from 'zustand';

type User = {
    email: string;
    username: string;
    fullName: string;
}|null;

interface UserStore {
    user:User;
    setUser:(user: User) => void;
}

export const useUserStore = create<UserStore>((set)=>({
    user:null,
    setUser:(user)=>set({user}),
}));