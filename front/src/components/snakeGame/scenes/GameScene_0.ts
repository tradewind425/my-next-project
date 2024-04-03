import Phaser from 'phaser';

export class GameScene extends Phaser.Scene {
    private snake!: Phaser.GameObjects.Text[];
    private food!: Phaser.GameObjects.Text;
    private direction: 'up' | 'down' | 'left' | 'right' = 'right';
    private score = 0;
    private scoreText!: Phaser.GameObjects.Text;

    constructor() {
        super({ key: 'GameScene' });
    }

    create(): void {
        this.snake = [
            this.add.text(400, 300, '◆', { fontSize: '24px' }),
        ];

        this.food = this.add.text(0, 0, '・', { fontSize: '24px' });
        this.positionFood();

        this.scoreText = this.add.text(10, 10, 'Score: 0', { fontSize: '18px' });

        this.input.keyboard.on('keydown', this.handleInput, this);

        this.time.addEvent({
            delay: 100,
            callback: this.moveSnake,
            callbackScope: this,
            loop: true,
        });
    }

    private handleInput(event: KeyboardEvent): void {
        if (event.key === 'ArrowUp' && this.direction !== 'down') {
            this.direction = 'up';
        } else if (event.key === 'ArrowDown' && this.direction !== 'up') {
            this.direction = 'down';
        } else if (event.key === 'ArrowLeft' && this.direction !== 'right') {
            this.direction = 'left';
        } else if (event.key === 'ArrowRight' && this.direction !== 'left') {
            this.direction = 'right';
        }
    }

    private moveSnake(): void {
        const head = this.snake[0];
        let newX = head.x;
        let newY = head.y;

        if (this.direction === 'up') {
            newY -= 24;
        } else if (this.direction === 'down') {
            newY += 24;
        } else if (this.direction === 'left') {
            newX -= 24;
        } else if (this.direction === 'right') {
            newX += 24;
        }

        if (this.isCollision(newX, newY)) {
            this.gameOver();
            return;
        }

        const newHead = this.add.text(newX, newY, '◆', { fontSize: '24px' });
        this.snake.unshift(newHead);

        if (newHead.x === this.food.x && newHead.y === this.food.y) {
            this.score += 10;
            this.scoreText.setText(`Score: ${this.score}`);
            this.positionFood();
        } else {
            const tail = this.snake.pop()!;
            tail.destroy();
        }

        for (let i = 1; i < this.snake.length; i++) {
            this.snake[i].setText('◇');
        }
    }

    private positionFood(): void {
        const x = Phaser.Math.Between(0, 800);
        const y = Phaser.Math.Between(0, 600);
        this.food.setPosition(x, y);
    }

    private isCollision(x: number, y: number): boolean {
        if (x < 0 || x >= 800 || y < 0 || y >= 600) {
            return true;
        }

        for (let i = 1; i < this.snake.length; i++) {
            if (this.snake[i].x === x && this.snake[i].y === y) {
                return true;
            }
        }

        return false;
    }

    private gameOver(): void {
        this.scene.pause();
        this.add.text(400, 300, 'Game Over', { fontSize: '48px' }).setOrigin(0.5);
    }
}
