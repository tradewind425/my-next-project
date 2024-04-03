const http = require('http');

// HTTPリクエストを送る関数
function sendHttpRequest(path, callback) {
  http.get(`http://localhost:5173${path}`, (res) => {
    let responseData = '';
    res.on('data', (chunk) => {
      responseData += chunk;
    });
    res.on('end', () => {
      callback(null, responseData);
    });
  }).on('error', (error) => {
    callback(error, null);
  });
}

// 入力に応じてアクションを実行する関数
function handleInput(input) {
  switch (input) {
    case 'ping':
      sendHttpRequest('/ping', (error, data) => {
        if (error) {
          console.error(`Got error: ${error.message}`);
          return;
        }
        console.log('Response:', data.toString());
      });
      break;
    case 'fetch':
      sendHttpRequest('/data', (error, data) => {
        if (error) {
          console.error(`Got error: ${error.message}`);
          return;
        }
        console.log('Response:', data);
      });
      break;
    default:
      console.log('Enter "ping" to send a ping request or "fetch" to retrieve data from MongoDB:');
      break;
  }
}

// 標準入力を設定
process.stdin.setEncoding('utf8');
console.log('Enter "ping" to send a ping request or "fetch" to retrieve data from MongoDB:');

process.stdin.on('readable', () => {
  let chunk;
  while ((chunk = process.stdin.read()) !== null) {
    const input = chunk.trim();
    handleInput(input);
  }
});
