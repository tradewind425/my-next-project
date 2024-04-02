// vite.config.ts
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  // 既存の設定...

  build: {
    rollupOptions: {
      // Rollupのオプション
      external: [
        // ここにビルドから除外したいパスやモジュール名を指定
        path.resolve(__dirname, 'strapi/**')
      ]
    }
  }
});