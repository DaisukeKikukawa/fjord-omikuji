#!/usr/bin/env node
"use strict";

const sentences = [
  [
    "大吉",
    "GitHub Sponsors を通じて太っ腹なスポンサーがつきます。これであなたの OSS 開発は安泰です!!",
    "Python",
    "SQL Server",
    "nano",
  ],
  [
    "大吉",
    "プラクティスの提出物でLGTMがもらえました！今日はぐっすり眠れますね！",
    "Ruby",
    "MongoDB",
    "Emacs.",
  ],
  [
    "吉",
    "リファクタリングに成功してプログラムが爆速に!! サクサク動いて気持ちいいーーー!!",
    "TypeScript",
    "DB2",
    "Emacs",
  ],
  [
    "吉",
    "チェリー峰輪読会に参加しましょう。Rubyの理解が深まります！！",
    "Ruby",
    "Microsoft Access",
    "Vim",
  ],
  [
    "中吉",
    "プラクティスの提出物に深刻なバグが見つかりますが、デバックのおかげで事無きを得るでしょう。ただし、後日ブログにしっかりと原因を書いておきましょう。",
    "C++",
    "SQL Server",
    "Emacs",
  ],
  [
    "中吉",
    "今日は集中力が続かないので、プラクティスを早めに切り上げリフレッシュしましょう！",
    "Kotlin",
    "SQLite",
    "サクラエディタ",
  ],
  [
    "小吉",
    "チーム開発でリリース前の新機能にバグが見つかります。",
    "C++",
    "DB2",
    "Emacs",
  ],
  [
    "末吉",
    "チーム開発でリリース直前に致命的なバグが見つかるでしょう。徹夜の準備をして出社するのが吉でしょう。",
    "Ruby",
    "PostgreSQL",
    "Atom",
  ],
  [
    "凶",
    "リリースした自作サービスに致命的な欠陥が見つかり、それが原因でユーザーの機密情報が派手に流出します",
    "PHP",
    "Oracle Database",
    "Atom",
  ],
];

async function main() {
  const { Confirm } = require("enquirer");

  const prompt = new Confirm({
    name: "question",
    message: "本日1回目のおみくじですよね？",
  });

  await prompt
    .run()
    .then((answer) => {
      if (answer) {
        console.log("それでは今日の占いを始めます！");
        setTimeout(selectSentences, 2000);
      } else {
        console.log("おみくじは１日一回にしましょう！");
      }
    })
    .catch(console.error);
}

async function selectSentences() {
  const elementNumber = getRandom(0, sentences.length);
  console.log("本日の運勢は" + sentences[elementNumber][0] + "です");
  console.log(sentences[elementNumber][1]);
  console.log("本日のラッキー言語は" + sentences[elementNumber][2] + "です");
  console.log(
    "本日のラッキーデータベースは" + sentences[elementNumber][3] + "です"
  );
  console.log(
    "本日のラッキーエディタは" + sentences[elementNumber][4] + "です"
  );
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

main();
