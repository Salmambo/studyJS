//2023.01.05.

// Lv.0 - 약수 구하기
// 정수 n이 매개변수로 주어질 때, n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.
/* 예시
    n   result
    24	[1, 2, 3, 4, 6, 8, 12, 24]
    29	[1, 29]
*/
function solution(n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) answer.push(i);
  }
  return answer;
}

// Lv.0 - 편지
// 머쓱이는 할머니께 생신 축하 편지를 쓰려고 합니다. 할머니가 보시기 편하도록 글자 한 자 한 자를 가로 2cm 크기로 적으려고 하며, 편지를 가로로만 적을 때, 축하 문구 message를 적기 위해 필요한 편지지의 최소 가로길이를 return 하도록 solution 함수를 완성해주세요.
// 공백도 하나의 문자로 취급합니다.
// message는 영문 알파벳 대소문자, ‘!’, ‘~’ 또는 공백으로만 이루어져 있습니다.
/* 예시
    message	            result
    "happy birthday!"	30
    "I love you~"	    22
*/
function solution(message) {
  return message.length * 2;
}

// Lv.0 - 가장 큰 수 찾기
// 정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
// array에 중복된 숫자는 없습니다.
/* 예시
    array	        result
    [1, 8, 3]	    [8, 1]
    [9, 10, 11, 8]	[11, 2]
*/
function solution(array) {
  var answer = [];
  answer.push(Math.max(...array));
  answer.push(array.indexOf(answer[0]));
  return answer;
}

// Lv.0 - 문자열 계산하기
// my_string은 "3 + 5"처럼 문자열로 된 수식입니다. 문자열 my_string이 매개변수로 주어질 때, 수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.
// 연산자는 +, -만 존재합니다.
// 문자열의 시작과 끝에는 공백이 없습니다.
// 0으로 시작하는 숫자는 주어지지 않습니다.
// 잘못된 수식은 주어지지 않습니다.
// my_string에는 연산자가 적어도 하나 포함되어 있습니다.
// my_string의 숫자와 연산자는 공백 하나로 구분되어 있습니다.
/* 예시
    my_string	result
    "3 + 4"	    7
*/
function solution(my_string) {
  my_string = my_string.split(" ");
  var answer = Number(my_string[0]);
  for (let i = 1; i < my_string.length; i += 2) {
    answer += Number(my_string[i + 1]) * (my_string[i] === "+" ? 1 : -1);
  }
  return answer;
}

// Lv.0 - 배열의 유사도
// 두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.
// s1과 s2의 원소는 알파벳 소문자로만 이루어져 있습니다
// s1과 s2는 각각 중복된 원소를 갖지 않습니다.
/* 예시
    s1	                s2	                            result
    ["a", "b", "c"]	    ["com", "b", "d", "p", "c"]	    2
    ["n", "omg"]	    ["m", "dot"]	                0
*/
function solution(s1, s2) {
  var answer = 0;
  for (const s of s1) {
    if (s2.indexOf(s) !== -1) answer++;
  }
  return answer;
}

// Lv.0 - 숫자 찾기
// 정수 num과 k가 매개변수로 주어질 때, num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를 return하고 없으면 -1을 return 하도록 solution 함수를 완성해보세요.
// num에 k가 여러 개 있으면 가장 처음 나타나는 자리를 return 합니다.
/* 예시
    num	    k	result
    29183	1	3
    232443	4	4
    123456	7	-1
*/
function solution(num, k) {
  var answer = String(num).indexOf(k);
  return answer === -1 ? -1 : answer + 1;
}

// Lv.0 - n의 배수 고르기
// 정수 n과 정수 배열 numlist가 매개변수로 주어질 때, numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.
/* 예시
    n	numlist	                        result
    3	[4, 5, 6, 7, 8, 9, 10, 11, 12]	[6, 9, 12]
    5	[1, 9, 3, 10, 13, 5]	        [10, 5]
    12	[2, 100, 120, 600, 12, 12]	    [120, 600, 12, 12]
*/
function solution(n, numlist) {
  return numlist.filter((v) => v % n === 0);
}

// Lv.0 - 자릿수 더하기
// 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요
/* 예시
    n	    result
    1234	10
    930211	16
*/
function solution(n) {
  return [...String(n)].reduce((acc, v) => acc + Number(v), 0);
}

// Lv.0 - OX퀴즈
// 덧셈, 뺄셈 수식들이 'X [연산자] Y = Z' 형태로 들어있는 문자열 배열 quiz가 매개변수로 주어집니다. 수식이 옳다면 "O"를 틀리다면 "X"를 순서대로 담은 배열을 return하도록 solution 함수를 완성해주세요.
// 연산 기호와 숫자 사이는 항상 하나의 공백이 존재합니다. 단 음수를 표시하는 마이너스 기호와 숫자 사이에는 공백이 존재하지 않습니다.
// [연산자]는 + 와 - 중 하나입니다.
/* 예시
    quiz	                                                    result
    ["3 - 4 = -3", "5 + 6 = 11"]	                            ["X", "O"]
    ["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"]	["O", "O", "X", "O"]
*/
function solution(quiz) {
  var answer = [];
  for (let str of quiz) {
    str = str.split(" = ");
    answer.push(eval(str[0]) == str[1] ? "O" : "X");
  }
  return answer;
}

