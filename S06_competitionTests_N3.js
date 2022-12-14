//2022.08.23.

// Q1.
/* 오래전 유행했던 콜라 문제가 있습니다. 콜라 문제의 지문은 다음과 같습니다.
    정답은 아무에게도 말하지 마세요.
    콜라 빈 병 2개를 가져다주면 콜라 1병을 주는 마트가 있다. 빈 병 20개를 가져다주면 몇 병을 받을 수 있는가?
    단, 보유 중인 빈 병이 2개 미만이면, 콜라를 받을 수 없다.
*/
// 문제를 풀던 상빈이는 콜라 문제의 완벽한 해답을 찾았습니다. 상빈이가 푼 방법은 아래 그림과 같습니다. 우선 콜라 빈 병 20병을 가져가서 10병을 받습니다. 받은 10병을 모두 마신 뒤, 가져가서 5병을 받습니다. 5병 중 4병을 모두 마신 뒤 가져가서 2병을 받고, 또 2병을 모두 마신 뒤 가져가서 1병을 받습니다. 받은 1병과 5병을 받았을 때 남은 1병을 모두 마신 뒤 가져가면 1병을 또 받을 수 있습니다. 이 경우 상빈이는 총 10 + 5 + 2 + 1 + 1 = 19병의 콜라를 받을 수 있습니다.
// 문제를 열심히 풀던 상빈이는 일반화된 콜라 문제를 생각했습니다. 이 문제는 빈 병 a개를 가져다주면 콜라 b병을 주는 마트가 있을 때, 빈 병 n개를 가져다주면 몇 병을 받을 수 있는지 계산하는 문제입니다. 기존 콜라 문제와 마찬가지로, 보유 중인 빈 병이 a개 미만이면, 추가적으로 빈 병을 받을 순 없습니다. 상빈이는 열심히 고심했지만, 일반화된 콜라 문제의 답을 찾을 수 없었습니다. 상빈이를 도와, 일반화된 콜라 문제를 해결하는 프로그램을 만들어 주세요.
// 콜라를 받기 위해 마트에 주어야 하는 병 수 a, 빈 병 a개를 가져다 주면 마트가 주는 콜라 병 수 b, 상빈이가 가지고 있는 빈 병의 개수 n이 매개변수로 주어집니다. 상빈이가 받을 수 있는 콜라의 병 수를 return 하도록 solution 함수를 작성해주세요.
/* 예시
    a   b   n       result
    2   1   20      19
    3   1   20      9
*/
function solution(a, b, n) {
    var answer = 0;
    while (n >= a) {
        answer += parseInt(n / a) * b;
        n = parseInt(n / a) * b + n % a;
    }
    return answer;
}

// Q2.
// 햄버거 가게에서 일을 하는 상수는 햄버거를 포장하는 일을 합니다. 함께 일을 하는 다른 직원들이 햄버거에 들어갈  재료를 조리해 주면 조리된 순서대로 상수의 앞에 아래서부터 위로 쌓이게 되고, 상수는 순서에 맞게 쌓여서 완성된 햄버거를 따로 옮겨 포장을 하게 됩니다. 상수가 일하는 가게는 정해진 순서(아래서부터, 빵 – 야채 – 고기 - 빵)로 쌓인 햄버거만 포장을 합니다. 상수는 손이 굉장히 빠르기 때문에 상수가 포장하는 동안 속 재료가 추가적으로 들어오는 일은 없으며,  재료의 높이는 무시하여  재료가 높이 쌓여서 일이 힘들어지는 경우는 없습니다.
// 예를 들어, 상수의 앞에 쌓이는 재료의 순서가 [야채, 빵, 빵, 야채, 고기, 빵, 야채, 고기, 빵]일 때, 상수는 여섯 번째 재료가 쌓였을 때, 세 번째 재료부터 여섯 번째 재료를 이용하여 햄버거를 포장하고, 아홉 번째 재료가 쌓였을 때, 두 번째 재료와 일곱 번째 재료부터 아홉 번째 재료를 이용하여 햄버거를 포장합니다. 즉, 2개의 햄버거를 포장하게 됩니다.
// 상수에게 전해지는 재료의 정보를 나타내는 정수 배열 ingredient가 주어졌을 때, 상수가 포장하는 햄버거의 개수를 return 하도록 solution 함수를 완성하시오.
// ingredient의 원소는 1, 2, 3 중 하나의 값이며, 순서대로 빵, 야채, 고기를 의미합니다.
/* 예시
    ingredient                      result
    [2, 1, 1, 2, 3, 1, 2, 3, 1]     2
    [1, 3, 2, 1, 2, 1, 3, 1, 2]     0
*/
/* 시간초과
function solution(ingredient) {
    var answer = 0;
    let run = true;
    while (run) {
        run = false;
        for (let i = 0; i < ingredient.length - 3; i++)
            if (ingredient[i] == 1 && ingredient[i + 1] == 2 && ingredient[i + 2] == 3 && ingredient[i + 3] == 1) {
                answer++;
                ingredient.splice(i, 4);
                run = true;
                break;
            }
    }
    return answer;
}*/
function solution(ingredient) {
    var answer = 0;
    let i = 0;
    while (i < ingredient.length - 3) {
        if (ingredient[i] == 1 && ingredient[i + 1] == 2 && ingredient[i + 2] == 3 && ingredient[i + 3] == 1) {
            answer++;
            ingredient.splice(i, 4);
            run = true;
            i -= 2;
        } else i++;
    }
    return answer;
}

