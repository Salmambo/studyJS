// 2022.08.23.

// Q1.
// 한국중학교에 다니는 학생들은 각자 정수 번호를 갖고 있습니다. 이 학교 학생 3명의 정수 번호를 더했을 때 0이 되면 3명의 학생은 삼총사라고 합니다. 예를 들어, 5명의 학생이 있고, 각각의 정수 번호가 순서대로 -2, 3, 0, 2, -5일 때, 첫 번째, 세 번째, 네 번째 학생의 정수 번호를 더하면 0이므로 세 학생은 삼총사입니다. 또한, 두 번째, 네 번째, 다섯 번째 학생의 정수 번호를 더해도 0이므로 세 학생도 삼총사입니다. 따라서 이 경우 한국중학교에서는 두 가지 방법으로 삼총사를 만들 수 있습니다.
// 한국중학교 학생들의 번호를 나타내는 정수 배열 number가 매개변수로 주어질 때, 학생들 중 삼총사를 만들 수 있는 방법의 수를 return 하도록 solution 함수를 완성하세요.
// 서로 다른 학생의 정수 번호가 같을 수 있습니다.
/* 예시
    number                      result
    [-2, 3, 0, 2, -5]           2
    [-3, -2, -1, 0, 1, 2, 3]    5
    [-1, 1, -1, 1]              0
*/
function solution(number) {
    var answer = 0;
    for (let i = 0; i < number.length - 2; i++)
        for (let j = i + 1; j < number.length - 1; j++)
            for (let k = j + 1; k < number.length; k++)
                if (number[i] + number[j] + number[k] == 0) answer++;
    return answer;
}

// Q2.
// 철수는 롤케이크를 두 조각으로 잘라서 동생과 한 조각씩 나눠 먹으려고 합니다. 이 롤케이크에는 여러가지 토핑들이 일렬로 올려져 있습니다. 철수와 동생은 롤케이크를 공평하게 나눠먹으려 하는데, 그들은 롤케이크의 크기보다 롤케이크 위에 올려진 토핑들의 종류에 더 관심이 많습니다. 그래서 잘린 조각들의 크기와 올려진 토핑의 개수에 상관없이 각 조각에 동일한 가짓수의 토핑이 올라가면 공평하게 롤케이크가 나누어진 것으로 생각합니다.
// 예를 들어, 롤케이크에 4가지 종류의 토핑이 올려져 있다고 합시다. 토핑들을 1, 2, 3, 4와 같이 번호로 표시했을 때, 케이크 위에 토핑들이 [1, 2, 1, 3, 1, 4, 1, 2] 순서로 올려져 있습니다. 만약 세 번째 토핑(1)과 네 번째 토핑(3) 사이를 자르면 롤케이크의 토핑은 [1, 2, 1], [3, 1, 4, 1, 2]로 나뉘게 됩니다. 철수가 [1, 2, 1]이 놓인 조각을, 동생이 [3, 1, 4, 1, 2]가 놓인 조각을 먹게 되면 철수는 두 가지 토핑(1, 2)을 맛볼 수 있지만, 동생은 네 가지 토핑(1, 2, 3, 4)을 맛볼 수 있으므로, 이는 공평하게 나누어진 것이 아닙니다. 만약 롤케이크의 네 번째 토핑(3)과 다섯 번째 토핑(1) 사이를 자르면 [1, 2, 1, 3], [1, 4, 1, 2]로 나뉘게 됩니다. 이 경우 철수는 세 가지 토핑(1, 2, 3)을, 동생도 세 가지 토핑(1, 2, 4)을 맛볼 수 있으므로, 이는 공평하게 나누어진 것입니다. 공평하게 롤케이크를 자르는 방법은 여러가지 일 수 있습니다. 위의 롤케이크를 [1, 2, 1, 3, 1], [4, 1, 2]으로 잘라도 공평하게 나뉩니다. 어떤 경우에는 롤케이크를 공평하게 나누지 못할 수도 있습니다.
// 롤케이크에 올려진 토핑들의 번호를 저장한 정수 배열 topping이 매개변수로 주어질 때, 롤케이크를 공평하게 자르는 방법의 수를 return 하도록 solution 함수를 완성해주세요.
/* 예시
    topping                     result
    [1, 2, 1, 3, 1, 4, 1, 2]    2
    [1, 2, 3, 1, 4]             0
*/
/* 시간초과
function solution(topping) {
    var answer = 0;
    for (let i = 1; i < topping.length; i++)
        answer += cutting(topping.slice(), i);
    return answer;
}
function cutting(right, count) {
    let left = right.splice(0, count);
    left = left.filter((v, i) => left.indexOf(v) == i), right = right.filter((v, i) => right.indexOf(v) == i);
    return left.length == right.length ? 1 : 0;
}*/
/* 조금 빠르지만 시간초과
function solution(topping) {
    var answer = 0;
    for (let i = 1; i < topping.length; i++) {
        let right = [...topping];
        let left = right.splice(0, i);
        left = new Set(left), right = new Set(right);
        if (left.size == right.size) answer++;
    }
    return answer;
}*/
/* 훨씬 빠르지만 시간초과
function solution(topping) {
    var answer = 0;
    let left = {}, right = {};
    for (let i of topping)
        right[i] = i in right ? right[i] + 1 : 1;
    for (let i of topping) {
        left[i] = i in left ? left[i] + 1 : 1;
        if (i in right) right[i] -= 1;
        if (right[i] == 0) delete right[i];
        if (Object.keys(left).length == Object.keys(right).length) answer++;
    }
    return answer;
}*/
function solution(topping) {
    var answer = 0;
    let left = {}, right = {};
    let lcnt = 0, rcnt = 0;
    for (let i of topping)
        if (i in right) right[i]++;
        else {
            right[i] = 1;
            rcnt++;
        }
    for (let i of topping) {
        if (i in left) left[i]++;
        else {
            left[i] = 1;
            lcnt++;
        }
        right[i]--;
        if (right[i] == 0) rcnt--;
        if (lcnt == rcnt) answer++;
    }
    return answer;
}