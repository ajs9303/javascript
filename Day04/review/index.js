// 1. 영화 제목과 좌석[A1, D2, E5, ...] 그리고 시작시간[21:00]을 넣으면
// 끝 시간이 + 2시간 더해서 오브젝트 타입으로 돌려주는 함수 만들기
// 단, 타입 위배시 문자열 "에러입니다." 출력

function ticket(title, seat, time) {
  const titleCheck = typeof title == "string" && title != "";
  const seatCheck = typeof seat == "string" && seat != "";
  const timeCheck = typeof time == "string" && time != "";
  const startHour = Number(time.split(":")[0]);
  const startMinute = Number(time.split(":")[1]);
  const endTime = startHour + 2 > 24 ? startHour + 2 - 24 : startHour + 2;

  if (titleCheck && seatCheck && timeCheck) {
    return {
      title: title,
      seat: seat,
      startTime: `[${time}]`,
      endTime: `[${endTime}:${startMinute}]`,
    };
  } else {
    return "에러입니다.";
  }
}

console.log(ticket("컨저링", "A3", "23:30"));
