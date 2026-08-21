import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { getSessionUuid } from "@/lib/session";
import { getMission } from "@/lib/missions";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import AnswerForm from "./answer-form";

export default async function MissionPage({
  params,
}: {
  params: Promise<{ missionIdx: string }>;
}) {
  if (!(await getSessionUuid())) {
    redirect("/");
  }

  const index = Number((await params).missionIdx);
  const mission = getMission(index);

  if (!mission) {
    notFound();
  }

  const { data: status, error } = await getSupabaseAdmin()
    .from("missions")
    .select("is_cleared, who, when")
    .eq("mission_idx", index)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  let clearerNickname: string | null = null;

  if (status?.is_cleared && status.who) {
    const { data: clearer } = await getSupabaseAdmin()
      .from("participants")
      .select("nickname")
      .eq("uuid", status.who)
      .maybeSingle();

    clearerNickname = clearer?.nickname ?? null;
  }

  return (
    <main>
      <Link className="back" href="/missions">
        ← ミッション一覧へ
      </Link>

      <article className="card" style={{ marginTop: "16px" }}>
        <h1>{mission.title}</h1>

        <p style={{ whiteSpace: "pre-wrap", lineHeight: 1.7 }}>
          {mission.description}
        </p>

        {mission.image && (
          <img
            className="mission-image"
            src={mission.image}
            alt={`${mission.title} の画像`}
          />
        )}

        <section>
          <h2>クリア状況</h2>

          {status?.is_cleared ? (
            <>
              <p className="cleared">クリア済み</p>
              <p className="meta">
                クリアした人: {clearerNickname ?? "匿名"}
                {status.when
                  ? ` / ${new Date(status.when).toLocaleString("ja-JP")}`
                  : ""}
              </p>
            </>
          ) : (
            <p>未クリア</p>
          )}
        </section>

        {mission.answerType !== "none" && (
          <AnswerForm
            missionIdx={index}
            needsReason={mission.answerType === "answer-and-reason"}
          />
        )}
      </article>
    </main>
  );
}