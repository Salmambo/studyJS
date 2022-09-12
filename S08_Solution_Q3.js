//2022.09.12.

// Lv.1 - 폰켓몬
// 홍 박사님은 당신에게 자신의 연구실에 있는 총 N 마리의 폰켓몬 중에서 N/2마리를 가져가도 좋다고 했습니다.
// 홍 박사님 연구실의 폰켓몬은 종류에 따라 번호를 붙여 구분합니다. 따라서 같은 종류의 폰켓몬은 같은 번호를 가지고 있습니다.
// 당신은 최대한 다양한 종류의 폰켓몬을 가지길 원하기 때문에, 최대한 많은 종류의 폰켓몬을 포함해서 N/2마리를 선택하려 합니다.
// N마리 폰켓몬의 종류 번호가 담긴 배열 nums가 매개변수로 주어질 때, N/2마리의 폰켓몬을 선택하는 방법 중, 가장 많은 종류의 폰켓몬을 선택하는 방법을 찾아, 그때의 폰켓몬 종류 번호의 개수를 return 하도록 solution 함수를 완성해주세요.
// nums의 길이(N)는 1 이상 10,000 이하의 자연수이며, 항상 짝수로 주어집니다.
/* 예시
    nums            result
    [3,1,2,3]       2
    [3,3,3,2,2,4]   3
    [3,3,3,2,2,2]   2
*/
function solution(nums) {
    let limit = nums.length / 2;
    let picked = [];
    for (let num of nums)
        if (picked.length < limit && !exist(picked, num))
            picked.push(num);
    return picked.length;
}
function exist(picked, num) {
    for (let p of picked)
        if (p === num) return true;
    return false;
}
/* 압도적으로 빠름
function solution(nums) {
    const max = nums.length / 2;
    const arr = [...new Set(nums)];
    return arr.length > max ? max : arr.length
}*/

// Lv.1 - 2016년
// 2016년 1월 1일은 금요일입니다.
// 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요.
// 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT입니다.
// 2016년은 윤년입니다.
/* 예시
    a   b   result
    5   24  "TUE"
*/
let count = 0;
function solution(a, b) {
    const dayList = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
    for (let i = 1; i < a; i++)
        if (i == 2) counting(29);
        else if ((i <= 7 && i % 2 == 1) || (i >= 8 && i % 2 == 0)) counting(31);
        else counting(30);
    count += b;
    return dayList[count % 7];
}
function counting(last) {
    for (let i = 1; i <= last; i++)
        count++;
}
/* counting 함수는 의미없음
function solution(a, b) {
    const dayList = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
    let count = 0;
    for (let i = 1; i < a; i++)
        if (i == 2) count += 29;
        else if ((i <= 7 && i % 2 == 1) || (i >= 8 && i % 2 == 0)) count += 31;
        else count += 30;
    count += b;
    return dayList[count % 7];
}*/

// Lv.1 - 가운데 글자 가져오기
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요.
// 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
/* 예시
    s           return
    "abcde"     "c"
    "qwer"      "we"
*/
function solution(s) {
    const middle = s.length / 2;
    return s.substring(Math.ceil(middle - 1), Math.floor(middle + 1));
}