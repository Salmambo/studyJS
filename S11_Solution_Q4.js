//2022.09.15.

// Lv.1 - 수박수박수박수박수박수?
// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요.
/* 예시
    n   return
    3	"수박수"
    4	"수박수박"
*/
function solution(n) {
  var answer = "";
  for (let i = 0; i < n; i++)
    if (i % 2 === 0) answer += "수";
    else answer += "박";
  return answer;
}
/* 훨씬 빠르고 간단한 repeat()
function solution(n) {
  return "수박".repeat(n / 2) + (n % 2 === 0 ? "" : "수");
}*/

// Lv.1 - 문자열을 정수로 바꾸기
// 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.
// s의 맨앞에는 부호(+, -)가 올 수 있습니다.
// s는 부호와 숫자로만 이루어져있습니다.
// s는 "0"으로 시작하지 않습니다.
function solution(s) {
  return Number.parseInt(s);
}

// Lv.1 - 시저 암호
// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
// 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.
// 공백은 아무리 밀어도 공백입니다.
// s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
// n은 1 이상, 25이하인 자연수입니다.
/* 예시
    s	        n	    result
    "AB"	    1	    "BC"
    "z"	        1	    "a"
    "a B z"	    4	    "e F d"
*/
function solution(s, n) {
  var answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") answer += " ";
    else answer += String.fromCharCode(cipher(s.charCodeAt(i), n));
  }
  return answer;
}
function cipher(base, n) {
  const cipher = base + n;
  if (base > 64 && base < 91) return cipher > 90 ? cipher - 26 : cipher;
  else return cipher > 122 ? cipher - 26 : cipher;
}

// Lv.1 - 약수의 합
// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
/* 예시
    n   return
    12  28
    5   6
*/
function solution(n) {
  var answer = 0;
  const root = Math.sqrt(n);
  for (let i = 1; i < root; i++) if (n % i === 0) answer += n / i + i;
  if (root === Math.floor(root)) answer += root;
  return answer;
}
