//2022.10.19.

// Lv.0 - 공 던지기
// 공은 1번부터 던지며 오른쪽으로 한 명을 건너뛰고 그다음 사람에게만 던질 수 있습니다. 친구들의 번호가 들어있는 정수 배열 numbers와 정수 K가 주어질 때, k번째로 공을 던지는 사람의 번호는 무엇인지 return 하도록 solution 함수를 완성해보세요.
// numbers의 첫 번째와 마지막 번호는 실제로 바로 옆에 있습니다.
// numbers는 1부터 시작하며 번호는 순서대로 올라갑니다.
/* 예시
    numbers	            k	    result
    [1, 2, 3, 4]	    2	    3
    [1, 2, 3, 4, 5, 6]	5	    3
    [1, 2, 3]	        3	    2
*/
function solution(numbers, k) {
  return (k * 2 - 1) % numbers.length;
}

// Lv.0 - 배열 회전시키기
// 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.
/* 예시
    numbers	                    direction	result
    [1, 2, 3]	                "right"	    [3, 1, 2]
    [4, 455, 6, 4, -1, 45, 6]	"left"	    [455, 6, 4, -1, 45, 6, 4]
*/
function solution(numbers, direction) {
  direction === "right"
    ? numbers.unshift(numbers.pop())
    : numbers.push(numbers.shift());
  return numbers;
}

// Lv.0 - 주사위의 개수
// 상자의 가로, 세로, 높이가 저장되어있는 배열 box와 주사위 모서리의 길이 정수 n이 매개변수로 주어졌을 때, 상자에 들어갈 수 있는 주사위의 최대 개수를 return 하도록 solution 함수를 완성해주세요.
/* 예시
    box	        n	result
    [1, 1, 1]	1	1
    [10, 8, 6]	3	12
*/
function solution([w, l, h], n) {
  return Math.floor(w / n) * Math.floor(l / n) * Math.floor(h / n);
}

// Lv.0 - 합성수 찾기
// 약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.
/* 예시
    n	result
    10	5
    15	8
*/
function solution(n) {
  var answer = 0;
  for (let i = 4; i <= n; i++) if (check(i)) answer++;
  return answer;
}
function check(n) {
  for (let i = 2; i < n; i++) if (n % i === 0) return true;
  return false;
}

// Lv.0 - 최댓값 만들기 (1)
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
/* 예시
    numbers	                result
    [1, 2, 3, 4, 5]	        20
    [0, 31, 24, 10, 1, 9]	744
*/
function solution(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] * numbers[1];
}

// Lv.0 - 팩토리얼
// i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다. 예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다. 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.
// i! ≤ n
/* 예시
    n	        result
    3628800	    10
    7	        3
*/
function solution(n, i = 0) {
  if (n <= i) return i;
  i++;
  return solution(n / i, i);
}

// Lv.0 - 모음 제거
// 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
// my_string은 소문자와 공백으로 이루어져 있습니다.
/* 예시
    my_string	        result
    "bus"	            "bs"
    "nice to meet you"	"nc t mt y"
*/
function solution(my_string) {
  return my_string.replace(/[aeiou]/g, "");
}

// Lv.0 - 문자열 정렬하기 (1)
// 문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.
/* 예시
    my_string	    result
    "hi12392"	    [1, 2, 2, 3, 9]
    "p2o4i8gj2"	    [2, 2, 4, 8]
    "abcde0"	    [0]
*/
function solution(my_string) {
  return my_string
    .match(/\d/g)
    .map((v) => parseInt(v))
    .sort();
}

// Lv.0 - 숨어있는 숫자의 덧셈 (1)
// 문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
// my_string은 소문자, 대문자 그리고 한자리 자연수로만 구성되어있습니다.
/* 예시
    my_string	        result
    "aAb1B2cC34oOp"	    10
    "1a2b3c4d123"	    16
*/
function solution(my_string) {
  return my_string.match(/\d/g).reduce((acc, val) => +val + acc, 0);
}

// Lv.0 - 소인수분해
// 소인수분해란 어떤 수를 소수들의 곱으로 표현하는 것입니다.
// 자연수 n이 매개변수로 주어질 때 n의 소인수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.
function solution(n) {
  var answer = [];
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) answer.push(i);
    while (n % i === 0) n /= i;
  }
  return answer;
}
/* 위랑 똑같은 거 아닌가? 왜 9번 케이스에서 런타임에러가 뜨지
var answer = [];
function solution(n, i = 2) {
  if (n < i) return answer;
  if (n % i === 0) answer.push(i);
  while (n % i === 0) n /= i;
  return solution(n, i + 1);
}*/

