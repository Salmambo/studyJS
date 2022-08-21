//2022.08.21.

//8은 특별해!
//가로, 세로로 가운데를 갈라도 모두 같은 모양인 8을 좋아하는 엘리스 토끼는 1부터 10000까지 8이라는 숫자가 몇 번 나오는지 알아보려고 해요!
/* 지시사항
    1부터 10,000까지의 수 중 8의 개수를 세어 함수 안에서 리턴하세요.
*/
/* 예시
    출력
    // 범위를 1~20로 가정했을 때 8의 개수
    // 8, 18
    2
*/
function solution() {
    let answer = 0;
    for (let i = 1; i < 10000; i++)
        answer += eight(String(i));
    return answer;
}
function eight(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++)
        if (str[i] == '8')
            count++;
    return count;
}

//끼리끼리
//엘리스 토끼는 모자장수로부터 여러 개의 숫자 카드를 받았습니다. 이에 엘리스 토끼는 숫자 카드를 분류하여 주머니에 보관하려고 합니다.
//어떻게 나눌지 고민하던 엘리스 토끼는 카드의 숫자가 음수면 파란 주머니에, 숫자가 양수면 빨간 주머니에 넣어 박스에 보관하려고 합니다.
/* 지시사항
    1. 공백을 구분자로 카드에 적혀있는 숫자를 input 매개변수로 입력받습니다. 입력받은 숫자는 정수형 값으로 변환하여 배열 card에 저장하세요.
    2. 입력받은 순서대로 0 또는 양수인 경우 배열 red_pocket에, 음수인 경우 배열 blue_pocket에 저장하세요.
    3. 배열 안에 red_pocket와 blue_pocket를 넣어서 solution 함수 안에서 return 하세요.
*/
/* 예시
    입력                    출력
    -1 2 1 -2 7 3 -1 0      [[2, 1, 7, 3, 0], [-1, -2, -1]]
*/
function solution(input) {
    const card = input.split(' ');
    const red_pocket = [], blue_pocket = [];
    for (let i of card)
        if (i < 0)
            blue_pocket.push(parseInt(i));
        else
            red_pocket.push(parseInt(i));
    return [red_pocket, blue_pocket];
}

//암호문 해석하기
//에니그마(Enigma, 수수께끼)는 독일군이 전장에서 사용했던 암호 생성 장치입니다.
//독일어 알파벳 각각에 대하여 다른 알파벳에 임의로 대응시킨 다음, 이렇게 대응된 알파벳으로 전신 부호를 발송했습니다.
//에니그마는 각 알파벳이 대응하는 다른 알파벳의 세트에 따라 같은 단어도 다른 코드로 변환합니다.
//암호의 알파벳을 키로, 대응하는 알파벳을 값으로 저장한 두 개의 객체 signal1 과 signal2가 있습니다.
/* 암호문의 형태는 다음과 같습니다.
        01011 eowxvqp
    우선 01011은 5개의 0과 1로 구성되어 있으므로 암호문이 5개의 알파벳으로 구성된 암호문이라는 것을 알 수 있습니다.
    따라서 이 암호문은 5번째 알파벳인 v까지만 해석하며, 6번째 알파벳인 q부터는 해석하지 않고 버립니다.
    앞에 0과 1은 같은 자리의 알파벳을 각각 signal1을 이용하여 해석할지, signal2를 이용하여 해석할지를 의미합니다.
    위 예시에서 0에 대응하는 e, w는 signal1을 이용하여 해석하고 1에 대응하는 o, x, v는 signal2를 이용하여 해석합니다.
    signal1에서 e와 w는 각각 e와 i에 대응하며, signal2에서 o, x, v는 각각 l,c,e에 대응합니다.
    따라서 예시의 암호문을 해석하면 elice가 되며 이를 출력하시면 정답입니다.
*/
/* 지시사항
    1. 해석해야할 암호문 매개변수 code를 입력 받습니다.
    2. 암호문을 해석한 후 solution 함수 안에서 return 해주세요.
*/
/* 예시
    입력                출력
    01011 eowxvqp       elice
    111 zmgaaw          ant
*/
const signal1 = { 'a': 'n', 'b': 'd', 'c': 'a', 'd': 'b', 'e': 'e', 'f': 'l', 'g': 'j', 'h': 'o', 'i': 'z', 'j': 'u', 'k': 'y', 'l': 'v', 'm': 'w', 'n': 'q', 'o': 'x', 'p': 'r', 'q': 'p', 'r': 'f', 's': 'g', 't': 't', 'u': 'm', 'v': 'h', 'w': 'i', 'x': 'c', 'y': 'k', 'z': 's' }
const signal2 = { 'a': 'z', 'b': 'y', 'c': 'x', 'd': 'w', 'e': 'v', 'f': 'u', 'g': 't', 'h': 's', 'i': 'r', 'j': 'q', 'k': 'p', 'l': 'o', 'm': 'n', 'n': 'm', 'o': 'l', 'p': 'k', 'q': 'j', 'r': 'i', 's': 'h', 't': 'g', 'u': 'f', 'v': 'e', 'w': 'd', 'x': 'c', 'y': 'b', 'z': 'a' }
function solution(code) {
    const arr = code.split(' ');
    let answer = "";
    for (let i = 0; i < arr[0].length; i++)
        answer += arr[0][i] == '0' ? signal1[arr[1][i]] : signal2[arr[1][i]];
    return answer;
}