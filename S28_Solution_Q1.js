//2022.10.07.

// Lv.1 - 신고 결과 받기
// 신입사원 무지는 게시판 불량 이용자를 신고하고 처리 결과를 메일로 발송하는 시스템을 개발하려 합니다. 무지가 개발하려는 시스템은 다음과 같습니다.
// - 각 유저는 한 번에 한 명의 유저를 신고할 수 있습니다.
//     신고 횟수에 제한은 없습니다. 서로 다른 유저를 계속해서 신고할 수 있습니다.
//     한 유저를 여러 번 신고할 수도 있지만, 동일한 유저에 대한 신고 횟수는 1회로 처리됩니다.
// - k번 이상 신고된 유저는 게시판 이용이 정지되며, 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송합니다.
//     유저가 신고한 모든 내용을 취합하여 마지막에 한꺼번에 게시판 이용 정지를 시키면서 정지 메일을 발송합니다.
// 이용자의 ID가 담긴 문자열 배열 id_list, 각 이용자가 신고한 이용자의 ID 정보가 담긴 문자열 배열 report, 정지 기준이 되는 신고 횟수 k가 매개변수로 주어질 때, 각 유저별로 처리 결과 메일을 받은 횟수를 배열에 담아 return 하도록 solution 함수를 완성해주세요.
// report의 원소는 "이용자id 신고한id"형태의 문자열입니다.
/* 예시
    id_list	                            report	                                k	    result
    ["muzi", "frodo", "apeach", "neo"]	["muzi frodo","apeach frodo",           2	    [2,1,1,0]
                                        "frodo neo","muzi neo","apeach muzi"]	
    ["con", "ryan"]	                    ["ryan con", "ryan con",                3	    [0,0]
                                        "ryan con", "ryan con"]	
*/
function solution(id_list, report, k) {
  const idMap = new Map(), // {이용자id : 메일 수}
    reportMap = new Map(); // {신고한id : [이용자id]}
  for (const id of id_list) {
    idMap.set(id, 0);
    reportMap.set(id, new Set());
  }
  for (const r of report) {
    const arr = r.split(" ");
    reportMap.get(arr[1]).add(arr[0]);
  }
  for (const arr of reportMap.values())
    if (arr.size >= k) arr.forEach((id) => idMap.set(id, idMap.get(id) + 1));
  return [...idMap.values()];
}
