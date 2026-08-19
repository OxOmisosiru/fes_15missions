# Mission Web App

Supabase を使うミッション管理アプリです。Mission 1 は解答と理由、Mission 3・5・10・12 は解答のみを送信できます。

## 初期設定

1. Supabase の SQL Editor で `supabase/schema.sql` を実行します。
2. `.env.example` をコピーして `.env.local` を作り、Supabase URL・Service Role Key・十分長い `SESSION_SECRET` を設定します。
3. `participants` に参加者（ニックネームとパスワード）を登録します。
4. 依存関係をインストールし、開発サーバーを起動します。

```bash
npm install
npm run dev
```

ミッションの本文は `lib/missions.ts`、画像は `public/missions/` を差し替えてください。解答送信は `answers.ans` に保存され、Mission 1 は `[解答, 理由]`、他は `[解答]` です。

正解判定は未実装です。運営側が `missions` の `is_cleared`、`who`、`when` を更新すると、画面にクリア状況が表示されます。
