// Redux ToolkitからconfigureStore関数をインポートします。
// configureStoreは、ミドルウェアやデベロッパーツールの統合がプリセットされた設定でReduxストアを構成するための関数です。
import { configureStore } from '@reduxjs/toolkit';

// counterSliceファイルからcounterReducerをインポートします。
// これは、カウンターに関する状態の更新ロジックを含むレデューサーです。
import counterReducer from './counterSlice';

// configureStore関数を使ってReduxストアを作成します。
// この関数には、アプリケーションの全てのレデューサーをマッピングするオブジェクトを渡します。
export const store = configureStore({
  reducer: {
    counter: counterReducer, // 'counter'キーにcounterReducerを割り当てます。これにより、アプリケーションのstate.counterにアクセスすることで、カウンターの状態を管理できます。
  },
});

// RootState型を定義します。これは、ストアのgetStateメソッドの戻り値の型を使用しています。
// これにより、アプリケーション全体でストアの状態の型が一貫して保たれ、TypeScriptの型チェック機能をフルに活用できます。
export type RootState = ReturnType<typeof store.getState>;

// AppDispatch型を定義します。これは、ストアのdispatchメソッドの型を使用しています。
// この型は、アプリケーション内でReduxアクションをディスパッチする際に、TypeScriptの型チェック機能を活用するために使います。
export type AppDispatch = typeof store.dispatch;
