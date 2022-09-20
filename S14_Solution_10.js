//2022.09.20.

// Lv.1 - 제일 작은 수 제거하기
// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요.
// 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요.
/* 예시
    arr         return
    [4,3,2,1]	[4,3,2]
    [10]	    [-1]
*/
function solution(arr) {
  if (arr.length == 1) return [-1];
  const min = [...arr].sort((a, b) => a - b)[0];
  return arr.filter((v) => v !== min);
}
/* 압도적으로 빠름
function solution(arr) {
  if (arr.length == 1) return [-1];
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return arr;
}*/

// Lv.1 - 짝수와 홀수
// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.
/* 예시
    num return
    3   "Odd"
    4   "Even"
*/
function solution(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

// Lv.1 - 최대공약수와 최소공배수
// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요.
// 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다.
/* 예시
  n   m   return
  3   12  [3, 12]
  2   5   [1, 10]
*/
function solution(n, m) {
  for (let i = Math.min(n, m); i > 0; i--)
    if (n % i == 0 && m % i == 0) return [i, (n * m) / i];
}

// Lv.1 - 콜라츠 추측
// 1937년 Collatz란 사람에 의해 제기된 이 추측은, 주어진 수가 1이 될 때까지 다음 작업을 반복하면, 모든 수를 1로 만들 수 있다는 추측입니다.
// 1-1. 입력된 수가 짝수라면 2로 나눕니다.
// 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
// 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
// 위 작업을 몇 번이나 반복해야 하는지 반환하는 함수, solution을 완성해 주세요.
// 단, 주어진 수가 1인 경우에는 0을, 작업을 500번 반복할 때까지 1이 되지 않는다면 –1을 반환해 주세요.
/* 예시
  n       result
  6       8
  16      4
  626331  -1
*/
function solution(num) {
  var answer = 0;
  while (num !== 1) {
    num = num % 2 ? num * 3 + 1 : num / 2;
    answer++;
    if (answer === 500) return -1;
  }
  return answer;
}

// Lv.1 - 평균 구하기
// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
/* 예시
  arr         return
  [1,2,3,4]	  2.5
  [5,5]	      5
*/
function solution(arr) {
  return arr.reduce((a, v) => a + v, 0) / arr.length;
}

// Lv.1 - 하샤드 수
// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다.
// 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.
/* 예시
  arr   return
  10	  true
  12	  true
  11	  false
  13	  false
*/
function solution(x) {
  return !(
    x %
    String(x)
      .split("")
      .reduce((a, v) => a + Number(v), 0)
  );
}

// Lv.1 - 핸드폰 번호 가리기
// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.
/* 예시
  phone_number	  return
  "01033334444"	  "*******4444"
  "027778888"	    "*****8888"
*/
function solution(phone_number) {
  return phone_number
    .split("")
    .map((v, i, a) => (i < a.length - 4 ? "*" : v))
    .join("");
}
/* 더 빠르고 기발한 코드
function solution(phone_number) {
  return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}*/

// Lv.1 - 행렬의 덧셈
// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다.
// 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.
/* 예시
  arr1	          arr2	          return
  [[1,2],[2,3]]	  [[3,4],[5,6]]	  [[4,6],[7,9]]
  [[1],[2]]	      [[3],[4]]	      [[4],[6]]
*/
function solution(arr1, arr2) {
  return arr1.map((vi, i) => vi.map((vj, j) => vj + arr2[i][j]));
}

// Lv.1 - x만큼 간격이 있는 n개의 숫자
// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다.
// 조건을 만족하는 함수, solution을 완성해주세요.
/* 예시
  x   n   answer
  2	  5	  [2,4,6,8,10]
  4	  3	  [4,8,12]
  -4	2	  [-4, -8]
*/
function solution(x, n) {
  var answer = [];
  for (let i = 1; i <= n; i++) answer.push(i * x);
  return answer;
}

// Lv.1 - 직사각형 별찍기
// 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
// 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.
/* 예시
  입력     출력
  5 3     *****
          *****
          *****
*/
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  let answer = [];
  for (let i = 0; i < b; i++) answer.push("*".repeat(a));
  console.log(answer.join("\n"));
});
