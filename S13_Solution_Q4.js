//2022.09.19.

// Lv.1 - 자릿수 더하기
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
/* 예시
    N       answer
    123     6
    987     24
*/
function solution(n) {
  return String(n)
    .split("")
    .reduce((x, v) => x + Number(v), 0);
}

// Lv.1 - 자연수 뒤집어 배열로 만들기
// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요.
/* 예시
    n       return
    12345   [5,4,3,2,1]
*/
function solution(n) {
  return String(n)
    .split("")
    .map((v) => Number(v))
    .reverse();
}

// Lv.1 - 정수 내림차순으로 배치하기
// 함수 solution은 정수 n을 매개변수로 입력받습니다.
// n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.
/* 예시
    n       return
    118372	873211
*/
function solution(n) {
  return Number(String(n).split("").sort().reverse().join(""));
}

// Lv.1 - 정수 제곱근 판별
// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.
/* 예시
    n       return
    121     144
    3       -1
*/
function solution(n) {
  const answer = Math.sqrt(n) + 1;
  return answer === Math.floor(answer) ? answer * answer : -1;
}
