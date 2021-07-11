function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms)); //특정 ms 가 끝난 이후에 작업끝
}

//앞부분에 async 붙여려주기
async function process() {
  console.log("안녕하세요");
  //promise 앞에는  await
  await sleep(1000); //1초동안 기다림
  console.log("반가워요");
}
process();
