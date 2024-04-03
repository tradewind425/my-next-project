// slices/screenSizeSlice.ts の変更部分
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ScreenSizeState {
  width: number;
  height: number;
}

// 初期状態を空にするか、実際の初期化はアプリケーションのエントリーポイントで行う
const initialState: ScreenSizeState = {
  width: 0, // 仮の値
  height: 0, // 仮の値
};

export const screenSizeSlice = createSlice({
  name: 'screenSize',
  initialState,
  reducers: {
    setScreenSize: (state, action: PayloadAction<ScreenSizeState>) => {
      state.width = action.payload.width;
      state.height = action.payload.height;
    },
  },
});

export const { setScreenSize } = screenSizeSlice.actions;

export default screenSizeSlice.reducer;
