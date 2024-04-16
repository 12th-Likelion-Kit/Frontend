// 3. spread문법을 활용하여 올바르게 출력할 수 있도록 코드를 작성하시오.
const arr = [1, 2, 3, 4, 5];
let [a,b, ...rest] = arr;
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]
