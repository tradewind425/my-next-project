// breakOut/store/GameStore.ts
import { configureStore } from '@reduxjs/toolkit';
import physicsEngineReducer from './physicsEngineSlice'; //選択した物理エンジンの状態管理
import screenSizeReducer from './screenSizeSlice'; // 画面サイズの状態を保持

export const gameStore = configureStore({
  reducer: {
    physicsEngine: physicsEngineReducer,
    screenSize: screenSizeReducer, 
  },
});

// Storeの状態の型をエクスポート
export type RootState = ReturnType<typeof gameStore.getState>;
