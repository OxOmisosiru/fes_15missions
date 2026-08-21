import "./globals.css";
import { getSessionUuid } from "@/lib/session";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export const metadata = {
  title: "15",
  description: "常設型コンテンツ『15』進行アプリ",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sessionUuid = await getSessionUuid();

  let nickname: string | null = null;

  if (sessionUuid) {
    const { data: participant } = await getSupabaseAdmin()
      .from("participants")
      .select("nickname")
      .eq("uuid", sessionUuid)
      .maybeSingle();

    nickname = participant?.nickname ?? null;
  }

  return (
    <html lang="ja">
      <body>
        {nickname && (
          <div className="user-nickname">
            {nickname}
          </div>
        )}

        {children}
      </body>
    </html>
  );
}