// Lv.0 - 문자열안에 문자열
// 문자열 str1, str2가 매개변수로 주어집니다. str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.
/* 예시
    str1	                    str2	result
    "ab6CDE443fgh22iJKlmn1o"	"6CD"	1
    "ppprrrogrammers"	        "pppp"	2
*/
function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}

// Lv.0 - 제곱수 판별하기
// 어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.
/* 예시
    n	    result
    144	    1
    976	    2
*/
function solution(n) {
  return Math.pow(parseInt(Math.sqrt(n)), 2) === n ? 1 : 2;
}

// Lv.0 - 세균 증식
// 어떤 세균은 1시간에 두배만큼 증식한다고 합니다. 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.
/* 예시
    n	t	result
    2	10	2048
    7	15	229,376
*/
function solution(n, t) {
  return Math.pow(2, t) * n;
}

// Lv.0 - 문자열 정렬하기 (2)
// 영어 대소문자로 이루어진 문자열 my_string이 매개변수로 주어질 때, my_string을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.
/* 예시
    my_string	result
    "Bcad"	    "abcd"
    "heLLo"	    "ehllo"
    "Python"	"hnopty"
*/
function solution(my_string) {
  return [...my_string.toLowerCase()].sort().join("");
}

// Lv.0 - 7의 개수
// 머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.
/* 예시
    array	        result
    [7, 77, 17]	    4
    [10, 29]	    0
*/
function solution(array) {
  return array.join("").split("7").length - 1;
}

// Lv.0 - 잘라서 배열로 저장하기
// 문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.
/* 예시
    my_str	            n	result
    "abc1Addfggg4556b"	6	["abc1Ad", "dfggg4", "556b"]
    "abcdef123"	        3	["abc", "def", "123"]
*/
function solution(my_str, n) {
  var answer = [];
  for (let i = 0; i < my_str.length; i += n) {
    answer.push(my_str.slice(i, i + n));
  }
  return answer;
}

// Lv.0 - 문자열 밀기
// 문자열 "hello"에서 각 문자를 오른쪽으로 한 칸씩 밀고 마지막 문자는 맨 앞으로 이동시키면 "ohell"이 됩니다. 이것을 문자열을 민다고 정의한다면 문자열 A와 B가 매개변수로 주어질 때, A를 밀어서 B가 될 수 있다면 몇 번 밀어야 하는지 횟수를 return하고 밀어서 B가 될 수 없으면 -1을 return 하도록 solution 함수를 완성해보세요.
/* 예시
    A	        B	        result
    "hello"	    "ohell"	    1
    "apple"	    "elppa"	    -1
*/
function solution(A, B) {
  var answer = 0;
  A = [...A];
  for (let i = 0; i < A.length; i++) {
    if (A.join("") === B) return answer;
    A.unshift(A.at(-1));
    A.pop();
    answer++;
  }
  return -1;
}
/* 한 줄 풀이
function solution(A, B) {
  return (B + B).indexOf(A);
}*/

// Lv.0 - 종이 자르기
// 머쓱이는 큰 종이를 1 x 1 크기로 자르려고 합니다.
// 정수 M, N이 매개변수로 주어질 때, M x N 크기의 종이를 최소로 가위질 해야하는 횟수를 return 하도록 solution 함수를 완성해보세요.
// 종이를 겹쳐서 자를 수 없습니다.
/* 예시
    M	N	result
    2	2	3
    2	5	9
    1	1	0
*/
function solution(M, N) {
  return M * N - 1;
}

// Lv.0 - 연속된 수의 합
// 연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 두 정수 num과 total이 주어집니다. 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.
// num개의 연속된 수를 더하여 total이 될 수 없는 테스트 케이스는 없습니다.
/* 예시
    num	    total	result
    3	    12	    [3, 4, 5]
    5	    15	    [1, 2, 3, 4, 5]
    4	    14	    [2, 3, 4, 5]
    5	    5	    [-1, 0, 1, 2, 3]
*/
function solution(num, total) {
  var answer = [];
  let k = 0;
  for (let i = 1; i < num; i++) k += i;
  const n = (total - k) / num;
  for (let i = 0; i < num; i++) answer.push(n + i);
  return answer;
}

// Lv.0 - 다음에 올 숫자
// 등차수열 혹은 등비수열 common이 매개변수로 주어질 때, 마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.
/* 예시
    common	        result
    [1, 2, 3, 4]	5
    [2, 4, 8]	    16
*/
function solution(common) {
  return common[1] - common[0] === common.at(-1) - common.at(-2)
    ? common[1] - common[0] + common.at(-1)
    : (common[1] / common[0]) * common.at(-1);
}

// Lv.0 - 옹알이 (1)
// 머쓱이는 태어난 지 6개월 된 조카를 돌보고 있습니다. 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음을 최대 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못합니다. 문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.
// babbling의 각 문자열에서 "aya", "ye", "woo", "ma"는 각각 최대 한 번씩만 등장합니다.
/* 예시
    babbling	                                    result
    ["aya", "yee", "u", "maa", "wyeoo"]	            1
    ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]	    3
*/
function solution(babbling) {
  var answer = 0;
  for (let str of babbling) {
    if (str.replace(/aya|ye|woo|ma/g, "").length === 0) answer++;
  }
  return answer;
}
