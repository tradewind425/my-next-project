// src/index.ts の先頭に追加
import 'dotenv/config';

import express from 'express';

const app = express();
const port = process.env.PORT || 3000; // .envファイルからPORTを読み込む、デフォルトは3000

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hello World</title>
    </head>
    <body>
      <h1>Hello World!!!!</h1>
      <script>
        console.log('Hello World!!!!');
      </script>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
