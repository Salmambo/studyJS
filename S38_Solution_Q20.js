//2022.10.26.

// Lv.0 - 저주의 숫자 3
// 3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 3의 배수와 숫자 3을 사용하지 않습니다.
// 정수 n이 매개변수로 주어질 때, n을 3x 마을에서 사용하는 숫자로 바꿔 return하도록 solution 함수를 완성해주세요.
/* 예시
    n	    result
    15	    25
    40	    76
*/
function solution(n) {
  var answer = [];
  for (let i = 1; answer.length < n; i++)
    if (i % 3 !== 0 && !String(i).includes("3")) answer.unshift(i);
  return answer[0];
}

// Lv.0 - 평행
// 점 네 개의 좌표를 담은 이차원 배열  dots가 다음과 같이 매개변수로 주어집니다.
//     [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]
// 주어진 네 개의 점을 두 개씩 이었을 때, 두 직선이 평행이 되는 경우가 있으면 1을 없으면 0을 return 하도록 solution 함수를 완성해보세요.
// 두 직선이 겹치는 경우(일치하는 경우)에도 1을 return 해주세요.
/* 예시
    dots	                            result
    [[1, 4], [9, 2], [3, 8], [10, 4]]	1
    [[3, 5], [4, 1], [2, 4], [5, 10]]	0
*/
function solution(dots) {
  // [1,2,3,4] > (1,2),(1,3),(1,4)
  // 기울기 = (y2 - y1) / (x2 - x1)
  const slope = ([x1, y1], [x2, y2]) =>
    x1 === x2 ? "l" : (y2 - y1) / (x2 - x1);
  if (
    slope(dots[0], dots[1]) === slope(dots[2], dots[3]) ||
    slope(dots[0], dots[2]) === slope(dots[1], dots[3]) ||
    slope(dots[0], dots[3]) === slope(dots[1], dots[2])
  )
    return 1;
  return 0;
}

// Lv.0 - 겹치는 선분의 길이
// 빨간색, 초록색, 파란색 선분이 x축 위에 있습니다. 세 선분의 x좌표 시작과 끝이 [[start, end], [start, end], [start, end]] 형태로 들어있는 2차원 배열 lines가 매개변수로 주어질 때, 두 개 이상의 선분이 겹치는 부분의 길이를return 하도록 solution 함수를 완성해보세요.
/* 예시
    lines	                    result
    [[0, 1], [2, 5], [3, 9]]	2
    [[-1, 1], [1, 3], [3, 9]]	0
    [[0, 5], [3, 9], [1, 10]]	8
*/
function solution(lines) {
  const map = new Map();
  for (const [start, end] of lines)
    for (let i = start; i < end; i++) map.set(i, (map.get(i) || 0) + 1);
  return [...map.values()].filter((v) => v > 1).length;
}

// Lv.0 - 유한소수 판별하기
// 소수점 아래 숫자가 계속되지 않고 유한개인 소수를 유한소수라고 합니다. 분수를 소수로 고칠 때 유한소수로 나타낼 수 있는 분수인지 판별하려고 합니다. 유한소수가 되기 위한 분수의 조건은 다음과 같습니다.
//     기약분수로 나타내었을 때, 분모의 소인수가 2와 5만 존재해야 합니다.
// 두 정수 a와 b가 매개변수로 주어질 때, a/b가 유한소수이면 1을, 무한소수라면 2를 return하도록 solution 함수를 완성해주세요.
/* 예시
    a	    b	    result
    7	    20	    1
    11	    22	    1
    12	    21	    2
*/
function solution(a, b) {
  for (let i = Math.min(a, b); i > 1; i--)
    if (a % i === 0 && b % i === 0) {
      a /= i;
      b /= i;
      break;
    }
  while (b > 1)
    if (b % 2 === 0) b /= 2;
    else if (b % 5 === 0) b /= 5;
    else return 2;
  return 1;
}

// Lv.0 - 특이한 정렬
// 정수 n을 기준으로 n과 가까운 수부터 정렬하려고 합니다. 이때 n으로부터의 거리가 같다면 더 큰 수를 앞에 오도록 배치합니다. 정수가 담긴 배열 numlist와 정수 n이 주어질 때 numlist의 원소를 n으로부터 가까운 순서대로 정렬한 배열을 return하도록 solution 함수를 완성해주세요.
/* 예시
    numlist	                        n	    result
    [1, 2, 3, 4, 5, 6]	            4	    [4, 5, 3, 6, 2, 1]
    [10000,20,36,47,40,6,10,7000]	  30	  [36, 40, 20, 47, 10, 6, 7000, 10000]
*/
function solution(numlist, n) {
  numlist.sort((a, b) => b - a);
  const map = new Map();
  for (const num of numlist) {
    const key = Math.abs(n - num);
    if (map.has(key)) map.set(key, [...map.get(key), num]);
    else map.set(key, [num]);
  }
  const keys = [...map.keys()].sort((a, b) => a - b);
  var answer = [];
  for (const key of keys) answer.push(...map.get(key));
  return answer;
}
// 한 줄 코드 - 게다가 훨씬 빠름
function solution(numlist, n) {
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}

