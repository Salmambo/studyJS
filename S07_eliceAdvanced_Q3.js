//2022.08.24.

// 문자열 데이터 압축하기
// 데이터를 압축하는 방법으로는 다양한 알고리즘이 존재합니다.
// 그 중에 Run-length encoding (이하 RLE)은 연속되어 같은 문자가 반복될때 어떤 문자가 몇번 반복되는지로 압축하여 표현하는 방법입니다.
// 예를 들어, “aaaaaabbbcccccbbbbb” 라는 19개의 문자 데이터는 a가 6번, b가 3번, c가 5번, b가 5번 연속되어 나타납니다. 이는 “a6b3c5b5” 이렇게 8개의 문자로 압축하여 표현할 수 있습니다.
// 하지만 “aabb” 이렇게 2번 이하로 반복되는 문자는 “a2b2” 이렇게 바꿔서 표현해도 길이는 줄어들지 않기 때문에 이는 그대로 “aabb”로 표현하고자 합니다.
// 즉, “aaabbccccaabbbb”이런 문자열을 이 알고리즘을 이용하여 압축하면 “a3bbc4aab4” 이렇게 표현할 수 있습니다.
// 이 알고리즘을 이용하여 ‘A’부터 ‘Z’까지 26개의 대문자 알파벳으로 구성된 문자열을 압축하는 자바스크립트 프로그램을 만들려고 합니다.
/* 지시사항
    1. A부터 Z까지 대문자 알파벳으로만 구성된 문자열을 인자로 받습니다.
    2. 이 문자열을 위에서 설명한 RLE 방식으로 압축합니다.
    3. 압축된 문자열을 출력합니다.
    4. 출력은 solution 함수 안에서 return 하세요.
*/
/* 예시
    입력                    출력
    AAAAABBCCCDDDZZZWW      A5BBC3D3Z3WW
*/
function solution(str) {
    let answer = str[0], count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] != answer[answer.length - 1]) {
            if (count == 2) answer += str[i - 1];
            else if (count > 2) answer += count;
            answer += str[i];
            count = 1;
        } else count++;
        if (i == str.length - 1 && count == 2) answer += str[i - 1];
        else if (i == str.length - 1 && count > 2) answer += count;
    }
    return answer;
}

// 괄호의 짝
// 자바스크립트에서 사용하는 괄호는 다양한 종류가 있습니다. 그 중 [ ], ( ), { }는 자주 사용됩니다.
// 괄호를 사용할때는 항상 짝이 맞는 것을 확인해야 합니다. 예를 들어 { ( ) [ ] }는 짝이 맞지만 { [ } ] ( ) 는 짝이 맞지 않습니다.
// 이것을 확인하는 자바스크립트 프로그램을 배열을 활용해서 만들어보려고 합니다.
/* 지시사항
    1. 영어, 숫자, 사칙연산 기호 +*-/ 그리고 괄호들로 구성된 문장을 입력받습니다.
        (a+b[a])+[{(b*e)/(a+q)}]
    2. 문자열에서 괄호가 아닌 문자는 제거합니다.
        ([])[{()()}]
    3. 배열의 pop()과 push()를 이용해서 괄호의 짝이 맞는지 맞지 않는지를 테스트합니다.
    4. 짝이 맞다면 정상, 짝이 맞지 않는 부분이 하나라도 있다면 비정상이라고 출력합니다. 위 문장은 짝이 맞으므로 정상을 출력합니다.
        정상
    5. 출력은 solution 함수 안에서 return 하세요.
*/
function solution(string) {
    string = string.replace(/[^\[\](){}]/g, '');
    let arr = [];
    for (let i of string)
        if (i == '[' || i == '(' || i == '{') arr.push(i);
        else {
            i = i == ']' ? '[' : i == ')' ? '(' : '{';
            let tmp = arr.pop();
            if (i != tmp) return "비정상";
        }
    return "정상";
}

// 차이만 저장하기
// 영상이나 음악 같은 연속적인 데이터를 압축할 때, 같은 값이 연속으로 등장한다면 우리는 이 데이터를 효율적으로 압축할 수 있습니다.
// 이번에는 압축의 효율이 좋도록 전처리하는 프로그램을 만들려고 합니다.
/*      1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    이 데이터는 값이 모두 다르지만 다음값=전값+1의 일정한 규칙이 존재합니다.
    그럼 표현방식을 아래처럼 1번째값, 2번째값- 1번째값, 3번째값-2번째값, ....이렇게 바꿔보겠습니다.
        1,1,1,1,1,1,1,1,1,1
    표현방식을 바꾸니 모두 1이 되었습니다. 이러면 1,2,3,4 ... 10이 아니라 1이 10개 이렇게 압축할 수 있습니다.
*/
/* 지시사항
    1. numbers 매개변수로부터 숫자들을 입력받습니다.
        1, 2, 3, 5, 6, 8, 9, 7, 5, 6
    2. 이것을 정수 배열로 변환합니다.
        [1, 2, 3, 5, 6, 8, 9, 7, 5, 6]
    3. 두번째 값부터 숫자들의 표현방식을 ({2번째}-{1번째}), ({3번째}-{2번째}),....({n번째}-{n-1번째}) 이렇게 바꿔봅니다.
        1, 1, 1, 2, 1, 2, 1, -2, -2, 1
    4. 이 리스트에서 1이 몇번 등장하는지 계산합니다. 여기는 6번 등장하네요.
    5. 원본 데이터에서 1이 몇번 등장하는지 비교해서 더 많이 등장하는 배열을 출력하세요. 예시에는 바꾼 데이터에 1이 더 많이 등장하니 바꾼 형식으로 출력합니다.
    6. 만약 1이 등장하는 수가같다면 0을 출력하세요.
    7. 출력은 solution 함수 안에서 return 해주세요.
*/
function solution(numbers) {
    let arr1 = numbers.split(','), arr2 = [];
    let cnt1 = 0, cnt2 = 0;
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = parseInt(arr1[i]);
        arr2.push(i == 0 ? arr1[i] : arr1[i] - arr1[i - 1]);
        if (arr1[i] == 1) cnt1++;
        if (arr2[i] == 1) cnt2++;
    }
    return cnt1 > cnt2 ? arr1 : cnt1 < cnt2 ? arr2 : 0;
}