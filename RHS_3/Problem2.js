// 2. 구조 분해 할당을 활용하여 올바르게 출력할 수 있도록 코드를 작성하시오.
const obj = { a: 10, b: 20, c: 30 };

function sum ({a , b, c}) {
	console.log(`${a} + ${b} + ${c} = ${a + b + c}`);
}
sum(obj);