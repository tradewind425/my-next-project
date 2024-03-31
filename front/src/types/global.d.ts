// global.d.ts

// TypeScript の既存の Window インターフェースに対する拡張を宣言します。
// この拡張により、window オブジェクトにカスタムプロパティとして
// gamePhysicsEngineType を安全に追加できるようになります。
interface Window {
  // gamePhysicsEngineType は、アプリケーションで使用される物理エンジンのタイプを
  // 保持するプロパティです。0 または 1 の値を持ち、これによって
  // 異なる物理エンジンの動作が選択されます。
  gamePhysicsEngineType: number;
}
