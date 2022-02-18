const test = () => {
  console.log("Hello World");
};

const call = (callback) => {
  console.log("コールバック関数を呼び出します");
  callback();
};

call(test);

call(() => {
  console.log("Hello World!");
});