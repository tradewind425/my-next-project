import Phaser from 'phaser';
import { PaddleController } from '../../controllers/PaddleController';

export class Paddle {
    protected sprite!: Phaser.Physics.Matter.Sprite;
    private controller: PaddleController;
    private initialY: number;

    constructor(protected scene: Phaser.Scene, x: number, y: number) {
        this.initialY = y;
        // テクスチャ生成とスプライト設定
        this.createPaddleTexture(x, y);
        // PaddleControllerをインスタンス化
        this.controller = new PaddleController(this.scene);
        this.sprite.setRectangle(120, 20); // Spriteに対して四角形の物理形状を設定
        this.sprite.setMass(10000); // 非常に大きな質量を設定
        this.sprite.setDensity(10000); // 非常に大きな密度を設定
    }

     //Entityの形状でテクスチャを生成する関数
    private createPaddleTexture(x: number, y: number): void {
        // Graphicsオブジェクトを使用してテクスチャを動的に生成
        const graphics = this.scene.add.graphics({ fillStyle: { color: 0xffffff } });    
        graphics.fillRect(0, 0, 120, 20);   // 四角形テクスチャを描画
        graphics.generateTexture('paddleTexture', 120, 20); //テクスチャを生成
        graphics.destroy(); /// Graphicsオブジェクトはもう不要なので破棄

        // 生成したテクスチャを使用してスプライトを作成
        this.sprite = this.scene.matter.add.sprite(x, y, 'paddleTexture', undefined, {
            isStatic: false
        });
    }

    public update(): void {
        // コントローラーを使用してパドルを更新
        this.controller.update(this.sprite);

        // パドルが下に移動した場合に元の高さに戻す
        if (this.sprite.y > this.initialY) {
            this.sprite.setPosition(this.sprite.x, this.initialY); // 正しい方法でパドルの位置を設定
        }
    }

    public getSprite(): Phaser.Physics.Matter.Sprite {
        return this.sprite;
    }
}
