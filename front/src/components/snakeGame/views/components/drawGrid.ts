import Phaser from 'phaser';

export const drawGrid = (scene: Phaser.Scene, gridSize: number): void => {
    const { width, height } = scene.sys.game.canvas;
    const graphics = scene.add.graphics({ lineStyle: { width: 1, color: 0xffffff } });

    // グリッドの描画
    for (let x = 0; x < width; x += gridSize) {
        graphics.lineBetween(x, 0, x, height);
    }
    for (let y = 0; y < height; y += gridSize) {
        graphics.lineBetween(0, y, width, y);
    }
};
