/**
 * Created by Administrator on 2016/11/25.
 */
var data=function () {
    this.fruitKind=1;//1代表吃的是黄色的果实
    this.blueFruNum=0;//吃蓝色果实数量
    this.orangeFruNum=0;
    this.blueNum=0;
    this.orangeNum=0;
    this.scroe=0;

    this.alf=0;
    this.gameOver=false;
    context1.font="20px Arial";
    context1.textAlign="center";
}
data.prototype.reset=function () {
    this.fruitKind=1;//1代表吃的是黄色的果实
    this.blueFruNum=0;//吃蓝色果实数量
    this.orangeFruNum=0;
    this.blueNum=0;
    this.orangeNum=0;
    this.scroe=0;
}
data.prototype.draw=function () {
   context1.fillStyle="#fff";
    context1.drawImage(myFruit.blueFru,conWidth*0.5-40,43-myFruit.blueFru.height*0.5);
   context1.fillText(this.blueFruNum,conWidth*0.5,50);
    context1.drawImage(myFruit.orangeFru,conWidth*0.5-40,73-myFruit.orangeFru.height*0.5);
   context1.fillText(this.orangeFruNum,conWidth*0.5,80);
   context1.fillText("SCROE:"+this.scroe,conWidth*0.5,110);
    context1.save();
   if(this.gameOver)
   {
       this.alf+=0.005;
       if(this.alf>1){
           this.alf=1;
       }
       context1.font="30px Arial";
       context1.shadowBlur=10;
       context1.shadowColor="#fff";
       context1.fillStyle="rgba(255,255,255,"+this.alf+")";
       context1.fillText("GAME OVER",conWidth*0.5,conHeight*0.5);
   }
   context1.restore();
}