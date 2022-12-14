//2022.09.27.

// Lv.1 - 실패율
// 실패율은 다음과 같이 정의한다.
// - 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
// 전체 스테이지의 개수 N, 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 매개변수로 주어질 때, 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라.
// stages에는 1 이상 N + 1 이하의 자연수가 담겨있다.
// - 각 자연수는 사용자가 현재 도전 중인 스테이지의 번호를 나타낸다.
// - 단, N + 1 은 마지막 스테이지(N 번째 스테이지) 까지 클리어 한 사용자를 나타낸다.
// 만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다.
// 스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0 으로 정의한다.
/* 예시
    N   stages                      result
    5   [2, 1, 2, 6, 2, 4, 3, 3]    [3,4,2,1,5]
    4	[4,4,4,4,4]	                [4,1,2,3]
*/
function solution(N, stages) {
  var answer = [];
  let count = new Array(N).fill(0),
    sum = 0,
    i = 0;
  for (let stage of stages) if (stage <= N) count[stage - 1]++;
  for (; i < N; i++) {
    const denom = stages.length - sum;
    sum += count[i];
    count[i] = denom ? count[i] / denom : 0;
  }
  for (; i > 0; i--) {
    const max = count.indexOf(Math.max(...count));
    answer.push(max + 1);
    count[max] = -1;
  }
  return answer;
}
