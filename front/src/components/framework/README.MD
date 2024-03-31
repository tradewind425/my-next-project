ブロック崩し

プロジェクトルート
│
├── pages
│   ├── _app.tsx
│   ├── index.tsx
│   └── breakOut.tsx  // ブロック崩しゲームのページ
│
├── src
│   ├── components
│   │   └── breakOut
│   │       ├── BreakOutGame.tsx  // PhaserゲームのReactコンポーネント
│   │       └── scenes
│   │           ├── GameScene.ts //ゲームのメインシーン
│   │           └── PreloadScene.ts  // ゲームのプリロードシーン
│   │           └── TitleScene.ts  // ゲームのタイトルシーン
│   │           
│   │
│   └── styles
│       └── Home.module.css  // スタイルシート（必要に応じて）
│
├── public
│   ├── assets  // ゲームアセット（画像やサウンドファイルなど）を格納
│   
├── package.json
└── tsconfig.json
