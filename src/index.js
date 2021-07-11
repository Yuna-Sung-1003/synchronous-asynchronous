function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms)); //특정 ms 가 끝난 이후에 작업끝
}
async function makeError() {
  await sleep(1000);
  const error = new Error();
  throw error; //에러 발생 시키고 싶을때
}
//앞부분에 async 붙여려주기
//에러를 잡아내고 싶을 때 try catch 문
async function process() {
  try {
    await makeError();
  } catch (e) {
    //e: 에러 가르키는 객체
    console.error(e);
  }
}
process();
