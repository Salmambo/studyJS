//2022.10.10.

// Lv.0 - 중복된 숫자 개수
// 정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.
/* 예시
    array                   n       result
    [1, 1, 2, 3, 4, 5]	    1	    2
    [0, 2, 3, 4]	        1	    0
*/
function solution(array, n) {
  return array.filter((v) => v === n).length;
}

// Lv.0 - 머쓱이보다 키 큰 사람
// 머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때, 머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성해보세요.
/* 예시
    array                   height      result
    [149, 180, 192, 170]	167	        3
    [180, 120, 140]	        190	        0
*/
function solution(array, height) {
  return array.filter((v) => v > height).length;
}

// Lv.0 - 두 수의 합
// 정수 num1과 num2가 주어질 때, num1과 num2의 합을 return하도록 soltuion 함수를 완성해주세요.
/* 예시
    num1	  num2	  result
    2	      3	      5
    100	    2	      102
*/
function solution(num1, num2) {
  return num1 + num2;
}

// Lv.0 - 두 수의 차
// 정수 num1과 num2가 주어질 때, num1에서 num2를 뺀 값을 return하도록 soltuion 함수를 완성해주세요.
/* 예시
    num1	  num2	  result
    2	      3	      -1
    100	    2	      98
*/
function solution(num1, num2) {
  return num1 - num2;
}

// Lv.0 - 두 수의 곱
// 정수 num1, num2가 매개변수 주어집니다. num1과 num2를 곱한 값을 return 하도록 solution 함수를 완성해주세요.
/* 예시
    num1	  num2	  result
    3	      4	      12
    27	    19	    513
*/
function solution(num1, num2) {
  return num1 * num2;
}

// Lv.0 - 몫 구하기
// 정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.
/* 예시
    num1	  num2	  result
    10	    5	      2
    7	      2	      3
*/
function solution(num1, num2) {
  return Math.floor(num1 / num2);
}

// Lv.0 - 두 수의 나눗셈
// 정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 soltuion 함수를 완성해주세요.
/* 예시
    num1	  num2	  result
    3       2       1500
    7       3       2333
    1       16      62
*/
function solution(num1, num2) {
  return Math.floor((num1 / num2) * 1000);
}

// Lv.0 - 숫자 비교하기
// 정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.
/* 예시
    num1	  num2	  result
    2       3       -1
    11      11      1
    7       99      -1
*/
function solution(num1, num2) {
  return num1 === num2 ? 1 : -1;
}

// Lv.0 - 분수의 덧셈
// 첫 번째 분수의 분자와 분모를 뜻하는 denum1, num1, 두 번째 분수의 분자와 분모를 뜻하는 denum2, num2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
/* 예시
    denum1	num1	denum2	num2	result
    1	      2	    3	      4	    [5, 4]
    9	      2	    1	      3	    [29, 6]
*/
function solution(denum1, num1, denum2, num2) {
  const num = denum1 * num2 + denum2 * num1,
    denum = num1 * num2;
  let gcf;
  for (let i = Math.min(num, denum); i > 0; i--)
    if (num % i === 0 && denum % i === 0) {
      gcf = i;
      break;
    }
  return [num / gcf, denum / gcf];
}

// Lv.0 - 배열 두배 만들기
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.
/* 예시
    numbers	                    result
    [1, 2, 3, 4, 5]	            [2, 4, 6, 8, 10]
    [1, 2, 100, -99, 1, 2, 3]	  [2, 4, 200, -198, 2, 4, 6]
*/
function solution(numbers) {
  return numbers.map((v) => v * 2);
}

// Lv.0 - 나머지 구하기
// 정수 num1, num2가 매개변수로 주어질 때, num1를 num2로 나눈 나머지를 return 하도록 solution 함수를 완성해주세요.
/* 예시
    num1	num2	result
    3	    2	    1
    10	  5	    0
*/
function solution(num1, num2) {
  return num1 % num2;
}

// Lv.0 - 중앙값 구하기
// 중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 중앙값을 return 하도록 solution 함수를 완성해보세요.
/* 예시
    array	                result
    [1, 2, 7, 10, 11]	    7
    [9, -1, 0]	          0
*/
function solution(array) {
  return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}

// Lv.0 - 최빈값 구하기
// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.
/* 예시
    array	                result
    [1, 2, 3, 3, 3, 4]	  3
    [1, 1, 2, 2]	        -1
    [1]	                  1
*/
function solution(array) {
  const map = new Map();
  array.forEach((v) => map.set(v, map.get(v) + 1 || 1));
  if (map.size === 1) return array[0];
  const arr = [...map].sort((a, b) => b[1] - a[1]);
  return arr[0][1] === arr[1][1] ? -1 : arr[0][0];
}

// Lv.0 - 짝수는 싫어요
// 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.
/* 예시
    n	    result
    10	  [1, 3, 5, 7, 9]
    15	  [1, 3, 5, 7, 9, 11, 13, 15]
*/
function solution(n) {
  var answer = [];
  for (let i = 1; i <= n; i += 2) answer.push(i);
  return answer;
}

// Lv.0 - 피자 나눠 먹기 (1)
// 머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.
/* 예시
    n	    result
    7	    1
    1	    1
    15	  3
*/
function solution(n) {
  return Math.ceil(n / 7);
}

// Lv.0 - 피자 나눠 먹기 (2)
// 머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때, n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.
/* 예시
    n	    result
    6	    1
    10	  5
    4	    2
*/
function solution(n) {
  const gcf = () => {
    for (let i = Math.min(n, 6); i > 0; i--)
      if (n % i === 0 && 6 % i === 0) return i;
  };
  return n / gcf();
}

// Lv.0 - 피자 나눠 먹기 (3)
// 머쓱이네 피자가게는 피자를 두 조각에서 열 조각까지 원하는 조각 수로 잘라줍니다. 피자 조각 수 slice와 피자를 먹는 사람의 수 n이 매개변수로 주어질 때, n명의 사람이 최소 한 조각 이상 피자를 먹으려면 최소 몇 판의 피자를 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.
/* 예시
    slice	  n	    result
    7	      10	  2
    4	      12	  3
*/
function solution(slice, n) {
  return Math.ceil(n / slice);
}

// Lv.0 - 배열의 평균값
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.
/* 예시
    numbers	                                        result
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]	                5.5
    [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]	  94.0
*/
function solution(numbers) {
  return numbers.reduce((acc, val) => acc + val, 0) / numbers.length;
}

// Lv.0 - 옷가게 할인 받기
// 머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
// 구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.
// 소수점 이하를 버린 정수를 return합니다.
/* 예시
    price	      result
    150,000	    142,500
    580,000	    464,000
*/
function solution(price) {
  if (price >= 500000) price *= 0.8;
  else if (price >= 300000) price *= 0.9;
  else if (price >= 100000) price *= 0.95;
  else return price;
  return Math.floor(price);
}

// Lv.0 - 아이스 아메리카노
// 아이스 아메리카노는 한잔에 5,500원입니다. 머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때, 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
/* 예시
    money	    result
    5,500	    [1, 0]
    15,000	  [2, 4000]
*/
function solution(money) {
  return [Math.floor(money / 5500), money % 5500];
}
