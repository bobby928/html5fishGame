/**
 * Created by Administrator on 2016/11/25.
 */
/**
 * Created by Administrator on 2016/11/25.
 */
var babyFish=function () {
    this.eye=[];
    this.eyeTimer=0;
    this.eyeIndex=0;
    this.eyeInterval=2000;

    this.fishBody=[];
    this.fishBodyTimer=0;
    this.fishBodyIndex=0;

    this.fishTail=[];
    this.fishTailTimer=0;
    this.fishTailIndex=0;

    this.x=conWidth*0.5;
    this.y=conHeight*0.5;
    this.angle=0;
    this.init();
}
babyFish.prototype.init=function () {
    this.eye.src="./imgs/babyEye0.png";
    this.fishBody.src="./imgs/babyFade0.png";
    for (var i=0;i<8;i++)
    {
        this.fishTail[i]=new Image;
        this.fishTail[i].src="./imgs/babyTail"+i+".png";
    }
    for (var i=0;i<2;i++)
    {
        this.eye[i]=new Image;
        this.eye[i].src="./imgs/babyEye"+i+".png";
    }
    for (var i=0;i<20;i++)
    {
        this.fishBody[i]=new Image;
        this.fishBody[i].src="./imgs/babyFade"+i+".png";
    }
}
babyFish.prototype.draw=function () {
    //鱼尾巴时间间隔
    this.fishTailTimer+=intervalTime;
    if(this.fishTailTimer>50){
        this.fishTailIndex=(this.fishTailIndex+1)%8;
        this.fishTailTimer=0;
    }
    //鱼眼睛
    this.eyeTimer+=intervalTime;
    if(this.eyeTimer>this.eyeInterval){
        if(this.eyeIndex==1){
            this.eyeInterval=Math.random()*1500+2000;
        }
        else{
            this.eyeInterval=200;
        }
        this.eyeIndex=(this.eyeIndex+1)%2;
        this.eyeTimer=0;
    }
    //鱼的身体动画
    this.fishBodyTimer+=intervalTime;
    if(this.fishBodyTimer>300){
        this.fishBodyIndex=this.fishBodyIndex+1;
        if(this.fishBodyIndex>=20){ //小鱼变白 游戏结束
            this.fishBodyIndex=19;
            myData.gameOver=true;
            startBtn.style.display="block";
        }
        this.fishBodyTimer=0;
    }

    this.x=myBigFish.lerp(myBigFish.x,this.x,0.98);
    this.y=myBigFish.lerp(myBigFish.y,this.y,0.98);
    /* this.x=mouseX;
     this.y=mouseY;*/
    var mmx=myBigFish.x-this.x;
    var mmy=myBigFish.y-this.y;
    var aimAngle=Math.atan2(mmy,mmx)+Math.PI;
    this.angle=myBigFish.angleLerp(aimAngle,this.angle,0.96);
    context1.save();
    context1.translate(this.x,this.y);
    context1.rotate(this.angle);
    var tailIndex=this.fishTailIndex;
    var eyeIndex=this.eyeIndex;
    var bodyIndex=this.fishBodyIndex;
    context1.drawImage(this.fishBody[bodyIndex],-this.eye[eyeIndex].width*0.5,-this.fishBody[bodyIndex].height*0.5);
    context1.drawImage(this.fishTail[tailIndex],this.fishBody[bodyIndex].width-15,-this.fishTail[tailIndex].height*0.5);
    context1.drawImage(this.eye[eyeIndex],this.eye[eyeIndex].width*0.5+5,-this.eye[eyeIndex].height*0.5);
    context1.restore();

}

