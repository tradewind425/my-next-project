const http = require('http');

// 標準入力を設定
process.stdin.setEncoding('utf8');
console.log('Enter "ping" to send a ping request:');

process.stdin.on('readable', () => {
  let chunk;
  // ループで入力を読み込む
  while ((chunk = process.stdin.read()) !== null) {
    if (chunk.trim() === 'ping') {
      // pingが入力されたらHTTPリクエストを送る
      http.get('http://localhost:5173/ping', (res) => {
        res.on('data', (body) => {
          console.log('Response:', body.toString());
        });
      }).on('error', (e) => {
        console.error(`Got error: ${e.message}`);
      });
    } else {
      console.log('Enter "ping" to send a ping request:');
    }
  }
});
