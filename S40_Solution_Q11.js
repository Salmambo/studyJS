//2023.01.10.

// 삼총사
// 한국중학교에 다니는 학생들은 각자 정수 번호를 갖고 있습니다. 이 학교 학생 3명의 정수 번호를 더했을 때 0이 되면 3명의 학생은 삼총사라고 합니다.
// 한국중학교 학생들의 번호를 나타내는 정수 배열 number가 매개변수로 주어질 때, 학생들 중 삼총사를 만들 수 있는 방법의 수를 return 하도록 solution 함수를 완성하세요.
// 서로 다른 학생의 정수 번호가 같을 수 있습니다.
/* 예시
    number	                    result
    [-2, 3, 0, 2, -5]	        2
    [-3, -2, -1, 0, 1, 2, 3]	5
    [-1, 1, -1, 1]	            0
*/
function solution(number) {
  var answer = 0;
  for (let i = 0; i < number.length - 2; i++)
    for (let j = i + 1; j < number.length - 1; j++)
      for (let k = j + 1; k < number.length; k++)
        if (number[i] + number[j] + number[k] === 0) answer++;
  return answer;
}
/* 조합 함수 사용 - 런타임은 위보다 오래 걸림
function solution(number) {
  var answer = 0;
  const combi = (arr, start) => {
    if (arr.length === 3 && arr[0] + arr[1] + arr[2] === 0) return answer++;
    for (let i = start; i < number.length; i++)
      combi([...arr, number[i]], i + 1);
  };
  combi([], 0);
  return answer;
}*/

// 콜라 문제
// 이 문제는 빈 병 a개를 가져다주면 콜라 b병을 주는 마트가 있을 때, 빈 병 n개를 가져다주면 몇 병을 받을 수 있는지 계산하는 문제입니다.
// 보유 중인 빈 병이 a개 미만이면, 추가적으로 빈 병을 받을 순 없습니다.
// 콜라를 받기 위해 마트에 주어야 하는 병 수 a, 빈 병 a개를 가져다 주면 마트가 주는 콜라 병 수 b, 상빈이가 가지고 있는 빈 병의 개수 n이 매개변수로 주어집니다. 상빈이가 받을 수 있는 콜라의 병 수를 return 하도록 solution 함수를 작성해주세요.
/* 예시
    a	b	n	result
    2	1	20	19
    3	1	20	9
*/
function solution(a, b, n) {
  var answer = 0;
  while (n >= a) {
    const x = Math.floor(n / a) * b;
    answer += x;
    n = (n % a) + x;
  }
  return answer;
}

// 옹알이 (2)
// 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음과 네 가지 발음을 조합해서 만들 수 있는 발음밖에 하지 못하고 연속해서 같은 발음을 하는 것을 어려워합니다. 문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.
/* 예시
    babbling	                                    result
    ["aya", "yee", "u", "maa"]	                    1
    ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]	2
*/
function solution(babbling) {
  var answer = 0;
  for (let str of babbling) {
    str = str
      .replace(/aya|ye|woo|ma/g, (s) => `${s} `)
      .trim()
      .split(" ");
    for (let i = 0; i < str.length; i++) {
      if (str[i].replace(/aya|ye|woo|ma/g, "").length || str[i] === str[i + 1])
        break;
      if (i === str.length - 1) answer++;
    }
  }
  return answer;
}

// 햄버거 만들기
// 햄버거 가게에서 일을 하는 상수는 햄버거를 포장하는 일을 합니다. 함께 일을 하는 다른 직원들이 햄버거에 들어갈 재료를 조리해 주면 조리된 순서대로 상수의 앞에 아래서부터 위로 쌓이게 되고, 상수는 순서에 맞게 쌓여서 완성된 햄버거를 따로 옮겨 포장을 하게 됩니다. 상수가 일하는 가게는 정해진 순서(아래서부터, 빵 – 야채 – 고기 - 빵)로 쌓인 햄버거만 포장을 합니다. 상수는 손이 굉장히 빠르기 때문에 상수가 포장하는 동안 속 재료가 추가적으로 들어오는 일은 없으며, 재료의 높이는 무시하여 재료가 높이 쌓여서 일이 힘들어지는 경우는 없습니다.
// 상수에게 전해지는 재료의 정보를 나타내는 정수 배열 ingredient가 주어졌을 때, 상수가 포장하는 햄버거의 개수를 return 하도록 solution 함수를 완성하시오.
// ingredient의 원소는 1, 2, 3 중 하나의 값이며, 순서대로 빵, 야채, 고기를 의미합니다.
/* 예시
    ingredient	                    result
    [2, 1, 1, 2, 3, 1, 2, 3, 1]	    2
    [1, 3, 2, 1, 2, 1, 3, 1, 2]	    0
*/
function solution(ingredient) {
  var answer = 0;
  const arr = [];
  for (const i of ingredient) {
    arr.push(i);
    if (
      arr.at(-1) === 1 &&
      arr.at(-2) === 3 &&
      arr.at(-3) === 2 &&
      arr.at(-4) === 1
    ) {
      answer++;
      arr.pop();
      arr.pop();
      arr.pop();
      arr.pop();
    }
  }
  return answer;
}

