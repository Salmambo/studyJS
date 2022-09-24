//2022.09.24.

// Lv.1 - 완주하지 못한 선수
// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.
// 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
// 참가자 중에는 동명이인이 있을 수 있습니다.
/* 시간 초과
function solution(participant, completion) {
  for (let com of completion) {
    participant.splice(participant.indexOf(com), 1);
  }
  return participant[0];
}*/
/* 시간 초과
function solution(participant, completion) {
  completion.forEach((v) => (participant[participant.indexOf(v)] = ""));
  return participant.join("");
}*/
function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0; i < completion.length; i++)
    if (participant[i] !== completion[i]) return participant[i];
  return participant[participant.length - 1];
}
