const classroom = [
  { name: "A", capacity: 20, students: 18, lecture: "java" },
  { name: "B", capacity: 20, students: 19, lecture: "python" },
  { name: "C", capacity: 20, students: 20, lecture: "javascript" },
];

// 유저에게 듣고 싶은 과목을 물은 다음,
// 해당 과목의 수용인원이 가능하면, 학생수를 늘리고 로그로 클래스룸 결과 보여주기
// 불가능하면, 알럿으로 불가!, 로그로 클래스룸 결과 보여주기

const subject = prompt("무슨과목? (java, python, javascript)");

if (classroom[0].lecture == subject) {
  classroom[0].students += 1;
  console.log(classroom[0]);
} else if (classroom[1].lecture == subject) {
  classroom[1].students += 1;
  console.log(classroom[1]);
} else if (classroom[2].lecture == subject) {
  alert("불가!");
  console.log(classroom[2]);
} else {
  alert("없는 과목");
}
