"use client";
import { useRouter } from "next/navigation";
export default function LogoutButton() { const router = useRouter(); return <button className="secondary" onClick={async () => { await fetch("/api/session", { method: "DELETE" }); router.push("/"); router.refresh(); }}>ログアウト</button>; }
