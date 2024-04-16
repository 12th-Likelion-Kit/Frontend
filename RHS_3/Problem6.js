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
  
  list.map(result => {
    console.log(result.title);
    console.log(result.content);
  });