//2022.10.13.

// Lv.0 - 나이 출력
// 나이 age가 주어질 때, 2022년을 기준 출생 연도를 return 하는 solution 함수를 완성해주세요.
// 나이는 태어난 연도에 1살이며 1년마다 1씩 증가합니다.
/* 예시
    age	    result
    40	    1983
    23	    2000
*/
function solution(age) {
  return 2022 - age + 1;
}

// Lv.0 - 배열 뒤집기
// 정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.
/* 예시
    num_list	            result
    [1, 2, 3, 4, 5]	        [5, 4, 3, 2, 1]
    [1, 1, 1, 1, 1, 2]	    [2, 1, 1, 1, 1, 1]
    [1, 0, 1, 1, 1, 3, 5]	[5, 3, 1, 1, 1, 0, 1]
*/
function solution(num_list) {
  return num_list.reverse();
}

// Lv.0 - 문자열 뒤집기
// 문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.
/* 예시
    my_string	return
    "jaron"	    "noraj"
    "bread"	    "daerb"
*/
function solution(my_string) {
  var answer = "";
  for (let i = my_string.length - 1; i >= 0; i--) answer += my_string[i];
  return answer;
}

// Lv.0 - 직각삼각형 출력하기
// "*"의 높이와 너비를 1이라고 했을 때, "*"을 이용해 직각 이등변 삼각형을 그리려고합니다. 정수 n 이 주어지면 높이와 너비가 n 인 직각 이등변 삼각형을 출력하도록 코드를 작성해보세요.
/* 예시
    input       3
    output      *
                **
                ***
*/
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  const n = parseInt(line);
  for (let i = 1; i <= n; i++) console.log("*".repeat(i));
  rl.close();
}).on("close", function () {
  process.exit();
});

// Lv.0 - 짝수 홀수 개수
// 정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
/* 예시
    num_list	        result
    [1, 2, 3, 4, 5]	    [2, 3]
    [1, 3, 5, 7]	    [0, 4]
*/
function solution(num_list) {
  return num_list.reduce(
    (arr, val) => {
      if (val % 2) arr[1]++;
      else arr[0]++;
      return arr;
    },
    [0, 0]
  );
}

// Lv.0 - 문자 반복 출력하기
// 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.
/* 예시
    my_string	n	result
    "hello"	    3	"hhheeellllllooo"
*/
function solution(my_string, n) {
  var answer = "";
  for (let i = 0; i < my_string.length; i++) answer += my_string[i].repeat(n);
  return answer;
}

// Lv.0 - 특정 문자 제거하기
// 문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
// 대문자와 소문자를 구분합니다.
/* 예시
    my_string	letter	result
    "abcdef"	"f"	    "abcde"
    "BCBdbe"	"B"	    "Cdbe"
*/
function solution(my_string, letter) {
  return my_string.replace(new RegExp(letter, "g"), "");
}

// Lv.0 - 각도기
// 각에서 0도 초과 90도 미만은 예각, 90도는 직각, 90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다. 각 angle이 매개변수로 주어질 때 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록 solution 함수를 완성해주세요.
/* 예시
    angle	result
    70	    1
    91	    3
    180	    4
*/
function solution(angle) {
  return angle < 90 ? 1 : angle === 90 ? 2 : angle === 180 ? 4 : 3;
}

// Lv.0 - 양꼬치
// 머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다. 양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다. 정수 n과 k가 매개변수로 주어졌을 때, 양꼬치 n인분과 음료수 k개를 먹었다면 총얼마를 지불해야 하는지 return 하도록 solution 함수를 완성해보세요.
/* 예시
    n	k	result
    10	3	124,000
    64	6	768,000
*/
function solution(n, k) {
  return n * 12000 + (k - Math.floor(n / 10)) * 2000;
}

// Lv.0 - 짝수의 합
// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.
/* 예시
    n	result
    10	30
    4	6
*/
function solution(n) {
  var answer = 0;
  for (let i = 2; i <= n; i += 2) answer += i;
  return answer;
}

// Lv.0 - 배열 자르기
// 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.
/* 예시
    numbers	            num1	num2	result
    [1, 2, 3, 4, 5]	    1	    3	    [2, 3, 4]
    [1, 3, 5]	        1	    2	    [3, 5]
*/
function solution(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1);
}

// Lv.0 - 외계행성의 나이
// 입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다. a는 0, b는 1, c는 2, ..., j는 9입니다.
// 나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.
/* 예시
    age	    result
    23	    "cd"
    51	    "fb"
    100	    "baa"
*/
function solution(age) {
  const newAge = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  return String(age)
    .split("")
    .map((v) => newAge[v])
    .join("");
}

// Lv.0 - 진료 순서 정하기
// 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.
// 중복된 원소는 없습니다.
/* 예시
    emergency	            result
    [3, 76, 24]	            [3, 1, 2]
    [1, 2, 3, 4, 5, 6, 7]	[7, 6, 5, 4, 3, 2, 1]
    [30, 10, 23, 6, 100]	[2, 4, 3, 5, 1]
*/
function solution(emergency) {
  const degree = Array.from(emergency).sort((a, b) => b - a);
  return emergency.map((v) => degree.indexOf(v) + 1);
}

