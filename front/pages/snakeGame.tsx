// pages/breakOut.tsx
import dynamic from 'next/dynamic';
import React from 'react';

// BreakOutゲームのコンポーネントを動的にインポートし、サーバーサイドレンダリングを無効化
// Phaserなどクライアントサイドでのみ動作するライブラリの場合、この方法が推奨される
const FrameWorkGameNoSSR = dynamic(() => import('../src/components/framework/Main'), {
  ssr: false, // SSRを無効化してクライアントサイドでのレンダリングを強制
});

const FrameWorkGame: React.FC = () => {
  return (
    <main>
      <FrameWorkGameNoSSR />
    </main>
  );
};

export default FrameWorkGame;