// Lv.0 - 등수 매기기
// 영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다. 영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때, 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요.
/* 예시
    score	                                    result
    [[80, 70], [90, 50], [40, 70], [50, 80]]	[1, 2, 4, 3]
    [[80, 70], [70, 80], [30, 50], [90, 100],   [4, 4, 6, 2, 2, 1, 7]
    [100, 90], [100, 100], [10, 30]]	
*/
function solution(score) {
  const map = new Map();
  score.forEach(([e, m], i) => {
    const aver = (e + m) / 2;
    if (map.has(aver)) map.set(aver, [...map.get(aver), i]);
    else map.set(aver, [i]);
  });
  const rank = [...map.keys()].sort((a, b) => b - a);
  let tie = 1;
  for (let i = 0; i < rank.length; i++) {
    const idx = map.get(rank[i]);
    for (const j of idx) score[j] = i + tie;
    tie += idx.length - 1;
  }
  return score;
}

// Lv.0 - 로그인 성공?
// 머쓱이가 입력한 아이디와 패스워드가 담긴 배열 id_pw와 회원들의 정보가 담긴 2차원 배열 db가 주어질 때, 다음과 같이 로그인 성공, 실패에 따른 메시지를 return하도록 solution 함수를 완성해주세요.
//     아이디와 비밀번호가 모두 일치하는 회원정보가 있으면 "login"을 return합니다.
//     로그인이 실패했을 때 아이디가 일치하는 회원이 없다면 “fail”를, 아이디는 일치하지만 비밀번호가 일치하는 회원이 없다면 “wrong pw”를 return 합니다.
// 회원들의 비밀번호는 같을 수 있지만 아이디는 같을 수 없습니다.
/* 예시
    id_pw	                    db	                                        result
    ["meosseugi", "1234"]	    [["rardss", "123"], ["yyoom", "1234"],      "login"
                                ["meosseugi", "1234"]]	
    ["programmer01", "15789"]	[["programmer02", "111111"],                "wrong pw"
                                ["programmer00", "134"], ["programmer01", "1145"]]	
    ["rabbit04", "98761"]	    [["jaja11", "98761"],                       "fail"
                                ["krong0313", "29440"], ["rabbit00", "111333"]]	
*/
function solution(id_pw, db) {
  for (const [id, pw] of db)
    if (id === id_pw[0] && pw === id_pw[1]) return "login";
    else if (id === id_pw[0]) return "wrong pw";
  return "fail";
}

// Lv.0 - 치킨 쿠폰
// 프로그래머스 치킨은 치킨을 시켜먹으면 한 마리당 쿠폰을 한 장 발급합니다. 쿠폰을 열 장 모으면 치킨을 한 마리 서비스로 받을 수 있고, 서비스 치킨에도 쿠폰이 발급됩니다. 시켜먹은 치킨의 수 chicken이 매개변수로 주어질 때 받을 수 있는 최대 서비스 치킨의 수를 return하도록 solution 함수를 완성해주세요.
/* 예시
    chicken	    result
    100	        11
    1,081	    120
*/
function solution(chicken) {
  var answer = 0;
  while (chicken >= 10) {
    const temp = Math.floor(chicken / 10);
    chicken = temp + (chicken % 10);
    answer += temp;
  }
  return answer;
}
// 한 줄 코드
function solution(chicken) {
  return parseInt((chicken - 1) / 9);
}

// Lv.0 - 이진수 더하기
// 이진수를 의미하는 두 개의 문자열 bin1과 bin2가 매개변수로 주어질 때, 두 이진수의 합을 return하도록 solution 함수를 완성해주세요.
/* 예시
    bin1	bin2	result
    "10"	"11"	"101"
    "1001"	"1111"	"11000"
*/
function solution(bin1, bin2) {
  return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}

// Lv.0 - A로 B 만들기
// 문자열 before와 after가 매개변수로 주어질 때, before의 순서를 바꾸어 after를 만들 수 있으면 1을, 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.
/* 예시
    before	    after	    result
    "olleh"	    "hello"	    1
    "allpe"	    "apple"	    0
*/
function solution(before, after) {
  const map = new Map();
  for (let i = 0; i < before.length; i++) {
    map.set(before[i], (map.get(before[i]) || 0) + 1);
    map.set(after[i], (map.get(after[i]) || 0) - 1);
  }
  for (const [_, v] of map) if (v !== 0) return 0;
  return 1;
}

