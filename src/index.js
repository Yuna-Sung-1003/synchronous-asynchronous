const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("result");  성공할 경우
    reject(new Error()); //실패할 경우
  }, 1000); //성공할 때 실행 1초후 실행
});
//promise 작업 후 해야할 작업
myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
