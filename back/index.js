require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();

// 基本的なセキュリティ向上のためのHelmetの使用
app.use(helmet());

// CORSの設定
app.use(cors());

// リクエストのbodyを解析するためのBody-parserの使用
app.use(bodyParser.json());

// リクエストレートの制限（基本的なDDoS攻撃対策）
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15分
  max: 100 // 15分間に100リクエストまで
});
app.use(limiter);

// シンプルなGETリクエストのルーティング
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// サーバーの起動
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
