import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import { Example } from '../models/Example'; // ここでExampleモデルをインポートします

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/test')
  .then(() => console.log('MongoDBに接続しました。'))
  .catch(err => console.error('MongoDBへの接続に失敗しました。', err));

//Expressローカルにアクセスしたときのコンテンツ
  app.get('/', (req, res) => {
    res.send('Hello World!!!!');
  });

//ping pong 反応(HTTPリクエスト)
  app.get('/ping', (req, res) => {
  res.send('pong!pong!');
});

//MongoDBからフェッチ(HTTPリクエスト)
app.get('/data', async (req, res) => {
    try {
      const examples = await Example.find();
      res.json(examples);
    } catch (err) {
      res.status(500).send('An error occurred');
    }
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
