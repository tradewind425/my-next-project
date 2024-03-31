//block.ts ベースブロッククラスの定義
import Phaser from 'phaser';

export class Block {
    private sprite!: Phaser.Physics.Matter.Sprite;
    
    //blocの大きさのデフォルト設定を定義している
    constructor(protected scene: Phaser.Scene, x: number, y: number, width: number = 80, height: number = 30) {
        this.createBlockTexture(x, y, width, height); //テクスチャを適用
        this.sprite.setData('type', 'block');  // カスタムプロパティとして 'block' を追加        
        this.sprite.setCollisionCategory(0x0002); // 衝突カテゴリーを設定
    }

    //Entityの形状でテクスチャを生成する関数
    private createBlockTexture(x: number, y: number, width: number, height: number): void {
        // Graphicsオブジェクトを使用してテクスチャを動的に生成
        const graphics = this.scene.add.graphics();
        graphics.fillStyle(0xffffff, 1.0); // 塗りつぶしの色を設定
        graphics.fillRect(0, 0, width, height); // 矩形を描画
        graphics.generateTexture('blockTexture', width, height); // テクスチャを生成
        graphics.destroy(); // Graphicsオブジェクトはもう不要なので破棄

        // 生成したテクスチャを使用してスプライトを作成
        this.sprite = this.scene.matter.add.sprite(x, y, 'blockTexture', undefined, {
            isStatic: true
        });
    }

    public getSprite(): Phaser.Physics.Matter.Sprite {
        return this.sprite;
    }
}
