import { create } from 'zustand';

export const useStore = create((set) => ({
  projectName: 'React Projects',
  setProjectName: (name) => set((state) => ({ projectName: name })),
}));