// Lv.0 - 컨트롤 제트
// 숫자들이 공백으로 구분된 문자열이 주어집니다. 문자열에 있는 숫자를 차례대로 더하려고 합니다. 이 때 “Z”가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다. 숫자와 “Z”로 이루어진 문자열 s가 주어질 때, 머쓱이가 구한 값을 return 하도록 solution 함수를 완성해보세요.
// 지울 숫자가 없는 상태에서 "Z"는 무시합니다.
/* 예시
    s	            result
    "1 2 Z 3"	    4
    "10 20 30 40"	100
    "10 Z 20 Z 1"	1
*/
/* "1 2 3 Z Z" => 1
function solution(s) {
  return s
    .split(" ")
    .reduce(
      (acc, val, idx, arr) =>
        val === "Z" || arr[idx + 1] === "Z" ? acc : +val + acc,
      0
    );
}*/
function solution(s) {
  const stack = [];
  s = s.split(" ");
  for (const c of s)
    if (c === "Z") stack.pop();
    else stack.push(+c);
  return stack.reduce((acc, val) => acc + val, 0);
}

// Lv.0 - 배열 원소의 길이
// 문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.
/* 예시
    strlist	                            result
    ["We", "are", "the", "world!"]	    [2, 3, 3, 6]
    ["I", "Love", "Programmers."]	    [1, 4, 12]
*/
function solution(strlist) {
  return strlist.map((v) => v.length);
}

// Lv.0 - 직사각형 넓이 구하기
// 2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다. 직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가 매개변수로 주어질 때, 직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.
/* 예시
    dots	                                result
    [[1, 1], [2, 1], [2, 2], [1, 2]]	    1
    [[-1, -1], [1, 1], [1, -1], [-1, 1]]	4
*/
function solution(dots) {
  const [x, y] = dots[0];
  let w, l;
  for (let i = 1; i < 4; i++)
    if (dots[i][0] === x) l = Math.abs(dots[i][1] - y);
    else if (dots[i][1] === y) w = Math.abs(dots[i][0] - x);
  return w * l;
}

// Lv.0 - 캐릭터의 좌표
// 게임에는 up, down, left, right 방향키가 있으며 각 키를 누르면 위, 아래, 왼쪽, 오른쪽으로 한 칸씩 이동합니다.
// 머쓱이가 입력한 방향키의 배열 keyinput와 맵의 크기 board이 매개변수로 주어집니다. 캐릭터는 항상 [0,0]에서 시작할 때 키 입력이 모두 끝난 뒤에 캐릭터의 좌표 [x, y]를 return하도록 solution 함수를 완성해주세요.
// [0, 0]은 board의 정 중앙에 위치합니다.
// board은 [가로 크기, 세로 크기] 형태로 주어집니다.
// board의 크기를 벗어난 방향키 입력은 무시합니다.
/* 예시
    keyinput	                                board	    result
    ["left", "right", "up", "right", "right"]	[11, 11]	[2, 1]
    ["down", "down", "down", "down", "down"]	[7, 9]	    [0, -4]
*/
// Math.abs()가 안 먹힌다. 마이너스를 곱해주는 걸로 하니 8번 케이스가 통과됐다.
function solution(keyinput, board) {
  var answer = [0, 0];
  const [x, y] = board.map((v) => (v - 1) / 2);
  for (const key of keyinput)
    switch (key) {
      case "left":
        if (-answer[0] < x) answer[0]--;
        break;
      case "right":
        if (answer[0] < x) answer[0]++;
        break;
      case "up":
        if (answer[1] < y) answer[1]++;
        break;
      default:
        if (-answer[1] < y) answer[1]--;
    }
  return answer;
}

// Lv.0 - 최댓값 만들기 (2)
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
/* 예시
    numbers	                    result
    [1, 2, -3, 4, -5]	        15
    [0, -31, 24, 10, 1, 9]	    240
    [10, 20, 30, 5, 5, 20, 5]	600
*/
function solution(numbers) {
  numbers.sort((a, b) => a - b);
  const minus = numbers[0] * numbers[1],
    plus = numbers.at(-1) * numbers.at(-2);
  return Math.max(minus, plus);
}

