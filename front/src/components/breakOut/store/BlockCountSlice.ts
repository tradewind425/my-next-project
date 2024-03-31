// breakOut/store/BlockCountSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BlockCountState {
  totalBlocks: number;
}

const initialState: BlockCountState = {
  totalBlocks: 0,
};

export const blockCountSlice = createSlice({
  name: 'blockCount',
  initialState,
  reducers: {
    setTotalBlocks: (state, action: PayloadAction<number>) => {
      state.totalBlocks = action.payload;
    },
  },
});

export const { setTotalBlocks } = blockCountSlice.actions;

export default blockCountSlice.reducer;
