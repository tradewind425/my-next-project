import Phaser from 'phaser';

export class TitleScene extends Phaser.Scene {
  constructor() {
    super('TitleScene');
  }

  create() {
    this.cameras.main.setBackgroundColor('#242424'); // モダンな背景色
    const titleStyle: Phaser.Types.GameObjects.Text.TextStyle = {
      font: 'bold 30px Arial',
      color: '#ffffff',
    };
    // タイトルテキストを画面中央に表示
    this.add.text(this.cameras.main.centerX, 150, 'ブロック崩しゲーム', titleStyle).setOrigin(0.5);

    // ボタンを作成する関数
    const createButton = (text: string, y: number, callback: () => void) => {
      const button = this.add.text(this.cameras.main.centerX, y, text, {
        font: '32px Arial',
        color: '#ffffff',
        backgroundColor: '#00796b',
        padding: { left: 20, right: 20, top: 10, bottom: 10 },
      })
      .setInteractive({ useHandCursor: true })
      .setOrigin(0.5);

      button.on('pointerover', () => button.setStyle({ backgroundColor: '#004d40' }));
      button.on('pointerout', () => button.setStyle({ backgroundColor: '#00796b' }));
      button.on('pointerdown', callback);
    };

    // ゲームスタートボタン
    createButton('ゲームスタート', this.cameras.main.centerY - 100, () => {
      // グローバル変数を参照して、物理エンジンの状態に応じたシーンを起動
      const physicsEngineType = window.gamePhysicsEngineType;
      console.log("TitleScene で参照された物理エンジンタイプ: ", window.gamePhysicsEngineType);
      const nextScene = physicsEngineType === 0 ? 'GameScene_0' : 'GameScene_1';
      this.scene.start(nextScene);
    });

    // オプションボタン
    createButton('オプション', this.cameras.main.centerY, () => console.log('オプション'));
    // クレジットボタン
    createButton('クレジット', this.cameras.main.centerY + 100, () => console.log('クレジット'));
  }
}
