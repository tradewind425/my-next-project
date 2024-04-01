/backend
    /api
        - **Express**アプリケーション
        - **Helmet**を使用したHTTPヘッダーのセキュリティ強化
        - **Apollo Server?**
        - CORS設定
        - レートリミット設定
        - JWTによる認証機能
        - パスワードのハッシュ化 (bcrypt)
    /strapi(CMS)
        - Strapiプロジェクト
        - ロールベースのアクセスコントロール
        - 安全なAPIエンドポイントの提供
    /security
        - **OWASP Dependency Check**の設定ファイル
    /models
        - データモデル (セキュリティを考慮した設計)
    /services
        - ビジネスロジックとセキュリティサービス
    /middlewares
        - セキュリティ強化ミドルウェア


必要なパッケージ

    Express関連パッケージ
        express: Expressフレームワーク本体
        cors: クロスオリジンリソース共有(CORS)設定用のミドルウェア
        helmet: HTTPヘッダーのセキュリティ強化用のミドルウェア
        express-rate-limit: リクエストのレートリミットを設定するミドルウェア
        body-parser: リクエストボディの解析用ミドルウェア

    認証・セキュリティ関連パッケージ
        jsonwebtoken: JWT認証に使用
        bcrypt: パスワードハッシュ用
        passport: 認証用ミドルウェア
        passport-jwt: JWTを使用したPassport戦略
        passport-local: ローカル認証戦略

    Strapi
        Strapiのインストールには特定のNPMパッケージをインストールするのではなく、CLIを使用してプロジェクトを作成します。
        npx create-strapi-app my-project --quickstart (新規プロジェクト作成時)
        Strapiのプラグインや依存関係はプロジェクト作成後にpackage.jsonを通して管理されます。

    その他ユーティリティ
        dotenv: 環境変数を管理
        nodemon: 開発中の自動再起動ツール