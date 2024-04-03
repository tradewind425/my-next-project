import Phaser from 'phaser';

export class GameScene_0 extends Phaser.Scene {
    private snakeHead!: Phaser.GameObjects.Text;
    private moveInterval: number = 500;
    private lastMoveTime: number = 0;
    private direction: 'left' | 'right' | 'up' | 'down' = 'left';
    private foods: Phaser.GameObjects.Text[] = [];
    private foodCount: number = 20; // 配置する餌の数
    graphics!: Phaser.GameObjects.Graphics;

    constructor() {
        super({ key: 'GameScene_0' });
    }

    preload(): void {
        // 必要なアセットをロードする場所
    }

    create(): void {
        this.input.keyboard.on('keydown-ESC', () => {
            this.scene.pause();
            this.scene.launch('PauseScene', { previousSceneKey: this.scene.key });
        });

        this.setupGame();
        this.setupControls();
        this.createFoods();
        this.drawGrid();
    }

    private setupGame(): void {
        const gridSize = 20; // グリッドのサイズを20に設定
        const { width, height } = this.sys.game.canvas;
    
        // グリッドに合わせて画面中央を計算する際、セルの中心ではなく、セル内に配置するための調整
        // グリッドのサイズの半分を足して、グリッド内にヘビが収まるように調整
        const centerX = Math.round((width / 2) / gridSize) * gridSize + (gridSize / 2);
        const centerY = Math.round((height / 2) / gridSize) * gridSize + (gridSize / 2);
    
        this.snakeHead = this.add.text(centerX, centerY, '◆', {
            font: `${gridSize}px Arial`, // グリッドサイズに合わせてフォントサイズを設定
            color: '#00ff00'
        }).setOrigin(0.5);
    }

    private setupControls(): void {
        this.input.keyboard.on('keydown-W', () => {
            this.direction = 'up';
        });
        this.input.keyboard.on('keydown-A', () => {
            this.direction = 'left';
        });
        this.input.keyboard.on('keydown-S', () => {
            this.direction = 'down';
        });
        this.input.keyboard.on('keydown-D', () => {
            this.direction = 'right';
        });
    }

    private createFoods(): void {
        const gridSize = 20; // グリッドのサイズ（ヘビの頭部分と同じサイズを仮定）
        const gridWidth = Math.floor(this.sys.game.canvas.width / gridSize);
        const gridHeight = Math.floor(this.sys.game.canvas.height / gridSize);
        const centerCoordinates = [];
    
        // グリッドの中心座標を計算して配列に保存
        for (let x = 0; x < gridWidth; x++) {
            for (let y = 0; y < gridHeight; y++) {
                const centerX = (x * gridSize) + (gridSize / 2);
                const centerY = (y * gridSize) + (gridSize / 2);
                centerCoordinates.push({ centerX, centerY });
            }
        }
    
        // 餌の数だけランダムに中心座標を選んで配置
        for (let i = 0; i < this.foodCount; i++) {
            const randomIndex = Phaser.Math.Between(0, centerCoordinates.length - 1);
            const { centerX, centerY } = centerCoordinates[randomIndex];
    
            const food = this.add.text(centerX, centerY, '・', {
                font: '32px Arial',
                color: '#ff0000'
            }).setOrigin(0.5);
            this.foods.push(food);
        }
    }

    private drawGrid(): void {
        const gridSize = 20; // グリッドのサイズ
        const { width, height } = this.sys.game.canvas;
        this.graphics = this.add.graphics({ lineStyle: { width: 1, color: 0xffffff } });

        // グリッドの描画
        for (let x = 0; x < width; x += gridSize) {
            this.graphics.lineBetween(x, 0, x, height);
        }
        for (let y = 0; y < height; y += gridSize) {
            this.graphics.lineBetween(0, y, width, y);
        }
    }

    update(time: number): void {
        const gridSize = 20; // グリッドのサイズ
    
        if (time - this.lastMoveTime > this.moveInterval) {
            switch (this.direction) {
                case 'left':
                    this.snakeHead.x -= gridSize;
                    break;
                case 'right':
                    this.snakeHead.x += gridSize;
                    break;
                case 'up':
                    this.snakeHead.y -= gridSize;
                    break;
                case 'down':
                    this.snakeHead.y += gridSize;
                    break;
            }
            this.lastMoveTime = time;
        }
    }
}
