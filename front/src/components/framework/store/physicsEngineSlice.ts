//物理エンジンのモードに応じて、GameScene ０と１を切り替えるスライス
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// GameConfig から physicsEngineType をインポート
import { physicsEngineType } from '../utils/GameConfig'; // 正しいパスに修正してください

type PhysicsEngineType = 0 | 1;

// initialState の type を GameConfig から取得した値に設定
const initialState: { type: PhysicsEngineType } = {
  type: physicsEngineType,
};

const physicsEngineSlice = createSlice({
  name: 'physicsEngine',
  initialState,
  reducers: {
    setPhysicsEngineType(state, action: PayloadAction<PhysicsEngineType>) {
      state.type = action.payload;
    },
  },
});

export const { setPhysicsEngineType } = physicsEngineSlice.actions;
export default physicsEngineSlice.reducer;
