//2022.09.29.

// Lv.1 - 키패드 누르기
// 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
// 맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.
// 1. 엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
// 2. 왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
// 3. 오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
// 4. 가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
// 4-1. 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.
// 순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때, 각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.
// hand는 "left" 또는 "right" 입니다.
// - "left"는 왼손잡이, "right"는 오른손잡이를 의미합니다.
// 왼손 엄지손가락을 사용한 경우는 L, 오른손 엄지손가락을 사용한 경우는 R을 순서대로 이어붙여 문자열 형태로 return 해주세요.
/* 예시
  numbers                           hand	  result
  [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]	"right"	"LRLLLRLLRRL"
  [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]	"left"	"LRLLRRLLLRR"
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]    "right"	"LLRLLRLLRL"
*/
const keypad = {
  1: [0, 0],
  2: [0, 1],
  3: [0, 2],
  4: [1, 0],
  5: [1, 1],
  6: [1, 2],
  7: [2, 0],
  8: [2, 1],
  9: [2, 2],
  0: [3, 1],
};
function solution(numbers, hand) {
  var answer = "";
  let left = [3, 0],
    right = [3, 2];
  for (let number of numbers) {
    const goal = keypad[number];
    /* 왜 switch를 쓰면 40점이 나오지...
    switch (number) {
      case 1 || 4 || 7:
        left = goal;
        answer += "L";
        break;
      case 3 || 6 || 9:
        right = goal;
        answer += "R";
        break;
      default:
        const ld = Math.abs(left[0] - goal[0]) + Math.abs(left[1] - goal[1]),
          rd = Math.abs(right[0] - goal[0]) + Math.abs(right[1] - goal[1]);
        if (ld < rd) {
          left = goal;
          answer += "L";
        } else if (rd < ld) {
          right = goal;
          answer += "R";
        } else if (hand == "left") {
          left = goal;
          answer += "L";
        } else {
          right = goal;
          answer += "R";
        }
    }*/
    if (number == 1 || number == 4 || number == 7) {
      left = goal;
      answer += "L";
    } else if (number == 3 || number == 6 || number == 9) {
      right = goal;
      answer += "R";
    } else {
      const ld = Math.abs(left[0] - goal[0]) + Math.abs(left[1] - goal[1]),
        rd = Math.abs(right[0] - goal[0]) + Math.abs(right[1] - goal[1]);
      if (ld < rd) {
        left = goal;
        answer += "L";
      } else if (rd < ld) {
        right = goal;
        answer += "R";
      } else if (hand == "left") {
        left = goal;
        answer += "L";
      } else {
        right = goal;
        answer += "R";
      }
    }
  }
  return answer;
}

// Lv.1 - 두 개 뽑아서 더하기
// 정수 배열 numbers가 주어집니다.
// numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.
/* 예시
  numbers	      result
  [2,1,3,4,1]	  [2,3,4,5,6,7]
  [5,0,2,7]	    [2,5,7,9,12]
*/
function solution(numbers) {
  var answer = new Set();
  numbers.forEach((v, i) => {
    for (let j = i + 1; j < numbers.length; j++) answer.add(v + numbers[j]);
  });
  return [...answer].sort((a, b) => a - b);
}

// Lv.1 - 3진법 뒤집기
// 자연수 n이 매개변수로 주어집니다.
// n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.
/* 예시
  n	    result
  45	  7
  125	  229
*/
function solution(n) {
  return parseInt(n.toString(3).split("").reverse().join(""), 3);
}
/* split()보다 [...Arg]이 더 빠름
function solution(n) {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
}*/

// Lv.1 - 내적
// 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다.
// a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.
// 이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)
/* 예시
  a	          b	            result
  [1,2,3,4]	  [-3,-1,0,2]	  3
  [-1,0,1]	  [1,0,-1]	    -2
*/
function solution(a, b) {
  return a.reduce((acc, val, idx) => acc + val * b[idx], 0);
}
