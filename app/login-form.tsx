"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter(); const [error, setError] = useState(""); const [pending, setPending] = useState(false);
  async function submit(formData: FormData) {
    setError(""); setPending(true);
    const response = await fetch("/api/session", { method: "POST", body: formData });
    const data = await response.json(); setPending(false);
    if (!response.ok) return setError(data.error ?? "ログインできませんでした。");
    router.push("/missions"); router.refresh();
  }
  return <form action={submit}><label htmlFor="nickname">ニックネーム</label><input id="nickname" name="nickname" required maxLength={80} autoComplete="nickname" />{error && <p className="error">{error}</p>}<div className="actions"><button disabled={pending}>{pending ? "登録中…" : "この名前で参加する"}</button></div></form>;
}
