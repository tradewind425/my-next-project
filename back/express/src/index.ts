// src/index.ts の先頭に追加
import 'dotenv/config';

import express from 'express';

const app = express();
const port = process.env.PORT || 3000; // .envファイルからPORTを読み込む、デフォルトは3000

app.get('/', (req, res) => {
  res.send('Hello World!!!!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
