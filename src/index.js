function work() {
  //setTimeout:함수내에서 하고자하는 작업이 백그라운드에서 수행되기에, 영향을 주지 않기에 동시 다른 작업 가능
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {}
    const end = Date.now();
    console.log(end - start + "ms");
  }, 0); //0ms 이후에 실행, 4번째로 실행
}

console.log("작업시작"); //1번째로 실행

work(); //0ms 이후 2번째로 실행
console.log("다음작업"); // for 루프 도는 동안 3번째 실행
