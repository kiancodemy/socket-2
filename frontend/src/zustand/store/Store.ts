import { create } from "zustand";

interface BearState {
  conversation: any;
  setconversaton: (conversation: any) => void;
  Message: [];
  setMessage: (message: any) => void;
}

export const usestore = create<BearState>()((set) => ({
  conversation: null,
  setconversaton: (conversation) => set({ conversation }),
  Message: [],
  setMessage: (Message) => set({ Message }),
}));
