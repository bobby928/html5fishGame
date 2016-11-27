/**
 * Created by Administrator on 2016/11/25.
 */
var bigFish=function () {
    this.eye=[];
    this.eyeTimer=0;
    this.eyeIndex=0;
    this.eyeInterval=2000;

    this.fishBlueBody=[];
    this.fishOrangeBody=[];
    this.fishBodyIndex=0;

    this.fishTail=[];
    this.fishTailTimer=0;
    this.fishTailIndex=0;

    this.x=conWidth*0.5;
    this.y=conHeight*0.5;
    this.angle=0;
    this.init();
}
bigFish.prototype.init=function () {
    for (var i=0;i<8;i++)
    {
        this.fishTail[i]=new Image;
        this.fishTail[i].src="./imgs/bigTail"+i+".png";
    }
    for (var i=0;i<2;i++)
    {
        this.eye[i]=new Image;
        this.eye[i].src="./imgs/bigEye"+i+".png";
    }
    for (var i=0;i<8;i++)
    {
        this.fishBlueBody[i]=new Image;
        this.fishOrangeBody[i]=new Image;
        this.fishBlueBody[i].src="./imgs/bigSwimBlue"+i+".png";
        this.fishOrangeBody[i].src="./imgs/bigSwim"+i+".png";
    }
}
bigFish.prototype.draw=function () {
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
    /*this.fishBodyTimer+=intervalTime;
    if(this.fishBodyTimer>50){
        this.fishBodyIndex=this.fishBodyIndex+1;
        if(this.fishBodyIndex>=8){
            this.fishBodyIndex=7;
        }
    }*/

    this.x=this.lerp(mouseX,this.x,0.9);
    this.y=this.lerp(mouseY,this.y,0.9);
   /* this.x=mouseX;
    this.y=mouseY;*/
    var mmx=mouseX-this.x;
    var mmy=mouseY-this.y;
    var aimAngle=Math.atan2(mmy,mmx)+Math.PI;
    this.angle=this.angleLerp(aimAngle,this.angle,0.8);
   context1.save();
   context1.translate(this.x,this.y);
   context1.rotate(this.angle);

    var tailIndex=this.fishTailIndex;
    var eyeIndex=this.eyeIndex;
    var bodyIndex=this.fishBodyIndex;
    var body=null;
    if(myData.fruitKind==1){
        body=this.fishOrangeBody[bodyIndex];
    }
    else{
        body=this.fishBlueBody[bodyIndex];
    }
    context1.drawImage(body,-this.eye[eyeIndex].width*0.5,-body.height*0.5);
    context1.drawImage(this.fishTail[tailIndex],body.width-15,-this.fishTail[tailIndex].height*0.5);
    context1.drawImage(this.eye[eyeIndex],this.eye[eyeIndex].width*0.5+5,-this.eye[eyeIndex].height*0.5);
   context1.restore();

}
bigFish.prototype.lerp=function (aim,current,speedPercent) {
    var x=current-aim;
    return aim+x*speedPercent;
}
bigFish.prototype.angleLerp=function (a,b,t) {
    var d=b-a;
    if(d>Math.PI){d=d-2*Math.PI;}
    if(d<-Math.PI){d=d+2*Math.PI;}
    return a+d*t;
}

bigFish.prototype.fishEatFruit=function () {
   // console.log(".fishEatFruit");
    for (var i=0;i<myFruit.num;i++)
    {
        if(!myData.gameOver){

            if(myFruit.active[i])
            {
                var distance=Math.pow(myFruit.x[i]-this.x,2)+Math.pow(myFruit.y[i]-this.y,2);
                if(distance<400){
                    myFruit.active[i]=false;
                    this.fishBodyIndex++;
                    myWave.born(this.x,this.y);
                    if(this.fishBodyIndex>=8){
                        this.fishBodyIndex=7;
                    }
                    if(myFruit.fruitType[i]=="blue")
                    {
                        myData.fruitKind=2;
                        myData.blueNum++;
                    }
                    else {
                        myData.fruitKind=1;
                        myData.orangeNum++;
                    }
                }
            }


        }
    }
}
bigFish.prototype.fishFeedBabyFish=function () {
    if(!myData.gameOver){
        if((myData.blueNum+myData.orangeNum)>0)
        {
            var distance=Math.pow(myBabyFish.x-this.x,2)+Math.pow(myBabyFish.y-this.y,2);
            if(distance<400)
            {
                myWave.babyBorn(myBabyFish.x,myBabyFish.y);
                myBabyFish.fishBodyIndex=0;
                this.fishBodyIndex=0;
                myData.scroe+=myData.blueNum*200+myData.orangeNum*100;
                myData.blueFruNum+=myData.blueNum;
                myData.orangeFruNum+=myData.orangeNum;
                myData.blueNum=0;
                myData.orangeNum=0;
            }
        }

    }

}