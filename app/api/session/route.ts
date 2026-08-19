import { NextResponse } from "next/server";
import { setSession } from "@/lib/session";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export async function POST(request: Request) {
  const formData = await request.formData();
  const nickname = String(formData.get("nickname") ?? "").trim();
  if (!nickname) return NextResponse.json({ error: "ニックネームを入力してください。" }, { status: 400 });
  const supabase = getSupabaseAdmin();
  const { data: participant, error } = await supabase.from("participants").insert({ nickname }).select("uuid").single();
  if (error || !participant) {
    console.error("Participant registration failed:", error);
    return NextResponse.json({
      error: process.env.NODE_ENV === "development" && error
        ? `参加者の登録に失敗しました: ${error.message}`
        : "参加者の登録に失敗しました。",
    }, { status: 500 });
  }
  await setSession(participant.uuid);
  return NextResponse.json({ ok: true });
}
