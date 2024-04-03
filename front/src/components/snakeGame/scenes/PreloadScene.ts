// src/components/breakOut/scenes/PreloadScene.ts
import Phaser from 'phaser';

export class PreloadScene extends Phaser.Scene {
  constructor() {
    super('PreloadScene');
  }

  preload() {
    // 今回はアセットをロードしないが、将来的にアセットが必要になった場合のための準備
  }

  create() {
    // ロードが完了したらタイトルシーンへ遷移
    this.scene.start('TitleScene');
  }
}
