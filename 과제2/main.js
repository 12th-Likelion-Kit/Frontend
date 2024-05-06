// 1. 템플릿 리터럴을 활용하여 a + b를 출력하시오
const a = 10;
const b = 20;
console.log(a + b) // 10 + 20 = 30입니다.

// 2. 구조 분해 할당을 활용하여 올바르게 출력할 수 있도록 코드를 작성하시오.
const obj = { a: 10, b: 20, c: 30 };

function sum ({a,b,c}) {
	console.log(`${a} + ${b} + ${c} = ${a + b + c}`);
	// 10 + 20 + 30 = 60
}


sum(obj);

// 3. spread문법을 활용하여 올바르게 출력할 수 있도록 코드를 작성하시오.
const arr = [1, 2, 3, 4, 5];
let [a,b,...rest] = arr;
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]

// 4. 다음 아기사자 리스트를 랜덤으로 섞은 상태에서 배열 메소드를 활용하여
//    "황용진"을 찾아서 리스트에서 제거하고 출력하도록 코드를 작성하시오.
const nameList = [
  "김규식",
  "김동천",
  "김용승",
  "김정훈",
  "류현식",
  "이민우",
  "이수영",
  "장은서",
  "정성윤",
  "조찬아",
  "황용진",
];

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

shuffle(nameList);

namelist = nameList.filter((value) => value !="황용진");

console.log(namelist)
// 5. 다음 리스트를 like가 높은 순서로 정렬하여 출력하도록 하시오.
const list = [
  {
    title: "제목1",
    like: 51,
  },
  {
    title: "제목2",
    like: 24,
  },
  {
    title: "제목3",
    like: 63,
  },
  {
    title: "제목4",
    like: 101,
  },
  {
    title: "제목5",
    like: 403,
  },
];

list.sort((a,b) => a.like - b.like)
console.log(list)

// 6. 배열 메소드 map을 활용하여 제목, 내용을 순서대로 출력하도록 하시오.
const list = [
  {
    title: "제목1",
    like: 51,
    content: "내용1",
  },
  {
    title: "제목2",
    like: 24,
    content: "내용2",
  },
  {
    title: "제목3",
    like: 63,
    content: "내용3",
  },
  {
    title: "제목4",
    like: 101,
    content: "내용4",
  },
  {
    title: "제목5",
    like: 403,
    content: "내용5",
  },
];

list.map((a) => console.log(`${a.title}\n${a.content}`));
/*
제목1
내용1
제목2
내용2
제목3
내용3
제목4
내용4
제목5
내용5
*/