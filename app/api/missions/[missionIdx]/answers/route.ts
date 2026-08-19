import { NextResponse } from "next/server";
import { getMission } from "@/lib/missions";
import { getSessionUuid } from "@/lib/session";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export async function POST(request: Request, { params }: { params: Promise<{ missionIdx: string }> }) {
  const uuid = await getSessionUuid();
  if (!uuid) return NextResponse.json({ error: "ログインが必要です。" }, { status: 401 });
  const index = Number((await params).missionIdx); const mission = getMission(index);
  if (!mission || mission.answerType === "none") return NextResponse.json({ error: "このミッションはWebから解答できません。" }, { status: 400 });
  const formData = await request.formData(); const answer = String(formData.get("answer") ?? "").trim(); const reason = String(formData.get("reason") ?? "").trim();
  if (!answer || (mission.answerType === "answer-and-reason" && !reason)) return NextResponse.json({ error: "必須項目を入力してください。" }, { status: 400 });
  const ans = mission.answerType === "answer-and-reason" ? [answer, reason] : [answer];
  const { error } = await getSupabaseAdmin().from("answers").insert({ mission_idx: index, who: uuid, ans });
  if (error) return NextResponse.json({ error: "解答の保存に失敗しました。" }, { status: 500 });
  return NextResponse.json({ ok: true });
}
