import { create } from 'zustand'
import { createBearSlice } from './bearSlice'
import { createFishSlice } from './fishSlice'
import { devtools } from 'zustand/middleware';

 const useStore = create(devtools((...a) => ({
    bearSlice: createBearSlice(...a),
    fishSlice: createFishSlice(...a),
})));
window.store = useStore;
export default useStore;

