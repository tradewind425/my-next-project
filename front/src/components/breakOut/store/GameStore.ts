// breakOut/store/GameStore.ts
import { configureStore } from '@reduxjs/toolkit';
import blockCountReducer from './BlockCountSlice';

export const gameStore = configureStore({
  reducer: {
    blockCount: blockCountReducer,
  },
});

// Storeの状態の型をエクスポート
export type RootState = ReturnType<typeof gameStore.getState>;
