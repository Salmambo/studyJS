//2022.09.26.

// Lv.1 - K번째수
// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.
// 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.
/* 예시
    array       [1, 5, 2, 6, 3, 7, 4]
    commands    [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
    return      [5, 6, 3]
*/
function solution(array, commands) {
  var answer = [];
  for (let command of commands) {
    const arr = array.slice(command[0] - 1, command[1]).sort((a, b) => a - b);
    answer.push(arr[command[2] - 1]);
  }
  return answer;
}
/* 한 줄 코드
function solution(array, commands) {
  return commands.map(
    (v) => array.slice(v[0] - 1, v[1]).sort((a, b) => a - b)[v[2] - 1]
  );
}*/

// Lv.1 - 모의고사
// 수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.
// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.
// 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.
/* 예시
    answers	      return
    [1,2,3,4,5]	  [1]
    [1,3,2,4,2]	  [1,2,3]
*/
function solution(answers) {
  const picks = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  var answer = [];
  for (let i = 0; i < picks.length; i++) {
    let count = 0;
    for (let j = 0; j < answers.length; j++)
      if (answers[j] === picks[i][j % picks[i].length]) count++;
    picks[i] = count;
  }
  const max = Math.max(...picks);
  for (let i = 0; i < picks.length; i++)
    if (picks[i] === max) answer.push(i + 1);
  return answer;
}

// Lv.1 - 체육복
// 점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다.
// 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다.
// 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.
// 전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.
// 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.
/* 예시
    n	  lost	  reserve	    return
    5	  [2, 4]	[1, 3, 5]	  5
    5	  [2, 4]	[3]	        4
    3	  [3]	    [1]	        2
*/
function solution(n, lost, reserve) {
  let clothes = new Array(n).fill(1);
  lost.forEach((v) => clothes[v - 1]--);
  reserve.forEach((v) => clothes[v - 1]++);
  return Math.max(count(clothes), count(clothes.reverse()));
}
function count(clothes) {
  let count = 0;
  for (let i = 0; i < clothes.length; i++)
    if (clothes[i] > 0) count++;
    else if (clothes[i - 1] == 2) count++;
    else if (i + 1 < clothes.length && clothes[i + 1] == 2) {
      clothes[i + 1]--;
      count++;
    }
  return count;
}
