import { ArcadeBall, MatterBall } from './dynamicEntities/ball';
import Phaser from 'phaser';

// ArcadeBall を継承して Ball_0 を定義
export class Ball_0 extends ArcadeBall {
    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y);
    }

    // ここに Ball_0 特有のメソッドやプロパティを追加
}

// MatterBall を継承して Ball_1 を定義
export class Ball_1 extends MatterBall {
    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y);
    }

    // ここに Ball_1 特有のメソッドやプロパティを追加
}

