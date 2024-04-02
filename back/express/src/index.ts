import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/test')
  .then(() => console.log('MongoDBに接続しました。'))
  .catch(err => console.error('MongoDBへの接続に失敗しました。', err));

app.get('/ping', (req, res) => {
  res.send('pong!pong!');
});

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
        console.log('Hello World!!');
      </script>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
