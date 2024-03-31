import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store/GameStore'; 

type GameLayoutProps = {
    gameRef: React.RefObject<HTMLDivElement>;
};

const GameLayout: React.FC<GameLayoutProps> = ({ gameRef }) => {
    // Reduxストアから画面サイズの状態を取得
    const { width, height } = useSelector((state: RootState) => state.screenSize);

    return (
        <div className="flex justify-center items-center w-full h-screen">
            {/* PhaserゲームコンテナのサイズをReduxの状態から動的に設定し、中央に配置 */}
            <div 
                ref={gameRef} 
                id="game-container" 
                style={{ width: `${width}px`, height: `${height}px` }}
                className="flex justify-center items-center"
            >
                {/* ゲームコンテナの内容 */}
            </div>
        </div>
    );
};

export default GameLayout;
