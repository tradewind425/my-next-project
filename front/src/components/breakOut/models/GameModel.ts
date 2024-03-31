import { Ball } from './dynamicEntities/ball';
import { Paddle } from './dynamicEntities/paddle';
import { Block } from './staticEntities/block'; // Block のインポート
import Phaser from 'phaser';

// Ball クラスを継承した StandardBall を追加
export class StandardBall extends Ball {
    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y);
    }
}

// Paddle クラスを継承した StandardPaddle を追加
export class StandardPaddle extends Paddle {
    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y);
    }
}

// Block クラスを継承した StandardBlock を追加
export class StandardBlock extends Block {
    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y); // コンストラクタの引数に応じて調整
    }
    // Block クラスのメソッドやプロパティをそのまま継承し、オーバーライドは行わない
}
