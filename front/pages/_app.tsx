// pages/_app.tsx

//grobal.css をラップする
import '../styles/globals.css';

// React-Redux の Provider コンポーネントをインポートします。
// これを使うことで、Redux ストアを React コンポーネントで利用できるようになります。
import { Provider } from 'react-redux';

// 作成した Redux ストアをインポートします。
// このストアは、アプリケーションの状態を管理します。
import { store } from '../src/store/store';

// Next.js の AppProps タイプをインポートします。
// AppProps は、Next.js のカスタム App コンポーネントに渡されるプロパティの型定義です。
import type { AppProps } from 'next/app';

// MyApp コンポーネントを定義します。
// このコンポーネントは、Next.js アプリケーションのメインコンポーネントとして機能します。
// AppProps から Component と pageProps を受け取ります。
// Component は、現在アクティブなページコンポーネントです。
// pageProps は、データフェッチングメソッドを通じてプリロードされた初期プロパティです。
function MyApp({ Component, pageProps }: AppProps) {
  return (
    // Provider コンポーネントで Redux ストアを渡します。
    // これにより、アプリケーション全体で Redux ストアを利用できるようになります。
    <Provider store={store}>
      {/* Component に pageProps を渡してレンダリングします。
          これにより、アクティブなページが表示されます。 */}
      <Component {...pageProps} />
    </Provider>
  );
}

// MyApp コンポーネントをエクスポートします。
// これにより、Next.js がアプリケーションのメインコンポーネントとして使用できるようになります。
export default MyApp;
