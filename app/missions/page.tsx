import Link from "next/link";
import { redirect } from "next/navigation";
import { getSessionUuid } from "@/lib/session";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { missions } from "@/lib/missions";

type MissionStatus = { mission_idx: number; is_cleared: boolean; who: string | null; when: string | null };

export default async function MissionList() {
  if (!(await getSessionUuid())) redirect("/");
  const { data, error } = await getSupabaseAdmin().from("missions").select("mission_idx,is_cleared,who,when");
  if (error) throw new Error(error.message);
  const statuses = (data as MissionStatus[] | null) ?? [];
  const byIndex = new Map(statuses.map((status) => [status.mission_idx, status]));
  return <main><header className="header"><div><div className="brand">15 ミッション一覧</div><div className="meta"></div></div></header><div className="grid">{missions.map((mission) => { const status = byIndex.get(mission.index); return <Link className="mission" href={`/missions/${mission.index}`} key={mission.index}><strong>{mission.title}</strong><div className={status?.is_cleared ? "status cleared" : "status"}>{status?.is_cleared ? "✓ クリア済" : "未クリア"}</div></Link>; })}</div></main>;
}
