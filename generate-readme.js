import fs from "fs";
import path from "path";
import fetch from "node-fetch"; // npm install node-fetch 필요

// 📁 현재 위치: Algorhythm_Study
const baseDir = "./BaekJoon/solutions";
const readmePath = "./README.md";
const tiers = ["Bronze", "Silver", "Gold"];

// solved.ac 문제 정보 가져오기
async function getProblemInfo(problemNum) {
  const res = await fetch(`https://solved.ac/api/v3/problem/show?problemId=${problemNum}`);
  if (!res.ok) return { title: problemNum, level: "-", tags: [] };

  const data = await res.json();
  const title = data.titleKo || problemNum;
  const level = convertLevel(data.level);
  const tags = (data.tags || [])
    .map(tag => tag.displayNames.find(d => d.language === "en")?.name || tag.key)
    .join(", ");
  return { title, level, tags };
}

// solved.ac 레벨 변환 함수
function convertLevel(levelNum) {
  const tiers = ["Bronze", "Silver", "Gold", "Platinum", "Diamond", "Ruby"];
  if (levelNum === 0) return "-";
  const tier = tiers[Math.floor((levelNum - 1) / 5)];
  const rank = 5 - ((levelNum - 1) % 5);
  return `${tier} ${rank}`;
}

// 난이도별 표 생성
async function generateTable(dirPath, tierName) {
  if (!fs.existsSync(dirPath)) return "| No files | | | | |\n";
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith(".js"));
  if (files.length === 0) return "| No files | | | | |\n";

  let table = "| Idx (No) | Problem | Level | Solution | Category |\n";
  table += "|:---------:|:-------------------:|:------:|:---------:|:---------:|\n";

  for (const file of files) {
    const problemNum = file.split(".")[0];
    const { title, level, tags } = await getProblemInfo(problemNum);
    table += `| ${problemNum} | [${title}](https://www.acmicpc.net/problem/${problemNum}) | ${level} | [코드 보기](./BaekJoon/solutions/${tierName}/${file}) | ${tags} |\n`;
  }

  return table;
}

// 전체 README 생성
async function main() {
  let readme = `# BaekJoon\n`;

  for (const tier of tiers) {
    const dirPath = path.join(baseDir, tier);
    const table = await generateTable(dirPath, tier);

     // 아이콘을 tier에 따라 다르게 표시
    const medal =
      tier === "Bronze" ? "🥉" :
      tier === "Silver" ? "🥈" :
      tier === "Gold" ? "🥇" : "⭐";
    readme += `
###  ${medal} ${tier}

<details>
<summary> 문제 목록 펼치기 / 접기 </summary>
  
${table}

</details>

`;
  }

  fs.writeFileSync(readmePath, readme.trim());
  console.log("✅ README.md 자동 업데이트 완료 (제목 + 레벨 + 유형 포함)");
}

main();
