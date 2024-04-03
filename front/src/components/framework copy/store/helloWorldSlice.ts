// Redux toolkit での スライサー兼リデューサーテンプレート。
// ※何も動作しない

import { createSlice } from '@reduxjs/toolkit';

// ステートの型定義を変更します。totalBlocksを持つ代わりに、messageという文字列を持たせます。
interface HelloWorldState {
  message: string;
}

// 初期状態も変更します。"Hello World"というメッセージをデフォルトとして設定します。
const initialState: HelloWorldState = {
  message: "Hello World",
};

export const helloWorldSlice = createSlice({
  name: 'helloWorld',
  initialState,
  reducers: {
    // メッセージを設定するアクションは不要なので、リデューサーは削除またはコメントアウトします。
    // 現在の要件では、ステートを変更する必要がないため、ここは空にしておきます。
  },
});

// アクションクリエーターも現在の要件には不要なため、エクスポートをコメントアウトまたは削除します。
// export const { } = helloWorldSlice.actions;

export default helloWorldSlice.reducer;