// Q3.
// 전쟁에 참여한 화랑이는 적군의 기지에 침투하여 정보를 훔쳐오는 임무를 받았습니다. 화랑이는 야간 전술 보행을 이용하여 직진하며, 야간 전술 보행은 1m/s의 일정한 속도로 나아갈 수 있습니다. 화랑이의 침입 경로에는 경비병들이 각자 일부 구간들을 감시하고 있습니다. 각각의 경비병들이 감시하는 구간은 서로 겹치지 않으며, 일정 시간 동안 근무 후 일정 시간 동안 휴식을 취하는 과정을 반복합니다. 화랑이가 지나가고 있는 위치를 감시하는 경비병이 근무 중이라면 화랑이는 경비병에게 발각되어 즉시 붙잡히게 됩니다. 하지만 해당 위치를 감시하는 경비병이 휴식을 취하고 있으면 화랑이는 무사히 해당 위치를 지나갈 수 있습니다. 경비병의 근무 정보를 모르는 화랑이는 쉬지 않고 전진을 하며, 화랑이가 출발할 때 모든 경비병들이 동시에 근무를 시작합니다.
// 예를 들어, 적군 기지까지의 거리가 10m이고 2명의 경비병들이 근무를 시작한다고 가정합시다. 첫 번째 경비병의 감시 구간은 화랑이의 출발 위치로부터 3m부터 4m까지이고, 두 번째 경비병의 감시 구간은 화랑이의 출발 위치로부터 5m부터 8m까지입니다. 첫 번째 경비병의 근무 및 휴식 시간은 각각 2초, 5초를 반복하며, 두 번째 경비병의 근무 및 휴식 시간은 각각 4초, 3초를 반복합니다. 이 경우 출발지로부터 화랑이의 위치에 따른 두 경비병의 상태는 아래 표와 같습니다. 첫 번째 경비병이 감시하는 3m ~ 4m 구간을 화랑이는 3초일 때 진입하지만, 첫 번째 경비병은 2초간의 근무를 마치고, 휴식을 시작했으므로, 화랑이는 붙잡히지 않습니다. 하지만 두 번째 경비병이 감시하는 5m ~ 8m 구간에서 화랑이가 8m 지점에 진입했을 때, 두 번째 경비병이 3초간의 휴식을 마치고 근무를 시작하므로 화랑이는 붙잡히게 됩니다.
/*
    첫 번째 경비병의 상태   두 번째 경비병의 상태   화랑이의 위치
    근무                   근무                   1
    근무                   근무                   2
    휴식                   근무                   3
    휴식                   근무                   4
    휴식                   휴식                   5
    휴식                   휴식                   6
    휴식                   휴식                   7
    근무                   근무                   8
    근무                   근무                   9
    휴식                   근무                   10
*/
// 화랑이의 현재 위치와 적군 기지 사이의 거리를 나타내는 정수 distance, 각 경비병의 감시 구간을 담은 2차원 정수 배열 scope, 같은 순서로 각 경비병의 근무 시간과 휴식 시간을 담은 2차원 정수 배열 times가 주어질 때, 화랑이가 경비를 피해 최대로 이동할 수 있는 거리를 return 하는 solution 함수를 완성하세요.
// scope[i]는 정렬되어 있지 않을 수 있습니다.
/* 예시
    distance    scope                       times                       result
    10          [[3, 4], [5, 8]]            [[2, 5], [4, 3]]            8
    12          [[7, 8], [4, 6], [11, 10]]  [[2, 2], [2, 4], [3, 3]]    12
*/
function solution(distance, scope, times) {
    var answer = 0; //화랑이 가는 거리 ++;
    let second = 0; //화랑이 가는 시간 ++;
    let security = []; //경비병 상태 boolean
    for (let i of times) {
        security.push(true);
        i.push(i[0]);
    }
    while (answer < distance) {
        answer++; second++;
        for (let i = 0; i < scope.length; i++)
            if (Math.min(scope[i][0], scope[i][1]) <= answer && answer <= Math.max(scope[i][0], scope[i][1]) && security[i])
                return answer;
        for (let i = 0; i < times.length; i++)
            if (times[i][2] == second && security[i]) {
                security[i] = false;
                times[i][2] += times[i][1];
            } else if (times[i][2] == second && !security[i]) {
                security[i] = true;
                times[i][2] += times[i][0];
            }
    }
    return answer;
}