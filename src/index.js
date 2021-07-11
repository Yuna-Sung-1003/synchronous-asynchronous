function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms)); //특정 ms 가 끝난 이후에 작업끝
}

//화살표 함수로 async 만들고 싶을때, 함수 만들기
const getDog = async () => {
  await sleep(1000); //1초
  return "멍멍";
};
const getRabbit = async () => {
  await sleep(500); //0.5초
  return "깡총";
};
const getCat = async () => {
  await sleep(3000); //3초
  return "야옹";
};

//힘수들 한꺼번에 처리 promiseAll
//실제 실행되는 시간은 3초(고양이가 마지막)
async function process() {
  const start = Date.now(); //작업이 걸린시간
  const results = await Promise.all([getDog(), getRabbit(), getCat()]);
  console.log(Date.now() - start);
  console.log(results);
}

process();
