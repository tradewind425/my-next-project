// Redux ToolkitからcreateSliceおよびPayloadActionをインポートします。
// createSliceは状態とレデューサーを簡単に定義するための関数です。
// PayloadActionはアクションのペイロードの型を指定するために使用します。
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// CounterStateインターフェースを定義します。
// このインターフェースはカウンターの状態の形を定義します。
interface CounterState {
  value: number; // valueはカウンターの現在値を表します。
}

// initialState変数を定義し、CounterState型を使用して初期状態を設定します。
// カウンターの初期値は0です。
const initialState: CounterState = {
  value: 0,
};

// counterSliceを作成します。この関数はReduxの状態管理のロジックをカプセル化します。
export const counterSlice = createSlice({
  name: 'counter', // スライスの名前。アクションタイプを生成する際に使用されます。
  initialState, // このスライスの初期状態。
  reducers: { // reducersフィールドには、状態を変更する関数（レデューサー）を定義します。
    increment: (state) => {
      state.value += 1; // カウンターを1増やします。Immerライブラリにより、この変更は不変性を維持しつつ行われます。
    },
    decrement: (state) => {
      state.value -= 1; // カウンターを1減らします。
    },
  },
});

// counterSliceのアクションクリエイターをエクスポートします。
// これにより、incrementとdecrementアクションを他の場所で簡単に使用できるようになります。
export const { increment, decrement } = counterSlice.actions;

// counterSliceのレデューサーをデフォルトエクスポートします。
// このレデューサーは、Reduxストアに統合され、状態の更新を担当します。
export default counterSlice.reducer;