// 푸드 파이트 대회
// 수웅이는 매달 주어진 음식을 빨리 먹는 푸드 파이트 대회를 개최합니다. 이 대회에서 선수들은 1대 1로 대결하며, 매 대결마다 음식의 종류와 양이 바뀝니다. 대결은 준비된 음식들을 일렬로 배치한 뒤, 한 선수는 제일 왼쪽에 있는 음식부터 오른쪽으로, 다른 선수는 제일 오른쪽에 있는 음식부터 왼쪽으로 순서대로 먹는 방식으로 진행됩니다. 중앙에는 물을 배치하고, 물을 먼저 먹는 선수가 승리하게 됩니다.
// 수웅이가 준비한 음식의 양을 칼로리가 적은 순서대로 나타내는 정수 배열 food가 주어졌을 때, 대회를 위한 음식의 배치를 나타내는 문자열을 return 하는 solution 함수를 완성해주세요.
// food[i]는 i번 음식의 수입니다.
// food[0]은 수웅이가 준비한 물의 양이며, 항상 1입니다.
/* 예시
    food	        result
    [1, 3, 4, 6]	"1223330333221"
    [1, 7, 1, 2]	"111303111"
*/
function solution(food) {
  let left = (right = "");
  for (let i = 1; i < food.length; i++) {
    while (food[i] > 1) {
      left = left + i;
      right = i + right;
      food[i] -= 2;
    }
  }
  return left + 0 + right;
}

// 과일 장수
// 과일 장수가 사과 상자를 포장하고 있습니다. 사과는 상태에 따라 1점부터 k점까지의 점수로 분류하며, k점이 최상품의 사과이고 1점이 최하품의 사과입니다.
/* 사과 한 상자의 가격은 다음과 같이 결정됩니다.
    한 상자에 사과를 m개씩 담아 포장합니다.
    상자에 담긴 사과 중 가장 낮은 점수가 p (1 ≤ p ≤ k)점인 경우, 사과 한 상자의 가격은 p * m 입니다.
*/
// 과일 장수가 가능한 많은 사과를 팔았을 때, 얻을 수 있는 최대 이익을 계산하고자 합니다.(사과는 상자 단위로만 판매하며, 남는 사과는 버립니다)
// (최저 사과 점수) x (한 상자에 담긴 사과 개수) x (상자의 개수)
// 사과의 최대 점수 k, 한 상자에 들어가는 사과의 수 m, 사과들의 점수 score가 주어졌을 때, 과일 장수가 얻을 수 있는 최대 이익을 return하는 solution 함수를 완성해주세요.
// 이익이 발생하지 않는 경우에는 0을 return 해주세요.
/* 예시
    k	m	score	                                result
    3	4	[1, 2, 3, 1, 2, 3, 1]	                8
    4	3	[4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]	33
*/
function solution(k, m, score) {
  score.sort((a, b) => a - b);
  var answer = 0;
  while (score.length >= m) {
    const arr = [];
    for (let i = 0; i < m; i++) arr.push(score.pop());
    answer += arr.at(-1) * m;
  }
  return answer;
}

// 기사단원의 무기
// 숫자나라 기사단의 각 기사에게는 1번부터 number까지 번호가 지정되어 있습니다. 기사들은 무기점에서 무기를 구매하려고 합니다.
// 각 기사는 자신의 기사 번호의 약수 개수에 해당하는 공격력을 가진 무기를 구매하려 합니다. 단, 이웃나라와의 협약에 의해 공격력의 제한수치를 정하고, 제한수치보다 큰 공격력을 가진 무기를 구매해야 하는 기사는 협약기관에서 정한 공격력을 가지는 무기를 구매해야 합니다.
// 무기를 만들 때, 무기의 공격력 1당 1kg의 철이 필요합니다. 그래서 무기점에서 무기를 모두 만들기 위해 필요한 철의 무게를 미리 계산하려 합니다.
// 기사단원의 수를 나타내는 정수 number와 이웃나라와 협약으로 정해진 공격력의 제한수치를 나타내는 정수 limit와 제한수치를 초과한 기사가 사용할 무기의 공격력을 나타내는 정수 power가 주어졌을 때, 무기점의 주인이 무기를 모두 만들기 위해 필요한 철의 무게를 return 하는 solution 함수를 완성하시오.
/* 예시
    number	limit	power	result
    5	    3	    2	    10
    10	    3	    2	    21
*/
function solution(number, limit, power) {
  var answer = 1;
  for (let i = 2; i <= number; i++) {
    let cnt = 0;
    for (let j = 1; j < Math.sqrt(i); j++) {
      if (i % j === 0) cnt += 2;
    }
    if (Number.isInteger(Math.sqrt(i))) cnt++;
    answer += cnt > limit ? power : cnt;
  }
  return answer;
}

