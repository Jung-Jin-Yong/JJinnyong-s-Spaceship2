const clockContainer=document.querySelector(".m1")
 ,clockTitle=clockContainer.querySelector("#time");

function getTime(){
  const dates=new Date();
  const hours=dates.getHours();
  const minutes=dates.getMinutes();
  const seconds=dates.getSeconds();
  clockTitle.innerText=`${hours}:${minutes}:${seconds}`;
}

function init(){
  getTime();
  setInterval(getTime,1000);
}

init();

// 사용시 연결 태그 바로 밑에 스크립트 태그 달아주기!!