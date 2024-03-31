// BreakOutGame.tsx
import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import gameConfig from './utils/GameConfig'; // ゲーム設定のインポート
import { Provider } from 'react-redux';
import { gameStore } from './store/GameStore'; // Reduxストアのインポート
import GameLayout from './GameLayout'; // GameLayoutコンポーネントのインポート

const BreakOutGame: React.FC = () => {
    const gameRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!gameRef.current) return;
        const game = new Phaser.Game({ ...gameConfig, parent: gameRef.current.id });
        return () => game.destroy(true);
    }, []);

    //html部分をGameLayout.tsxにカプセル化
    return (
        <Provider store={gameStore}>
            <GameLayout gameRef={gameRef} />
        </Provider>
    );
};

export default BreakOutGame;
