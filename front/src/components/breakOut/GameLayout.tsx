// GameLayout.tsx 
import React from 'react';
import BlockCounter from './views/components/BlockCounter'; // 正しいパスに修正してください

type GameLayoutProps = {
    gameRef: React.RefObject<HTMLDivElement>;
};

const GameLayout: React.FC<GameLayoutProps> = ({ gameRef }) => (
    <div className="flex flex-col justify-center items-center w-full h-screen">
        {/* ゲーム画面の上部にボタングループの位置を設定 */}
        <div className="flex flex-row space-x-4 mb-4">
            <BlockCounter />
        </div>
        {/* Phaserゲームコンテナのサイズを明示的に指定 */}
        <div ref={gameRef} id="game-container" className="max-w-800 max-h-600" style={{ width: '800px', height: '600px' }}></div>
    </div>
);

export default GameLayout;
