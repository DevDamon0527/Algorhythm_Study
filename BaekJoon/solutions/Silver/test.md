## Set = 중복을 허용하지 않는 값들의 집합
- JS 내장 자료구조.

- 배열처럼 여러 값 담음.
- 중복 자동 제거
- 포함 여부 빠른 검사 강점
=> 이 값이 있는지? 확인할 때, 배열보다 효율적.

## 생성
const s1 = new Set();

const s2 = new Set([1, 2, 3]);

## 값 추가: add
const s = new Set();
s.add(1);
s.add(2);

## 값 존재 여부 확인: has
const s = new Set([1, 2, 3]);

console.log(s.has(1)); // true

## 값 삭졔: delete, 전체 삭제: clear
const s = new Set([1, 2, 3]);

s.delete(2);

s.clear();

## 언제 사용하는지?
- 중복 제거
- 두 배열의 겹치는 값 찾기(교집합)
- "이 값이 존재하는지"를 반복해서 확인할 때
- 이미 본 값인지 체크

## 배열 중복 제거
const arr = [1, 2, 2, 3, 3, 4];

const unique = [...new Set(arr)];
console.log(unique); // [1, 2, 3, 4]

## 겹치는 값 찾기 (교집합 찾기)
const A = [1, 2, 3, 4, 5];
const B = [2, 4, 6];

const setB = new Set(B);
const intersection = A.filter(v => setB.has(v));

## 한 번이라도 나왔던 적 있는지 체크
const visited = new Set();

function visit(page) {
    if (visited.has(page)) {
        console.log("이미 방문함", page);
    } else {
        console.log("첫 방문", page)
        visited.add(page);
    }
}

## 겹치는 값 있으면 1, 없으면 0

const A = [1, 2, 3];
const B = [2, 4, 3];

const setB = new Set(B); // {2, 4, 3}
const hasOverlap = A.some(v => setB.has(v));

console.log(hasOverlap ? 1 : 0); 

## some = 배열에서 하나라도 조건을 만족하는 요소가 있으면 true 반환하는 메서드.
-> 전부 확인할 필요 없이, 첫 번째로 true가 나오면 즉시 종료.

# 기본 정의
배열.some((요소, 인덱스, 원본배열) => 조건식)
- 조건 만족하는 요소 하나라도 있으면 -> true
- 조건 만족하는 요소 하나도 없으면 -> false
