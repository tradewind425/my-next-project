import Phaser from 'phaser';

export class GameScene_0 extends Phaser.Scene {
    // 蛇の頭の表現用のテキスト
    private snakeHead!: Phaser.GameObjects.Text;

    constructor() {
        super({ key: 'GameScene_0' });
    }

    preload(): void {
        // 必要なアセットをロードする場所
    }

    create(): void {
        // ESCキーを押すとポーズ画面を表示
        this.input.keyboard.on('keydown-ESC', () => {
            this.scene.pause();
            this.scene.launch('PauseScene', { previousSceneKey: this.scene.key });
        });

        this.setupGame();
    }

    private setupGame(): void {
        // 画面中央に蛇の頭を表現するテキストオブジェクトを配置
        const { width, height } = this.sys.game.canvas;
        this.snakeHead = this.add.text(width / 2, height / 2, '◆', {
            font: '48px Arial',
            color: '#00ff00'
        }).setOrigin(0.5);
    }

    update(): void {
        // 蛇の頭の更新処理をここに実装する
    }
}
