// pages/breakOut.tsx
import dynamic from 'next/dynamic';
import React from 'react';

// BreakOutゲームのコンポーネントを動的にインポートし、サーバーサイドレンダリングを無効化
// Phaserなどクライアントサイドでのみ動作するライブラリの場合、この方法が推奨される
const BreakOutGameWithNoSSR = dynamic(() => import('../src/components/breakOut/Main'), {
  ssr: false, // SSRを無効化してクライアントサイドでのレンダリングを強制
});

const BreakOutPage: React.FC = () => {
  return (
    <main>
      <BreakOutGameWithNoSSR />
    </main>
  );
};

export default BreakOutPage;