// Lv.0 - 다항식 더하기
// 한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다. 다항식을 계산할 때는 동류항끼리 계산해 정리합니다. 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때, 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요. 같은 식이라면 가장 짧은 수식을 return 합니다.
// polynomial은 0부터 9까지의 정수, 공백, ‘x’, ‘+'로 이루어져 있습니다.
// 항과 연산기호 사이에는 항상 공백이 존재합니다.
// 계수 1은 생략합니다.
// 결괏값에 상수항은 마지막에 둡니다.
/* 예시
    polynomial	    result
    "3x + 7 + x"	"4x + 7"
    "x + x + x"	    "3x"
*/
function solution(polynomial) {
  let x = 0,
    n = 0;
  polynomial = polynomial.split(" ");
  for (const v of polynomial)
    if (v.endsWith("x")) x += parseInt(v) || 1;
    else if (v !== "+") n += parseInt(v);
  return x && n
    ? `${x > 1 ? x : ""}x + ${n}`
    : x
    ? `${x > 1 ? x : ""}x`
    : `${n}`;
}

// Lv.0 - 숨어있는 숫자의 덧셈 (2)
// 문자열 my_string이 매개변수로 주어집니다. my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
// 연속된 수는 하나의 숫자로 간주합니다.
// 문자열에 자연수가 없는 경우 0을 return 해주세요.
/* 예시
    my_string	        result
    "aAb1B2cC34oOp"	    37
    "1a2b3c4d123Z"	    133
*/
function solution(my_string) {
  return my_string
    .split(/\D/)
    .reduce((acc, val) => (val ? +val + acc : acc), 0);
  return my_string.split(/\D+/).reduce((acc, val) => +val + acc, 0);
}

// Lv.0 - 안전지대
// 지뢰가 있는 지역과 지뢰에 인접한 위, 아래, 좌, 우 대각선 칸을 모두 위험지역으로 분류합니다.
// 지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
// 지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.
/* 예시
    board	                                            result
    [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0],                  16
    [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]]	
    [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0],                  13
    [0, 0, 0, 0, 0], [0, 0, 1, 1, 0], [0, 0, 0, 0, 0]]	
    [[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1],            0
    [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]]	
*/
function solution(board) {
  const map = [];
  for (let i = 0; i < board.length; i++)
    map.push(new Array(board.length).fill(true));
  const check = (idx) => {
    if (idx < 0 || idx === board.length) return false;
    return true;
  };
  for (let i = 0; i < board.length; i++)
    for (let j = 0; j < board.length; j++)
      if (board[i][j] === 1) {
        if (check(i - 1) && check(j - 1)) map[i - 1][j - 1] = false;
        if (check(i - 1)) map[i - 1][j] = false;
        if (check(i - 1) && check(j + 1)) map[i - 1][j + 1] = false;
        if (check(j - 1)) map[i][j - 1] = false;
        map[i][j] = false;
        if (check(j + 1)) map[i][j + 1] = false;
        if (check(i + 1) && check(j - 1)) map[i + 1][j - 1] = false;
        if (check(i + 1)) map[i + 1][j] = false;
        if (check(i + 1) && check(j + 1)) map[i + 1][j + 1] = false;
      }
  var answer = 0;
  for (const i of map) for (const j of i) if (j) answer++;
  return answer;
}

// Lv.0 - 삼각형의 완성조건 (2)
// 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
//     가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
// 삼각형의 두 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 나머지 한 변이 될 수 있는 정수의 개수를 return하도록 solution 함수를 완성해주세요.
/* 예시
    sides	    result
    [1, 2]	    1
    [3, 6]	    5
    [11, 7]	    13
*/
function solution(sides) {
  var answer = 0;
  let max, min;
  if (sides[0] > sides[1]) {
    max = sides[0];
    min = sides[1];
  } else {
    max = sides[1];
    min = sides[0];
  }
  for (let i = max; i + min > max; i--) answer++;
  for (let i = max + 1; i < max + min; i++) answer++;
  return answer;
}
/* 한 줄 풀이 ...원리를 모르겠다
function solution(sides) {
  return Math.min(...sides) * 2 - 1;
}*/

// Lv.0 - 외계어 사전
// 알파벳이 담긴 배열 spell과 외계어 사전 dic이 매개변수로 주어집니다. spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 존재하지 않는다면 2를 return하도록 solution 함수를 완성해주세요.
// spell과 dic의 원소는 알파벳 소문자로만 이루어져있습니다.
// dic과 spell 모두 중복된 원소를 갖지 않습니다.
/* 예시
    spell	                dic	                                        result
    ["p", "o", "s"]	        ["sod", "eocd", "qixm", "adio", "soo"]	    2
    ["z", "d", "x"]	        ["def", "dww", "dzx", "loveaw"]	            1
    ["s", "o", "m", "d"]	["moos", "dzx", "smm", "sunmmo", "som"]	    2
*/
function solution(spell, dic) {
  spell = spell.sort().join();
  for (let v of dic) if ([...v].sort().join() === spell) return 1;
  return 2;
}
