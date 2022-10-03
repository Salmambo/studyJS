//2022.10.03.

// Lv.1 - 로또의 최고 순위와 최저 순위
// 로또 6/45(이하 '로또'로 표기)는 1부터 45까지의 숫자 중 6개를 찍어서 맞히는 대표적인 복권입니다. 아래는 로또의 순위를 정하는 방식입니다.
/*  순위	    당첨 내용
    1	        6개 번호가 모두 일치
    2	        5개 번호가 일치
    3	        4개 번호가 일치
    4	        3개 번호가 일치
    5	        2개 번호가 일치
    6(낙첨)	    그 외
*/
// 순서와 상관없이, 구매한 로또에 당첨 번호와 일치하는 번호가 있으면 맞힌 걸로 인정됩니다.
// 0은 알아볼 수 없는 숫자를 의미합니다.
// 0을 제외한 다른 숫자들은 lottos에 2개 이상 담겨있지 않습니다.
// 민우가 구매한 로또 번호를 담은 배열 lottos, 당첨 번호를 담은 배열 win_nums가 매개변수로 주어집니다. 이때, 당첨 가능한 최고 순위와 최저 순위를 차례대로 배열에 담아서 return 하도록 solution 함수를 완성해주세요.
/* 예시
    lottos	                win_nums	                result
    [44, 1, 0, 0, 31, 25]	[31, 10, 45, 1, 6, 19]	    [3, 5]
    [0, 0, 0, 0, 0, 0]	    [38, 19, 20, 40, 15, 25]	[1, 6]
    [45, 4, 35, 20, 3, 9]	[20, 9, 3, 45, 4, 35]	    [1, 1]
*/
function solution(lottos, win_nums) {
  let correct = 0,
    zero = 0;
  lottos.forEach((v) => {
    if (v === 0) zero++;
    else if (win_nums.includes(v)) correct++;
  });
  return [lotto(correct + zero), lotto(correct)];
}
function lotto(n) {
  if (n < 2) return 6;
  else return 7 - n;
}

// Lv.1 - 약수의 개수와 덧셈
// 두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.
/* 예시
    left	right	  result
    13	  17	    43
    24	  27	    52
*/
function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++)
    answer += Number.isInteger(Math.sqrt(i)) ? -i : i;
  return answer;
}
