import "./globals.css";

export const metadata = { title: "15", description: "常設型コンテンツ『15』進行アプリ" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>;
}
