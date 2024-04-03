// Main.tsx
import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import getGameConfig from './utils/GameConfig'; // ゲーム設定のインポート
import { Provider } from 'react-redux';
import { gameStore } from './store/GameStore'; // Reduxストアのインポート
import GameLayout from './GameLayout'; // GameLayoutコンポーネントのインポート

const SnakeGame: React.FC = () => {
    const gameRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!gameRef.current) return;

        // Reduxストアから物理エンジンの状態を取得
        const physicsEngineType = gameStore.getState().physicsEngine.type;       
        window.gamePhysicsEngineType = physicsEngineType; // グローバル変数に保存

        // Phaserゲームのインスタンスを生成
        const gameConfig = getGameConfig();
        const game = new Phaser.Game({ ...gameConfig, parent: gameRef.current.id });
        return () => {
            game.destroy(true);
        };
    }, []);

        // Html部分のレンダリング
    return (
        <Provider store={gameStore}>
            <GameLayout gameRef={gameRef} />
        </Provider>
    );
};

export default SnakeGame;
