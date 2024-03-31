// ../controllers/setBlocks.ts
import { StandardBlock } from '../models/GameModel';
import Phaser from 'phaser';

export const setBlocks = (scene: Phaser.Scene): number => {
    const rows = 5; // ブロックの行数を設定
    const cols = 10; // ブロックの列数を設定

    // ブロックの配置ロジック
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const x = col * 80 + 40;
            const y = row * 30 + 50;
            new StandardBlock(scene, x, y); // StandardBlock インスタンスを作成して配置
        }
    }

    // 配置されたブロックの総数を返す
    return rows * cols;
};
