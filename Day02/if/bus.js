const bus = +prompt("1.시내, 2. 광역, 3. 마을");
const age = +prompt("나이");

const free = age <= 7 || age >= 65;
const student = age >= 8 && age <= 19;

if (bus == 1) {
  if (free) {
    window.console.log("무료");
  } else if (student) {
    window.console.log(1200 * 0.7);
  } else {
    window.console.log(1200);
  }
} else if (bus == 2) {
  if (free) {
    window.console.log("무료");
  } else if (student) {
    window.console.log(2000 * 0.7);
  } else {
    window.console.log(2000);
  }
} else if (bus == 3) {
  if (free) {
    window.console.log("무료");
  } else if (student) {
    window.console.log(1000 * 0.7);
  } else {
    window.console.log(1000);
  }
} else {
  window.console.log(`버스없음`);
}
