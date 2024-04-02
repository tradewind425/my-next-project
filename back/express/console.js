const http = require('http');

// 標準入力を設定
process.stdin.setEncoding('utf8');
console.log('Enter "ping" to send a ping request or "fetch" to retrieve data from MongoDB:');

process.stdin.on('readable', () => {
  let chunk;
  // ループで入力を読み込む
  while ((chunk = process.stdin.read()) !== null) {
    const input = chunk.trim();
    if (input === 'ping') {
      // 'ping'が入力されたらHTTPリクエストを送る
      http.get('http://localhost:5173/ping', (res) => {
        res.on('data', (body) => {
          console.log('Response:', body.toString());
        });
      }).on('error', (e) => {
        console.error(`Got error: ${e.message}`);
      });
    } else if (input === 'fetch') {
      // 'fetch'が入力されたら、MongoDBからデータを取得するためのHTTPリクエストを送る
      http.get('http://localhost:5173/data', (res) => {
        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });
        res.on('end', () => {
          console.log('Response:', data);
        });
      }).on('error', (e) => {
        console.error(`Got error: ${e.message}`);
      });
    } else {
      console.log('Enter "ping" to send a ping request or "fetch" to retrieve data from MongoDB:');
    }
  }
});
