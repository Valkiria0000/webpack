async function start() {
  return await Promise.resolve("async is work");
}

start().then(console.log);
class Util {
  static id = Date.now();
}
console.log(Util);
document.write("hello word");
