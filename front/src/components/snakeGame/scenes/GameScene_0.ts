import Phaser from 'phaser';

export class GameScene_0 extends Phaser.Scene {
    private snakeHead!: Phaser.GameObjects.Text;
    private moveInterval: number = 500;
    private lastMoveTime: number = 0;
    private direction: 'left' | 'right' | 'up' | 'down' = 'left';
    private foods: Phaser.GameObjects.Text[] = [];
    private foodCount: number = 5; // 配置する餌の数

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
    }

    private setupGame(): void {
        const { width, height } = this.sys.game.canvas;
        this.snakeHead = this.add.text(width / 2, height / 2, '◆', {
            font: '48px Arial',
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
        for (let i = 0; i < this.foodCount; i++) {
            const x = Phaser.Math.Between(0, this.sys.game.canvas.width);
            const y = Phaser.Math.Between(0, this.sys.game.canvas.height);
            const food = this.add.text(x, y, '・', {
                font: '32px Arial',
                color: '#ff0000'
            }).setOrigin(0.5);
            this.foods.push(food);
        }
    }

    update(time: number): void {
        if (time - this.lastMoveTime > this.moveInterval) {
            switch (this.direction) {
                case 'left':
                    this.snakeHead.x -= this.snakeHead.width;
                    break;
                case 'right':
                    this.snakeHead.x += this.snakeHead.width;
                    break;
                case 'up':
                    this.snakeHead.y -= this.snakeHead.height;
                    break;
                case 'down':
                    this.snakeHead.y += this.snakeHead.height;
                    break;
            }
            this.lastMoveTime = time;
        }
    }
}