// Lv.0 - k의 개수
// 1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.
/* 예시
    i	j	k	result
    1	13	1	6
    10	50	5	5
    3	10	2	0
*/
function solution(i, j, k) {
  var answer = "";
  for (i; i <= j; i++) answer += i;
  return answer.split(k).length - 1;
}

// Lv.0 - 중복된 문자 제거
// 문자열 my_string이 매개변수로 주어집니다. my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.
/* 예시
    my_string	        result
    "people"	        "peol"
    "We are the world"	"We arthwold"
*/
function solution(my_string) {
  return [...new Set([...my_string])].join("");
}

// Lv.0 - 삼각형의 완성조건 (1)
// 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
//     가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
// 삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.
/* 예시
    sides	        result
    [1, 2, 3]	    2
    [3, 6, 2]	    2
    [199, 72, 222]	1
*/
function solution(sides) {
  sides.sort((a, b) => a - b);
  return sides[0] + sides[1] > sides[2] ? 1 : 2;
}

// Lv.0 - 가까운 수
// 정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.
/* 예시
    array	        n	    result
    [3, 10, 28]	    20	    28
    [10, 11, 12]	13	    12
*/
function solution(array, n) {
  return array.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || a - b)[0];
}

// Lv.0 - 369게임
// 369게임은 1부터 숫자를 하나씩 대며 3, 6, 9가 들어가는 숫자는 숫자 대신 3, 6, 9의 개수만큼 박수를 치는 게임입니다. 머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때, 머쓱이가 쳐야할 박수 횟수를 return 하도록 solution 함수를 완성해보세요.
/* 예시
    order	result
    3	    1
    29423	2
*/
function solution(order) {
  return String(order).split(/[369]/).length - 1;
}

// Lv.0 - 암호 해독
// 군 전략가 머쓱이는 전쟁 중 적군이 다음과 같은 암호 체계를 사용한다는 것을 알아냈습니다.
//     암호화된 문자열 cipher를 주고받습니다.
//     그 문자열에서 code의 배수 번째 글자만 진짜 암호입니다.
// 문자열 cipher와 정수 code가 매개변수로 주어질 때 해독된 암호 문자열을 return하도록 solution 함수를 완성해주세요.
/* 예시
    cipher	                    code	result
    "dfjardstddetckdaccccdegk"	4	    "attack"
    "pfqallllabwaoclk"	        2	    "fallback"
*/
function solution(cipher, code) {
  var answer = "";
  for (let i = 0; i < cipher.length; i++)
    if ((i + 1) % code === 0) answer += cipher[i];
  return answer;
}

// Lv.0 - 대문자와 소문자
// 문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.
/* 예시
    my_string	    result
    "cccCCC"	    "CCCccc"
    "abCdEfghIJ"	"ABcDeFGHij"
*/
function solution(my_string) {
  var answer = "";
  for (const s of my_string) {
    const c = s.charCodeAt(0);
    if (c < 91) answer += s.toLowerCase();
    else answer += s.toUpperCase();
  }
  return answer;
}

// Lv.0 - 영어가 싫어요
// 영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.
/* 예시
    numbers	                                result
    "onetwothreefourfivesixseveneightnine"	123456789
    "onefourzerosixseven"	                14067
*/
function solution(numbers) {
  const map = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var answer = "";
  let start = 0,
    end = 3;
  while (start < numbers.length) {
    const number = map.indexOf(numbers.slice(start, end));
    if (number === -1) end++;
    else {
      answer += number;
      start = end;
      end += 3;
    }
  }
  return Number(answer);
}
// 두 줄 코드
function solution(numbers) {
  const map = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  return Number(
    numbers.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, (s) =>
      map.indexOf(s)
    )
  );
}

// Lv.0 - 인덱스 바꾸기
// 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.
/* 예시
    my_string	    num1	num2	result
    "hello"	        1	    2	    "hlelo"
    "I love you"	3	    6	    "I l veoyou"
*/
function solution(my_string, num1, num2) {
  var answer = "";
  for (let i = 0; i < my_string.length; i++)
    answer +=
      i === num1
        ? my_string[num2]
        : i === num2
        ? my_string[num1]
        : my_string[i];
  return answer;
}
// 더 빠른 코드
function solution(my_string, num1, num2) {
  my_string = my_string.split("");
  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]]; // 배열 속 값끼리 바꾸는 방법
  return my_string.join("");
}

// Lv.0 - 한 번만 등장한 문자
// 문자열 s가 매개변수로 주어집니다. s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.
// s는 소문자로만 이루어져 있습니다.
/* 예시
    s	            result
    "abcabcadc"	    "d"
    "abdc"	        "abcd"
    "hello"	        "eho"
*/
function solution(s) {
  return [...s]
    .sort()
    .filter((v, _, a) => a.indexOf(v) === a.lastIndexOf(v))
    .join("");
}
