var imgArray = new Array();
imgArray[0] = "images/1.jpg";
imgArray[1] = "images/2.jpg";
imgArray[2] = "images/3.jpg";
imgArray[3] = "images/4.jpg";
imgArray[4] = "images/5.jpg";
imgArray[5] = "images/6.jpg";
imgArray[6] = "images/7.jpg";
imgArray[7] = "images/8.jpg";
imgArray[8] = "images/9.jpg";
imgArray[9] = "images/10.jpg";
imgArray[10] = "images/11.jpg";
imgArray[11] = "images/12.jpg";
imgArray[12] = "images/13.jpg";
imgArray[13] = "images/14.jpg";
imgArray[14] = "images/15.jpg";
imgArray[15] = "images/16.jpg";

function showImage(){
    var imgNum = 0;
    var dates=new Date();
    var months=1+dates.getMonth();

    if((months>=3)&&(months<=5)) imgNum=Math.floor(Math.random()*4+1);
    else if((months>=6)&&(months<=8)) imgNum=Math.floor(Math.random()*4+5);
    else if((months>=9)&&(months<=11)) imgNum=Math.floor(Math.random()*4+9);
    else if((months===12)&&(months<=2)) imgNum=Math.floor(Math.random()*4+13);

    var objImg = document.getElementById("homeImage");
    objImg.src = imgArray[imgNum-1];
} // 중앙 이미지 관련 소스

