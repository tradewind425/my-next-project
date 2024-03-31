// breakOut/store/GameStore.ts
import { configureStore } from '@reduxjs/toolkit';

export const gameStore = configureStore({
  reducer: {
    
  },
});

// Storeの状態の型をエクスポート
export type RootState = ReturnType<typeof gameStore.getState>;