// 명예의 전당 (1)
// "명예의 전당"이라는 TV 프로그램에서는 매일 1명의 가수가 노래를 부르고, 시청자들의 문자 투표수로 가수에게 점수를 부여합니다. 매일 출연한 가수의 점수가 지금까지 출연 가수들의 점수 중 상위 k번째 이내이면 해당 가수의 점수를 명예의 전당이라는 목록에 올려 기념합니다. 즉 프로그램 시작 이후 초기에 k일까지는 모든 출연 가수의 점수가 명예의 전당에 오르게 됩니다. k일 다음부터는 출연 가수의 점수가 기존의 명예의 전당 목록의 k번째 순위의 가수 점수보다 더 높으면, 출연 가수의 점수가 명예의 전당에 오르게 되고 기존의 k번째 순위의 점수는 명예의 전당에서 내려오게 됩니다.
// 이 프로그램에서는 매일 "명예의 전당"의 최하위 점수를 발표합니다.
// 명예의 전당 목록의 점수의 개수 k, 1일부터 마지막 날까지 출연한 가수들의 점수인 score가 주어졌을 때, 매일 발표된 명예의 전당의 최하위 점수를 return하는 solution 함수를 완성해주세요.
/* 예시
    k	score	                                        result
    3	[10, 100, 20, 150, 1, 100, 200]	                [10, 10, 10, 20, 20, 100, 100]
    4	[0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]	[0, 0, 0, 0, 20, 40, 70, 70, 150, 300]
*/
function solution(k, score) {
  var answer = [];
  const arr = [];
  for (const i of score) {
    arr.push(i);
    arr.sort((a, b) => a - b);
    if (arr.length > k) arr.shift();
    answer.push(arr[0]);
  }
  return answer;
}

// 문자열 나누기
/* 문자열 s가 입력되었을 때 다음 규칙을 따라서 이 문자열을 여러 문자열로 분해하려고 합니다.
    먼저 첫 글자를 읽습니다. 이 글자를 x라고 합시다.
    이제 이 문자열을 왼쪽에서 오른쪽으로 읽어나가면서, x와 x가 아닌 다른 글자들이 나온 횟수를 각각 셉니다. 처음으로 두 횟수가 같아지는 순간 멈추고, 지금까지 읽은 문자열을 분리합니다.
    s에서 분리한 문자열을 빼고 남은 부분에 대해서 이 과정을 반복합니다. 남은 부분이 없다면 종료합니다.
    만약 두 횟수가 다른 상태에서 더 이상 읽을 글자가 없다면, 역시 지금까지 읽은 문자열을 분리하고, 종료합니다.
*/
// 문자열 s가 매개변수로 주어질 때, 위 과정과 같이 문자열들로 분해하고, 분해한 문자열의 개수를 return 하는 함수 solution을 완성하세요.
/* 예시
    s	                result
    "banana"	        3
    "abracadabra"	    6
    "aaabbaccccabba"	3
*/
function solution(s) {
  var answer = 0;
  let one = (other = i = 0);
  while (i < s.length) {
    if (s[0] === s[i]) one++;
    else other++;
    if (one === other) {
      s = s.slice(i + 1);
      answer++;
      one = other = i = 0;
    } else i++;
  }
  if (s) answer++;
  return answer;
}

// 가장 가까운 같은 글자
// 문자열 s가 주어졌을 때, s의 각 위치마다 자신보다 앞에 나왔으면서, 자신과 가장 가까운 곳에 있는 같은 글자가 어디 있는지 알고 싶습니다.
/* 예를 들어, s="banana"라고 할 때,  각 글자들을 왼쪽부터 오른쪽으로 읽어 나가면서 다음과 같이 진행할 수 있습니다.
    b는 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
    a는 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
    n은 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
    a는 자신보다 두 칸 앞에 a가 있습니다. 이는 2로 표현합니다.
    n도 자신보다 두 칸 앞에 n이 있습니다. 이는 2로 표현합니다.
    a는 자신보다 두 칸, 네 칸 앞에 a가 있습니다. 이 중 가까운 것은 두 칸 앞이고, 이는 2로 표현합니다.
*/
// 문자열 s이 주어질 때, 위와 같이 정의된 연산을 수행하는 함수 solution을 완성해주세요.
/* 예시
    s	        result
    "banana"	[-1, -1, -1, 2, 2, 2]
    "foobar"	[-1, -1, 1, -1, -1, -1]
*/
function solution(s) {
  var answer = [];
  for (let i = 0; i < s.length; i++) {
    let first = true;
    for (let j = i - 1; j >= 0; j--) {
      if (s[i] === s[j]) {
        answer.push(i - j);
        first = false;
        break;
      }
    }
    if (first) answer.push(-1);
  }
  return answer;
}

// 크기가 작은 부분문자열
// 숫자로 이루어진 문자열 t와 p가 주어질 때, t에서 p와 길이가 같은 부분문자열 중에서, 이 부분문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 것이 나오는 횟수를 return하는 함수 solution을 완성하세요.
/* 예시
    t	            p	    result
    "3141592"	    "271"	2
    "500220839878"	"7"	    8
    "10203"	        "15"	3
*/
function solution(t, p) {
  var answer = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    const s = t.slice(i, i + p.length);
    if (Number(s) <= Number(p)) answer++;
  }
  return answer;
}
