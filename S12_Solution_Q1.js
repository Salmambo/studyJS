//2022.09.17.

// Lv.1 - 이상한 문자 만들기
// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다.
// 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
// 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.
/* 예시
    s                   return
    "try hello world"	"TrY HeLlO WoRlD"
*/
function solution(s) {
  var answer = "";
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      count = 0;
      continue;
    }
    if (count % 2 == 0) answer += s[i].toUpperCase();
    else answer += s[i].toLowerCase();
    count++;
  }
  return answer;
}
