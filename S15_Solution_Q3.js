//2022.09.22.

// Lv.1 - 소수 만들기
// 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다.
// 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.
/* 예시
    nums            result
    [1,2,3,4]	    1
    [1,2,7,6,4]	    4
*/
var answer = 0;
function solution(nums) {
  threeSum(0, nums, 0, nums.length - 2);
  return answer;
}
function threeSum(sum, nums, start, end) {
  if (end <= nums.length)
    for (let i = start; i < end; i++) {
      let result = sum + nums[i];
      if (end === nums.length) isPrime(result);
      threeSum(result, nums, i + 1, end + 1);
    }
}
function isPrime(sum) {
  if (sum % 2 !== 0) {
    let bl = true;
    for (let i = 3; i <= Math.sqrt(sum); i += 2)
      if (sum % i === 0) {
        bl = false;
        break;
      }
    if (bl) answer++;
  }
}

// Lv.1 - 예산
// S사에서는 각 부서에 필요한 물품을 지원해 주기 위해 부서별로 물품을 구매하는데 필요한 금액을 조사했습니다.
// 그러나, 전체 예산이 정해져 있기 때문에 모든 부서의 물품을 구매해 줄 수는 없습니다.
// 그래서 최대한 많은 부서의 물품을 구매해 줄 수 있도록 하려고 합니다.
// 물품을 구매해 줄 때는 각 부서가 신청한 금액만큼을 모두 지원해 줘야 합니다.
// 부서별로 신청한 금액이 들어있는 배열 d와 예산 budget이 매개변수로 주어질 때, 최대 몇 개의 부서에 물품을 지원할 수 있는지 return 하도록 solution 함수를 완성해주세요.
/* 예시
    d	            budget	result
    [1,3,2,5,4]	  9	      3
    [2,2,3,3]	    10	    4
*/
function solution(d, budget) {
  d.sort((a, b) => a - b);
  var answer = 0;
  while (budget > 0) if ((budget -= d.shift()) >= 0) answer++;
  return answer;
}

// Lv.1 - 비밀지도
// 네오는 평소 프로도가 비상금을 숨겨놓는 장소를 알려줄 비밀지도를 손에 넣었다. 그런데 이 비밀지도는 숫자로 암호화되어 있어 위치를 확인하기 위해서는 암호를 해독해야 한다.
// 1. 지도는 한 변의 길이가 n인 정사각형 배열 형태로, 각 칸은 "공백"(" ") 또는 "벽"("#") 두 종류로 이루어져 있다.
// 2. 전체 지도는 두 장의 지도를 겹쳐서 얻을 수 있다. 각각 "지도 1"과 "지도 2"라고 하자. 지도 1 또는 지도 2 중 어느 하나라도 벽인 부분은 전체 지도에서도 벽이다. 지도 1과 지도 2에서 모두 공백인 부분은 전체 지도에서도 공백이다.
// 3. "지도 1"과 "지도 2"는 각각 정수 배열로 암호화되어 있다.
// 4. 암호화된 배열은 지도의 각 가로줄에서 벽 부분을 1, 공백 부분을 0으로 부호화했을 때 얻어지는 이진수에 해당하는 값의 배열이다.
// 입력으로 지도의 한 변 크기 n 과 2개의 정수 배열 arr1, arr2가 들어온다.
// 원래의 비밀지도를 해독하여 '#', 공백으로 구성된 문자열 배열로 출력하라.
/* 예시
    n	5
    arr1	[9, 20, 28, 18, 11]
    arr2	[30, 1, 21, 17, 28]
    출력	["#####","# # #", "### #", "# ##", "#####"]
    -------------------------------------------------
    n	6
    arr1	[46, 33, 33 ,22, 31, 50]
    arr2	[27 ,56, 19, 14, 14, 10]
    출력	["######", "### #", "## ##", " #### ", " #####", "### # "]
*/
function solution(n, arr1, arr2) {
  var answer = [];
  arr1 = arr1.map((v) => v.toString(2));
  arr2 = arr2.map((v) => v.toString(2));
  for (let i = 0; i < n; i++) {
    const row1 = "0".repeat(n - arr1[i].length) + arr1[i],
      row2 = "0".repeat(n - arr2[i].length) + arr2[i];
    let result = "";
    for (let j = 0; j < n; j++) {
      result += row1[j] | row2[j] ? "#" : " ";
    }
    answer.push(result);
  }
  return answer;
}
