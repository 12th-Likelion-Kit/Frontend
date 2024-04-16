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

 list.sort((a, b) => b.like - a.like);

  console.log(list)