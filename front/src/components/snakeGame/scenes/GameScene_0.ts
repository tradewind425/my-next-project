import Phaser from 'phaser';

export class GameScene_0 extends Phaser.Scene {
    private snakeHead!: Phaser.GameObjects.Text;
    private moveInterval: number = 1000;
    private lastMoveTime: number = 0;
    // 進行方向を表すenum
    private direction: 'left' | 'right' | 'up' | 'down' = 'left';

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
