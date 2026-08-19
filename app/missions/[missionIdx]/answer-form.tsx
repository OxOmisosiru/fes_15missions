"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function AnswerForm({ missionIdx, needsReason }: { missionIdx: number; needsReason: boolean }) {
  const router = useRouter(); const [message, setMessage] = useState(""); const [error, setError] = useState(""); const [pending, setPending] = useState(false);
  async function submit(formData: FormData) { setPending(true); setMessage(""); setError(""); const response = await fetch(`/api/missions/${missionIdx}/answers`, { method: "POST", body: formData }); const data = await response.json(); setPending(false); if (!response.ok) return setError(data.error ?? "送信できませんでした。"); setMessage("解答を送信しました。"); router.refresh(); }
  return <section style={{ marginTop: "30px", borderTop: "1px solid var(--line)", paddingTop: "12px" }}><h2>解答を送信</h2><form action={submit}><label htmlFor="answer">解答</label><textarea id="answer" name="answer" required maxLength={5000} />{needsReason && <><label htmlFor="reason">理由</label><textarea id="reason" name="reason" required maxLength={5000} /></>}{error && <p className="error">{error}</p>}{message && <p className="notice">{message}</p>}<div className="actions"><button disabled={pending}>{pending ? "送信中…" : "送信する"}</button></div></form></section>;
}
