function* generatorFunction(i) {
  yield i;
  yield i + 1;
}

let generator = generatorFunction(5);

console.log("next: ", generator.next());