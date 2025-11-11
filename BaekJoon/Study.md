map(Number)
filter()
sort()
slice()
join()

## 중복제거
...new Set

## 사전순 정렬
localeCompare()

## JS 한계
JavaScript는 1 <= H < 24 를 수학적 범위 비교로 해석하지 않습니다.

JS는 순서대로 평가합니다:

1 <= H < 24


이건 내부적으로
➡ (1 <= H) 먼저 평가되고
➡ 그 결과(boolean)가 숫자로 바뀐 다음 < 24와 비교됩니다.

예를 들어 H = 0일 때:

1 <= 0 → false
false는 숫자 0으로 변환
0 < 24 → true


결국 전체 조건식은 true 가 되어버립니다.
즉, H == 0이어도 if (1 <= H < 24)로 들어가 버립니다.


## 마크다운 사용 하는 방법

## 아스키코드 사용법
-  string.fromCharCode() 메서드