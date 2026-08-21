export type AnswerType = "answer-and-reason" | "answer" | "none";

export type MissionDefinition = {
  index: number;
  title: string;
  description: string;
  image?: string;
  answerType: AnswerType;
};

const answerTypes: Record<number, AnswerType> = {
  1: "answer-and-reason",
  3: "answer",
  5: "answer",
  10: "answer",
  12: "answer",
};

export const missions: MissionDefinition[] = [
  {
    index: 1,
    title: "Mission 1: One Piece",
    description: "クリア条件：画像の問題に誰かが正解すること\n\n解答はこのページから送信してください。受付では対応しません。\nまた解答過程も簡潔に記入してください。このミッションでは勘での正解は認められません。",
    image: "/missions/15_onepiece.png",
    answerType: "answer-and-reason",
  },
  {
    index: 2,
    title: "Mission 2: Matching",
    description: "クリア条件：全ての条件が1組ずつのペアによって達成されること\n\nどれかが一致していると思ったペアは受付までお越しください。\n\n条件は\n・MBTI (https://www.16personalities.com/ja/) が一致していること\n・身長が一致していること（誤差 1cm 以内）\n・血液型が一致していること（自己申告）\n・視力が一致していること\n・持っている飲み物が一致していること\n・恰好が一致していること（上の色と下の色がそれぞれ両者で一致していること）\n・朝ごはんが一致していること",
    image: "/missions/15_matching.png",
    answerType: "none",
  },
  {
    index: 3,
    title: "Mission 3: Italian",
    description: "このミッションの詳細はフェス 2 日目 8/23(日) の 10:00 に公開されます。",
    image: "",
    answerType: "none",
  },
  {
    index: 4,
    title: "Mission 4: Quartet",
    description: "クリア条件：Web型ギルド戦謎解き『Quartet』がどこかのギルドによってクリアされること\n\n『Quartet』の詳細・注意事項は https://x.com/ENIG_ROID/status/2087524510568431629 とそのリプライを参照してください。\n出題サイトはこちら https://www.enig-roid.com/enigma_quartet/",
    image: "",
    answerType: "none",
  },
  {
    index: 5,
    title: "Mission 5: 五分五分",
    description: "クリア条件：まとめ謎に正解すること\n\nTwitter(現X)(@15missions) 上の投票によって、一枚謎の二分割のうちどちらが与えられるかが決定されます。\n二分割された後の謎は受付付近にて掲示します。\n解答判定はまとめ謎のみ行います。まとめ謎の解答が分かったらこのページにて送信してください",
    image: "",
    answerType: "answer",
  },
  {
    index: 6,
    title: "Mission 6: Dice",
    description: "クリア条件：受付にあるサイコロ 6 個を振り、ゾロ目で揃えること\n\n揃った場合はそのまま触らず受付に報告してください。確認いたします。\nその他の注意事項は画像を参照してください。\n※こちらは非常にストレスがたまる可能性のあるコンテンツです。",
    image: "/missions/15_dice.png",
    answerType: "none",
  },
  {
    index: 7,
    title: "Mission 7: Picking",
    description: "クリア条件：受付にある鍵を全て開けること\n\n①、②、③それぞれにおいて、全て開いた場合は受付へ報告してください。\n※こちらは非常にストレスがたまる可能性のあるコンテンツです。",
    image: "",
    answerType: "none",
  },
  {
    index: 8,
    title: "Mission 8: Wonderful Summers DON'T Last Anymore.",
    description: "クリア条件：受付にある夏休みの宿題を全て終わらせること\n\n全て完了したら受付へ報告してください。確認いたします。",
    image: "/missions/15_summer.png",
    answerType: "none",
  },
  {
    index: 9,
    title: "Mission 9: switch and",
    description: "クリア条件：ブース型謎解きゲーム『switch and』をクリアすること\n\nクリアしたら受付へ報告してください。",
    image: "",
    answerType: "none",
  },
  {
    index: 10,
    title: "Mission 10: Flash",
    description: "クリア条件：開場時間中にステージ上のスクリーンに表示される 10 個の 4 桁の整数を全て足し合わせること\n\nステージ企画中には表示されませんのでご安心ください。解答はこのページで行ってください。",
    image: "",
    answerType: "answer",
  },
  {
    index: 11,
    title: "Mission 11: 〇ッ〇ーしようぜ！",
    description: "クリア条件：以下の画像の指示を実際に実行すること\n\n",
    image: "/missions/15_shiyouze.png",
    answerType: "none",
  },
  {
    index: 12,
    title: "Mission 12: o'clock",
    description: "クリア条件：8/22 10:00から 8/23 19:00 の間の12時から1時間ほどに、受付で掲示される謎を解き、「o'clock」の解答を導くこと\n\n",
    image: "",
    answerType: "none",
  },
  {
    index: 13,
    title: "Mission 13: Betrayer",
    description: "クリア条件：以下の30人に聞き込みをして、あるレースにおけるそれぞれのメンバーの順位を特定し受付で報告すること\n\nA.I.\nコーチョー\n直角\nsmi\nグマ\ntomato\nなぬ\nはてなぞ\nyahamasa\nりょう\nおぉ味噌汁\nRILD\nいっちー\nｎ型半導体\nリリバモリウム\nこがらし\nت74\n真\nしば\nふじみ\nどるみーる\nゐぬ娘。\nKy'3\nりんご\n逆凪\nリア\nきりけも\nながりゅう\n盈月\nShige\n\n1人だけ嘘をついている人物がいます。それ以外の人は全員本当のことを言っています。\n公演中のスタッフには聞き込みをしないでください。",
    image: "",
    answerType: "none",
  },
  {
    index: 14,
    title: "Mission 14: Variants",
    description: "クリア条件：受付にあるヴァリアンツリドルジェネレータ（VRG）を使って作った謎を #エニグロVRG を付けてXに投稿し、50 問以上の謎に正解のリプライが吊るされること\n\n注意事項などは以下の画像を参照してください。",
    image: "/missions/15_variants.png",
    answerType: "none",
  },
  {
    index: 15,
    title: "Mission 15: ???????",
    description: "",
    image: "",
    answerType: "none",
  },
];

export function getMission(index: number) {
  return missions.find((mission) => mission.index === index);
}
