//2022.08.18.

//엘리스 토끼의 수학 숙제
//수학을 정말 싫어하는 엘리스 토끼는 수학 선생님에게 1부터 N까지의 합의 제곱을 구해오라는 숙제를 받았습니다. 그런데 엘리스 토끼가 실수로 합의 제곱이 아닌 제곱의 합을 구해버렸습니다.
//이에 수학 선생님은 정답과 엘리스 토끼의 답의 차이만큼 벌을 주려고 합니다.
/* 지시사항
    아래 수식을 참고하여 1부터 매개변수 num 까지의 합의 제곱과 제곱의 합의 차이를 출력하세요.
        합의 제곱 수식
        (1 + 2 + 3 + ・・・ 8 + 9 + N)^2
        제곱의 합 수식
        1^2 + 2^2 + 3^2 + ・・・ 8^2 + 9^2 + N^2
*/
/* 예시
    입력    출력
    10      2640
*/
function solution(num) {
    let sum = 0, pow = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
        pow += i * i;
    }
    return sum * sum - pow;
}

//구슬 꾸러미
//엘리스 토끼는 구슬 장사를 위해 구슬을 꾸러미에 담아 포장을 하고 있습니다. 엘리스 토끼가 준비한 구슬은 색상별로 무게가 모두 다르며 구슬 꾸러미 또한 구슬을 담아낼 수 있는 무게가 모두 달라 최소한의 구슬 개수를 활용해 꾸러미를 채우려고 합니다.
/* 색깔과 무게가 다른 3가지 종류의 구슬이 무제한으로 주어집니다.
    구슬        무게
    빨간 구슬   250g
    파란 구슬   40g
    흰 구슬     10g
*/
/* 지시사항
    input 매개변수로부터 구슬 꾸러미의 무게를 입력받고 꾸러미를 만드는 데 사용되는 최소 구슬의 수를 출력하세요.
        (1 ≤ input ≤ 10,000)
        만약 무게에 맞추어 꾸러미를 만들 수 없는 경우에는 -1을 출력하세요.
*/
/* 예시
    입력    출력
    300     3
    550     4
    65      -1
*/
function solution(input) {
    if (input % 10 != 0)
        return -1;
    let count = 0, red = 250, blue = 40, white = 10;
    while (input >= 10) {
        if (input >= red)
            input -= red;
        else if (input >= blue)
            input -= blue;
        else
            input -= white;
        count++;
    }
    return count;
}

//렌터카
//엘리스 토끼는 제주도에 놀러 와 H 시간만큼 렌터카를 빌리려고 합니다. 제주도의 대표 렌터카 업체인 모자장수 렌터카와 코더랜드 렌터카는 모두 같은 차량을 제공하고 있지만, 이용 요금에 차이가 있어 가격을 비교해보려고 합니다.
/* 렌터카 업체 요금 정보는 아래와 같습니다.
    회사명             요금
    모자장수 렌터카     1시간당 A 원에 사용
    코더랜드 렌터카     기본요금 B 원에 기본 C 시간 사용,
                       C 시간이 넘어가면 시간당 D 원의 추가 요금 부과
*/
/* 지시사항
    1. 엘리스 토끼가 렌터카를 이용할 시간을 hour 매개변수로 입력 받습니다.
    2. 모자장수 렌터카의 시간당 비용을 price 매개변수로 입력 받습니다.
    3. 그리고 코더랜드 렌터카의 기본요금, 기본 시간, 기본 시간 이후에 시간당 부과되는 요금을 defaultPrice, defaultHour, defaultCost 등 매개변수로 받습니다.
    4. 두 업체의 정보를 토대로 비교하여 최소 비용을 return 하세요.
*/
/* 예시
    입력        출력
    10          2300
    300
    1500 6 200
*/
function solution(hour, price, defaultPrice, defaultHour, defaultCost) {
    const H = hour; //엘리스 토끼가 이용할 시간
    const A = price; //모자장수 렌터카의 시간당 비용 
    const B = defaultPrice; //코더랜드 렌터카 기본요금
    const C = defaultHour; //코더랜드 렌터카 기본시간
    const D = defaultCost; //코더랜드 렌터카 기본시간 이후 시간당 부과 요금
    let hat = price * hour, coder = defaultPrice + (hour - defaultHour) * defaultCost;
    // 최소비용을 return 하세요.
    return hat < coder ? hat : coder;
}

//마천루
//코더랜드의 유능한 건축가 엘리스 토끼는 모자장수로부터 새로운 사업을 제안 받았습니다.
//바로 코더랜드 한가운데 마천루를 지어 관광객을 유치하는 사업이였습니다.
/* 지시사항
    1. 마천루의 높이를 input 매개변수로부터 입력받아 아래의 조건을 참고하여 사용자가 입력한 만큼의 높이를 가지는 마천루를 출력하세요.
    2. 출력할 값은 solution 함수 안에서 return 해주세요.
*/
/* 예시
    입력    출력
    3       *
            **
            ***
    7       *
            **
            ***
            ****
            *****
            *****
            *****
*/
/* 출력값은 같은데 왜 오답이지...
function solution(input) {
    let answer = "";
    for (let i = 1; i <= input; i++) {
        for (let j = 0; j < i; j++) {
            answer += "*";
            if (j == 4)
                break;
        }
        answer += "\n";
    }
    return answer;
}*/
function solution(input) {
    let answer = [];
    for (let i = 0; i < input; i++) {
        let star = "";
        for (let j = 0; j <= i; j++) {
            star += "*";
            if (j == 4)
                break;
        }
        answer[i] = star;
    }
    return answer.join("\n");
}

//문자열 앞뒤 검사하기
//회문(Palindrome)은 토마토맛토마토, 다시합창합시다와 같이 앞에서 읽으나 뒤에서 읽으나 같은 문자열을 의미합니다. 엘리스 토끼는 이런 회문을 검사하는 기계를 만들려고 합니다.
/* 회문 검사 방식은 아래와 같습니다.
    길이가 nnn인 문자열이 입력으로 주어집니다.
    이때, 1번째 글자와 n번째 글자가 같은지 다른지를 비교합니다. 계속해서 2번째 글자와 n−1번째 글자, 3번째 글자와 n−2번째 글자 순서로 비교합니다.
*/
/* 지시사항
    1. str 매개변수에서 문자열을 입력받고 문자열의 앞에서 i번째 문자와 뒤에서 i번째 문자가 같은지 비교한 후 두 문자가 같다면 Same을, 다르다면 Different를 출력합니다.
    2. 출력할 값은 solution 함수 안에서 return 해주세요.
*/
/* 예시
    입력        출력
    abcdba      Same
                Same
                Different
*/
function solution(str) {
    let answer = [], lth = str.length;
    for (let i = 0; i < lth / 2; i++)
        answer.push(str.charAt(i) == str.charAt(lth - 1 - i) ? "Same" : "Different");
    return answer.join("\n");
}