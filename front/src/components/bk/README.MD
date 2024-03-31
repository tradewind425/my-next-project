my-game-project/
│
├── project/
│   ├── assets/              # ゲームのアセット（画像、音声ファイルなど）
│   │
│   ├── models/              # ゲームロジックと状態を管理するモデル
│   │   ├── GameModel.ts     # ゲームの主要な状態やロジック
│   │   └── entities/        # ゲーム内エンティティ（静的なものと動的なものに分ける）
│   │       ├── Player.ts
│   │       ├── Enemy.ts
│   │       └── ...
│   │
│   ├── scenes/              # Phaserのシーン管理
│   │   ├── BootScene.ts     # ゲームの初期化とアセットのロードを担当
│   │   ├── MainMenuScene.ts # メインメニュー画面
│   │   ├── GameScene.ts     # ゲームプレイ本体を扱うシーン
│   │   └── GameOverScene.ts # ゲームオーバー画面
│   │
│   ├── views/               # UIコンポーネントとレンダリングロジック
│   │   ├── GameView.ts      # ゲームの主要なビュー
│   │   └── components/      # 再利用可能なUIコンポーネント
│   │       ├── Button.ts
│   │       ├── ScoreBoard.ts
│   │       └── ...
│   │
│   ├── controllers/         # ユーザー入力とモデル間の相互作用を管理
│   │   └── GameController.ts
│   │
│   ├── states/              # ゲームの各状態を管理する状態マシン
│   │   ├── StateMachine.ts  # 状態マシンのコアロジック
│   │   ├── StartState.ts
│   │   ├── PlayState.ts
│   │   ├── PauseState.ts
│   │   └── GameOverState.ts
│   │
│   ├── utils/               # 汎用的なユーティリティ関数やヘルパークラス
│   │
│   └── main.ts              # アプリケーションのエントリーポイント、Phaserゲームインスタンスの初期化
│
├── public/                  # HTMLファイルやビルドされたJSファイル
│
├── package.json             # プロジェクトの依存関係とスクリプト
└── tsconfig.json            # TypeScriptのコンパイル設定