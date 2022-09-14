//2022.09.14.

// Lv.1 - 문자열 다루기 기본
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요.
// s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.
/* 예시
    s       return
    "a234"	false
    "1234"	true
*/
function solution(s) {
  return (s.length === 4 || s.length === 6) && !s.match(/\D/);
}

// Lv.1 - 서울에서 김서방 찾기
// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요.
// seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.
/* 예시
    seoul               return
    ["Jane", "Kim"]	    "김서방은 1에 있다"
*/
function solution(seoul) {
  return "김서방은 " + seoul.indexOf("Kim") + "에 있다";
}

// Lv.1 - 소수 찾기
// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.
// 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
// (1은 소수가 아닙니다.)
/* 예시
    n   result
    10	4
    5	3
*/
/* 효율성테스트 통과될 때도 안 될 때도 있음
function solution(n) {
  var answer = 0;
  for (let i = 2; i <= n; i++) {
    if (prime(i)) answer++;
  }
  return answer;
}
function prime(i) {
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) return false;
  }
  return true;
}*/
//짝수는 2뿐이잖아?
function solution(n) {
  var answer = 1;
  for (let i = 3; i <= n; i += 2) {
    if (prime(i)) answer++;
  }
  return answer;
}
function prime(i) {
  for (let j = 3; j <= Math.sqrt(i); j += 2) {
    if (i % j === 0) return false;
  }
  return true;
}
