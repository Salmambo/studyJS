//2024.08.07.

// 이차원 배열 대각선 순회하기
// 2차원 정수 배열 board와 정수 k가 주어집니다.
// i + j <= k를 만족하는 모든 (i, j)에 대한 board[i][j]의 합을 return 하는 solution 함수를 완성해 주세요.
// 1 ≤ board의 길이 ≤ 100
// 1 ≤ board[i]의 길이 ≤ 100
// 1 ≤ board[i][j] ≤ 10,000
// 모든 board[i]의 길이는 같습니다.
// 0 ≤ k < board의 길이 + board[i]의 길이
/* 예시
    board	                                    k   result
    [[0, 1, 2],[1, 2, 3],[2, 3, 4],[3, 4, 5]]	2	8
*/
function solution(board, k) {
  return board.reduce(
    (answer, arr, i) =>
      answer + arr.reduce((acc, val, j) => acc + (i + j <= k ? val : 0), 0),
    0
  );
}

// 정사각형으로 만들기
// 이차원 정수 배열 arr이 매개변수로 주어집니다. arr의 행의 수가 더 많다면 열의 수가 행의 수와 같아지도록 각 행의 끝에 0을 추가하고, 열의 수가 더 많다면 행의 수가 열의 수와 같아지도록 각 열의 끝에 0을 추가한 이차원 배열을 return 하는 solution 함수를 작성해 주세요.
// 1 ≤ arr의 길이 ≤ 100
// 1 ≤ arr의 원소의 길이 ≤ 100
// arr의 모든 원소의 길이는 같습니다.
// 1 ≤ arr의 원소의 원소 ≤ 1,000
/* 예시
    arr	                                                                result
    [[572, 22, 37], [287, 726, 384], [85, 137, 292], [487, 13, 876]]	[[572, 22, 37, 0], [287, 726, 384, 0], [85, 137, 292, 0], [487, 13, 876, 0]]
    [[57, 192, 534, 2], [9, 345, 192, 999]]                             [[57, 192, 534, 2], [9, 345, 192, 999], [0, 0, 0, 0], [0, 0, 0, 0]]
    [[1, 2], [3, 4]]                                                    [[1, 2], [3, 4]]
*/
function solution(arr) {
  const i = arr.length - arr[0].length;
  return i > 0
    ? arr.map((a) => a.concat(new Array(i).fill(0)))
    : i < 0
    ? arr.concat(new Array(Math.abs(i)).fill(new Array(arr[0].length).fill(0)))
    : arr;
}

// 특별한 이차원 배열 2
// n × n 크기의 이차원 배열 arr이 매개변수로 주어질 때, arr이 다음을 만족하면 1을 아니라면 0을 return 하는 solution 함수를 작성해 주세요.
// 0 ≤ i, j < n인 정수 i, j에 대하여 arr[i][j] = arr[j][i]
// 1 ≤ arr의 길이 = arr의 원소의 길이 ≤ 100
// 1 ≤ arr의 원소의 원소 ≤ 1,000
// 모든 arr의 원소의 길이는 같습니다.
/* 예시
    arr	                                                                                    result
    [[5, 192, 33], [192, 72, 95], [33, 95, 999]]	                                        1
    [[19, 498, 258, 587], [63, 93, 7, 754], [258, 7, 1000, 723], [587, 754, 723, 81]]       0
*/
function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] != arr[j][i]) return 0;
    }
  }
  return 1;
}

// 정수를 나선형으로 배치하기
// 양의 정수 n이 매개변수로 주어집니다. n × n 배열에 1부터 n2 까지 정수를 인덱스 [0][0]부터 시계방향 나선형으로 배치한 이차원 배열을 return 하는 solution 함수를 작성해 주세요.
// 1 ≤ n ≤ 30
/* 예시
    n   result
    4   [[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]
    5   [[1, 2, 3, 4, 5], [16, 17, 18, 19, 6], [15, 24, 25, 20, 7], [14, 23, 22, 21, 8], [13, 12, 11, 10, 9]]
*/
function solution(n) {
  var answer = Array.from(Array(n), () => new Array(n));
  let val = (i = j = 0);
  let dir = "r";
  while (val != n * n) {
    val++;
    answer[i][j] = val;
    switch (dir) {
      case "r":
        if (j == n - 1 || answer[i][j + 1]) {
          dir = "d";
          i++;
        } else j++;
        break;
      case "d":
        if (i == n - 1 || answer[i + 1][j]) {
          dir = "l";
          j--;
        } else i++;
        break;
      case "l":
        if (j == 0 || answer[i][j - 1]) {
          dir = "u";
          i--;
        } else j--;
        break;
      default:
        if (i == 0 || answer[i - 1][j]) {
          dir = "r";
          j++;
        } else i--;
        break;
    }
  }
  return answer;
}