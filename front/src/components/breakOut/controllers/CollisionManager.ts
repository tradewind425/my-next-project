import Phaser from 'phaser';
import { gameStore } from '../store/GameStore'; // 正しいパスに修正してください
import { setTotalBlocks } from '../store/BlockCountSlice'; // 正しいパスに修正してください

export class CollisionManager {
    constructor(private scene: Phaser.Scene) {
        this.setupCollisionListener();
    }

    private setupCollisionListener(): void {
        this.scene.matter.world.on('collisionstart', (event) => {
            event.pairs.forEach(({ bodyA, bodyB }) => {
                const handleBlockCollision = (body) => {
                    if (body.collisionFilter.category & 0x0002 && body.gameObject?.getData('type') === 'block') {
                        body.gameObject.destroy();
                        // ブロックが破壊されたことをGameSceneに通知
                        this.scene.events.emit('blockDestroyed');
                        // ストアのブロック総数をデクリメント
                        const currentTotalBlocks = gameStore.getState().blockCount.totalBlocks - 1;
                        gameStore.dispatch(setTotalBlocks(currentTotalBlocks));
                    }
                };

                // 各衝突体に対して処理を行う
                handleBlockCollision(bodyA);
                handleBlockCollision(bodyB);
            });
        });
    }
}
