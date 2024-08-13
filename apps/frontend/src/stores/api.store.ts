import { create } from 'zustand';

interface ApiStore {
  apiUrl: string;
}

const useApiStore = create<ApiStore>()(() => ({
  apiUrl: 'https://qwis-json-server.vercel.app',
}));

export default useApiStore;
