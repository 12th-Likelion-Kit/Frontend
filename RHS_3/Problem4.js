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
  
  shuffle(nameList)
  

  const newList = nameList.filter(name => name != "황용진")

  console.log(newList); 