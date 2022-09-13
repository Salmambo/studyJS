//2022.09.13.

// Lv.1 - 같은 숫자는 싫어
// 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다.
// 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다.
// 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다.
// 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.
/* 예시
    arr                 answer
    [1,1,3,3,0,1,1]     [1,3,0,1]
    [4,4,4,3,3]	        [4,3]
*/
function solution(arr) {
    var answer = [];
    for (let i of arr)
        if (answer[answer.length - 1] !== i) answer.push(i);
    return answer;
}
/* 빠르고 멋짐
function solution(arr) {
    return arr.filter((val, index) => val != arr[index + 1]);
}*/

// Lv.1 - 나누어 떨어지는 숫자 배열
// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.
/* 예시
    arr             divisor     return
    [5, 9, 7, 10]   5           [5, 10]
    [2, 36, 1, 3]	1	        [1, 2, 3, 36]
    [3,2,6]	        10	        [-1]
*/
function solution(arr, divisor) {
    var answer = arr.filter(i => i % divisor == 0);
    return answer.length == 0 ? [-1] : answer.sort((a, b) => a - b);
}

// Lv.1 - 두 정수 사이의 합
// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
// a와 b의 대소관계는 정해져있지 않습니다.
/* 예시
    a   b   return
    3	5	12
    3	3	3
    5	3	12
*/
function solution(a, b) {
    var answer = 0;
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++)
        answer += i;
    return answer;
}
/* 압도적으로 빠르고 멋진 가우스 계산법
function solution(a, b) {
    return (a + b) * (Math.abs(b - a) + 1) / 2;
}*/

// Lv.1 - 문자열 내 마음대로 정렬하기
// 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다.
// strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
// 인덱스 n의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.
/* 예시
    strings                 n   return
    ["sun", "bed", "car"]   1   ["car", "bed", "sun"]
    ["abce", "abcd", "cdx"]	2	["abcd", "abce", "cdx"]
*/
function solution(strings, n) {
    strings.sort();
    var answer = strings.map(v => v[n]).sort();
    for (let string of strings)
        for (let i = 0; i < answer.length; i++)
            if (answer[i] === string[n]) {
                answer[i] = string;
                break;
            }
    return answer;
}
/* 간결하고 빠름. charCodeAt():인덱스로 찾은 문자의 유니코드 출력
function solution(strings, n) {
    return strings.sort().sort((a, b) => a.charCodeAt(n) - b.charCodeAt(n));
}*/

// Lv.1 - 문자열 내 p와 y의 개수
// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다.
// s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요.
// 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다.
// 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
/* 예시
    s           answer
    "pPoooyY"   true
    "Pyy"	    false
*/
function solution(s) {
    let count = 0;
    for (let i of s)
        if (i === 'p' || i === 'P') count++;
        else if (i === 'y' || i === 'Y') count--;
    return count === 0;
}

// Lv.1 - 문자열 내림차순으로 배치하기
// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.
/* 예시
    s           return
    "Zbcdefg"   "gfedcbZ"
*/
function solution(s) {
    return [...s].sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0)).join('');
}
/* 좀 더 빠름
function solution(s) {
    return [...s].sort().reverse().join('');
}*/