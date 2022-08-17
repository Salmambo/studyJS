//2022.08.17.

//샌드위치 만들기
//오늘은 소풍을 가기 위해 여러가지 샌드위치를 만들려고 합니다.
//지시사항에 따라 빵과 빵사이에 여러가지 재료를 넣어 여러분만의 샌드위치 레시피를 출력하는 자바스크립트 프로그램을 제작하세요.
/* 지시사항
    1. input 매개변수로 빵 사이에 넣을 재료를 입력받습니다.
    2. 재료 양쪽에 빵을 출력하여 샌드위치를 완성합니다.
*/
/* 예시
    입력        출력
    햄과치즈    빵 햄과치즈 빵
*/
function solution(input) {
    return "빵 " + input + " 빵";
}

//두 수의 곱 구하기
//두 정수를 입력받아서 그 곱을 출력하는 프로그램을 제작하려고 합니다.
//지시사항에 따라 코드를 작성하세요.
/* 지시사항
    1. solution 함수 input 매개변수로 두 수를 받습니다.
    2. 입력 받은 수를 정수로 변환합니다.
    3. 두 수의 곱을 solution 함수 안에서 return합니다.
*/
function solution(a, b) {
    return parseInt(a) * parseInt(b);
}

//홀수, 짝수 판단하기
//지시사항에 따라 입력받은 숫자가 홀수인지 짝수인지 판단하는 프로그램을 제작하세요.
/* 지시사항
    1. solution 함수의 num 매개변수를 받습니다.
    2. num가 홀수이면 num:"홀수" 짝수라면 num:"짝수"로 출력해주세요.
*/
/* 예시
    입력    출력
    123     123:"홀수"
*/
function solution(num) {
    return num % 2 == 0 ? num + ':"짝수"' : num + ':"홀수"';
}

//삼각형의 각도 구하기
//삼각형에서 세 꼭지점의 각도의 합은 항상 180도로 일정합니다.
//이를 이용해서 두 꼭지점의 각도를 입력받으면 나머지 꼭지점의 각도를 구할수 있습니다.
//지시사항에 따라 자바스크립트로 프로그램을 완성하세요.
/* 지시사항
    1. 두 꼭지점의 각도를 차례대로 입력받습니다. (각도는 정수형만 입력가능합니다.)
    2. 세 꼭지점 각도의 합이 180인 것을 이용하여 나머지 꼭지점의 각도를 계산하고 출력합니다.
    3. 출력할 값은 solution 함수에서 return 해주세요.
*/
/* 예시
    입력    출력
    30 78   80
*/
function solution(angle) {
    let angels = angle.split(" ");
    let x = 180 - parseInt(angels[0]) - parseInt(angels[1]);
    return x > 0 ? x : 0;
}

//가장 큰 자릿수 숫자 구하기
//엘리스 토끼와 모자장수는 입력받은 숫자에서 가장 큰 자릿수의 숫자를 구하는 프로그램을 만들려고 합니다.
//여기서 가장 큰 자릿수의 숫자란 753 같은 경우, 백의 자리 숫자인 7을 의미하며 10999의 경우 만의 자리 숫자인 1을 의미합니다.
//지시사항을 참고하여 코드를 작성하세요.
/* 지시사항
    1. number 매개변수로부터 자연수를 입력받고 가장 큰 자릿수의 숫자를 출력하세요. 출력할 값은 숫자타입이어야 합니다.
    2. 출력할 값은 solution 함수에서 return 해주세요.
*/
/* 예시
    입력    출력
    753     7
    10999   1
*/
function solution(number) {
    return parseInt(String(number).charAt(0));
}