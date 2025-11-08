let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

if (input === '') {
  console.log(0);
} else {
  console.log(input.split(' ').length);
}

/*
    입력이 " " (공백 1개)라면

    영어 대소문자 없이, 오직 공백만 존재

    단어는 하나도 없음

    따라서 *“단어가 몇 개인가?”*라는 질문의 정답은
    자연스럽게 0개
*/