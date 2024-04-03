// pages/breakOut.tsx
import dynamic from 'next/dynamic';
import React from 'react';

// BreakOutゲームのコンポーネントを動的にインポートし、サーバーサイドレンダリングを無効化
// Phaserなどクライアントサイドでのみ動作するライブラリの場合、この方法が推奨される
const SnakeGameNoSSR = dynamic(() => import('../src/components/snakeGame/Main'), {
  ssr: false, // SSRを無効化してクライアントサイドでのレンダリングを強制
});

const SnakeGame: React.FC = () => {
  return (
    <main>
      <SnakeGameNoSSR />
    </main>
  );
};

export default SnakeGame;
