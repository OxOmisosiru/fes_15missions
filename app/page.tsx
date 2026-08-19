import { redirect } from "next/navigation";
import { getSessionUuid } from "@/lib/session";
import LoginForm from "./login-form";

export default async function Home() {
  if (await getSessionUuid()) redirect("/missions");
  return <main><div className="card" style={{ maxWidth: "480px", margin: "10vh auto" }}><h1>Mission App</h1><p className="meta">最初にニックネームを登録してください。</p><LoginForm /></div></main>;
}
