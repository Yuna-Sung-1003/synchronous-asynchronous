//Callback
//Work 이후의 작업을 추가하고싶을때, callback 을 파라미터로 넘겨주기
function work(callback) {
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {}
    const end = Date.now();
    console.log(end - start + "ms"); //4
    callback(end - start); //얼마나 걸렸는가
  }, 0);
}

console.log("작업시작"); //1
work((ms) => {
  // 2실행되면서 위 work함수가 실행,루프 돌아가는중
  console.log("작업이 끝났어요!"); //5
  console.log(ms + "ms 걸렸다고 해요"); //end - start(ms) 를 함수 내부에서 받아와 나타냄
});
console.log("다음작업"); //3