// Lv.0 - 순서쌍의 개수
// 순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기합니다. 자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return하도록 solution 함수를 완성해주세요.
/* 예시
    n	    result
    20	    6
    100	    9
*/
function solution(n) {
  var answer = 0;
  const sqrt = Math.ceil(Math.sqrt(n));
  for (let i = 1; i < sqrt; i++) if (n % i === 0) answer++;
  return n === sqrt * sqrt ? answer * 2 + 1 : answer * 2;
}

// Lv.0 - 개미 군단
// 개미군단은 사냥감의 체력에 딱 맞는 병력을 데리고 나가려고 합니다. 장군개미는 5의 공격력을, 병정개미는 3의 공격력을 일개미는 1의 공격력을 가지고 있습니다.
// 사냥감의 체력 hp가 매개변수로 주어질 때, 사냥감의 체력에 딱 맞게 최소한의 병력을 구성하려면 몇 마리의 개미가 필요한지를 return하도록 solution 함수를 완성해주세요.
/* 예시
    hp	    result
    23	    5
    24	    6
    999	    201
*/
function solution(hp) {
  var answer = 0;
  while (hp > 0) {
    if (hp >= 5) {
      answer += Math.floor(hp / 5);
      hp %= 5;
    } else if (hp >= 3) {
      answer += Math.floor(hp / 3);
      hp %= 3;
    } else {
      answer += hp;
      break;
    }
  }
  return answer;
}

// Lv.0 - 모스부호 (1)
// 문자열 letter가 매개변수로 주어질 때, letter를 영어 소문자로 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.
/* 모스부호는 다음과 같습니다.
    morse = { 
        '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
        '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
        '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
        '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
        '-.--':'y','--..':'z'
    }
*/
// letter의 모스부호는 공백으로 나누어져 있습니다.
/* 예시
    letter	                    result
    ".... . .-.. .-.. ---"	    "hello"
    ".--. -.-- - .... --- -."	"python"
*/
function solution(letter) {
  const morse = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
  };
  return letter
    .split(" ")
    .map((v) => morse[v])
    .join("");
}

// Lv.0 - 가위 바위 보
// 가위는 2 바위는 0 보는 5로 표현합니다. 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때, rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.
/* 예시
    rsp	    result
    "2"	    "0"
    "205"	"052"
*/
function solution(rsp) {
  var answer = "";
  for (let i = 0; i < rsp.length; i++)
    answer += rsp[i] === "2" ? "0" : rsp[i] === "0" ? "5" : "2";
  return answer;
}

// Lv.0 - 구슬을 나누는 경우의 수
// 구슬은 모두 다르게 생겼습니다. 머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때, balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.
// 구슬을 고르는 순서는 고려하지 않습니다.
/* 예시
    balls	share	result
    3	    2	    3
    5	    3	    10
*/
function solution(balls, share) {
  const num = factorial(balls);
  const denom = factorial(balls - share) * factorial(share);
  return Math.round(num / denom);
}
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}

// Lv.0 - 점의 위치 구하기
/* 사분면은 아래와 같이 1부터 4까지 번호를매깁니다.
    - x 좌표와 y 좌표가 모두 양수이면 제1사분면에 속합니다.
    - x 좌표가 음수, y 좌표가 양수이면 제2사분면에 속합니다.
    - x 좌표와 y 좌표가 모두 음수이면 제3사분면에 속합니다.
    - x 좌표가 양수, y 좌표가 음수이면 제4사분면에 속합니다.
*/
// x 좌표 (x, y)를 차례대로 담은 정수 배열 dot이 매개변수로 주어집니다. 좌표 dot이 사분면 중 어디에 속하는지 1, 2, 3, 4 중 하나를 return 하도록 solution 함수를 완성해주세요.
// dot의 원소는 0이 아닙니다.
/* 예시
    dot	        result
    [2, 4]	    1
    [-7, 9]	    2
*/
function solution([x, y]) {
  if (x > 0 && y > 0) return 1;
  else if (x < 0 && y > 0) return 2;
  else if (x < 0 && y < 0) return 3;
  else return 4;
}

// Lv.0 - 2차원으로 만들기
// 정수 배열 num_list와 정수 n이 매개변수로 주어집니다. num_list를 다음 설명과 같이 2차원 배열로 바꿔 return하도록 solution 함수를 완성해주세요.
// num_list가 [1, 2, 3, 4, 5, 6, 7, 8] 로 길이가 8이고 n이 2이므로 num_list를 2 * 4 배열로 다음과 같이 변경합니다. 2차원으로 바꿀 때에는 num_list의 원소들을 앞에서부터 n개씩 나눠 2차원 배열로 변경합니다.
// num_list의 길이는 n의 배 수개입니다.
/* 예시
    num_list	                        n	result
    [1, 2, 3, 4, 5, 6, 7, 8]	        2	[[1, 2], [3, 4], [5, 6], [7, 8]]
    [100, 95, 2, 4, 5, 6, 18, 33, 948]	3	[[100, 95, 2], [4, 5, 6], [18, 33, 948]]
*/
function solution(num_list, n) {
  var answer = [];
  while (num_list.length) answer.push(num_list.splice(0, n));
  return answer;
}
