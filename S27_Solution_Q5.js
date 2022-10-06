//2022.10.06.

// Lv.1 - 숫자 문자열과 영단어
// 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.
// 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.
/* 참고로 각 숫자에 대응되는 영단어는 다음 표와 같습니다.
    숫자	영단어
    0	    zero
    1	    one
    2	    two
    3	    three
    4	    four
    5	    five
    6	    six
    7	    seven
    8	    eight
    9	    nine
*/
// s가 "zero" 또는 "0"으로 시작하는 경우는 주어지지 않습니다.
/* 예시
    s                   result
    "one4seveneight"    1478
    "23four5six7"	    234567
    "2three45sixseven"	234567
    "123"	            123
*/
function solution(s) {
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
  for (let i = 0; i < map.length; i++) {
    const arr = s.split(map[i]);
    s = arr.join(i);
  }
  return Number(s);
}

// Lv.1 - 부족한 금액 계산하기
// 새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다. 이 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다.
// 놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요.
// 단, 금액이 부족하지 않으면 0을 return 하세요.
/* 예시
    price	  money	  count	  result
    3	      20	    4	      10
*/
function solution(price, money, count) {
  var answer =
    price *
      // 아래를 줄이면
      ((count + 1) * Math.floor(count / 2) +
        (count % 2 ? Math.ceil(count / 2) : 0)) -
    // count * (count + 1) / 2
    money;
  return answer > 0 ? answer : 0;
}

// Lv.1 - 없는 숫자 더하기
// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.
/* 예시
    numbers	            result
    [1,2,3,4,6,7,8,0]	  14
    [5,8,4,0,6,7,9]	    6
*/
function solution(numbers) {
  return numbers.reduce((acc, val) => acc - val, 45);
  // for문 돌린 Java가 더 빨랐다
}

// Lv.1 - 최소직사각형
// 명함 지갑을 만드는 회사에서 지갑의 크기를 정하려고 합니다. 다양한 모양과 크기의 명함들을 모두 수납할 수 있으면서, 작아서 들고 다니기 편한 지갑을 만들어야 합니다. 이러한 요건을 만족하는 지갑을 만들기 위해 디자인팀은 모든 명함의 가로 길이와 세로 길이를 조사했습니다.
// 모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다. 모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하도록 solution 함수를 완성해주세요.
/* 예시
    sizes                                   result
    [[60,50],[30,70],[60,30],[80,40]]	      4000
    [[10,7],[12,3],[8,15],[14,7],[5,15]]	  120
    [[14,4],[19,6],[6,16],[18,7],[7,11]]	  133
*/
function solution(sizes) {
  const temp = [0, 0];
  for (const size of sizes) {
    temp[0] = Math.max(temp[0], Math.max(size[0], size[1]));
    temp[1] = Math.max(temp[1], Math.min(size[0], size[1]));
  }
  return temp[0] * temp[1];
}

// Lv.1 - 나머지가 1이 되는 수 찾기
// 자연수 n이 매개변수로 주어집니다. n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.
/* 예시
    n     result
    10    3
    12    11
*/
function solution(n) {
  for (let i = 2; i < n; i++) if (n % i === 1) return i;
}
