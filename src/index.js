function work() {
  const start = Date.now(); //현재 날짜를 숫자형태로 나타냄
  for (let i = 0; i < 1000000000; i++) {}
  const end = Date.now();
  console.log(end - start + "ms"); // 얼마나 걸렸는가, 숫자는 ms 단위, 1000ms : 1초
}

work(); // 이까지 작업이 끝나면 밑에 작업으로 넘어감
console.log("다음작업");
