/**
 * Created by Administrator on 2016/11/25.
 */
var fruit=function () {
    this.x=[];
    this.y=[];
    this.size=[];
    this.speed=[];
    this.num=30;
    this.active=[];
    this.fruitType=[];
    this.blueFru=new Image();
    this.orangeFru=new Image();
    this.init();
}
fruit.prototype.init=function () {
   // console.log("init fruit");
    this.orangeFru.src="./imgs/orange.png";
    this.blueFru.src="./imgs/blue.png";
    for (var i=0;i<this.num;i++)
    {
        this.active[i]=false;
        this.x[i]=0;
        this.y[i]=0;
        this.size[i]=0;
        this.speed[i]=Math.random()*0.015+0.008; //[0.008,0.023)
        //console.log(Math.random());
        this.born(i);
    }
}
fruit.prototype.draw=function () {
    this.fruitNumListener();
    for (var i=0;i<this.num;i++)
    {  var fruit=null;
       if(this.active[i])
       {

           if (this.y[i]<0)
           {
               this.active[i]=false;
           }
           if(this.size[i]<14){
               this.size[i]+=this.speed[i]*intervalTime;
           }
           else{
               this.y[i]-=this.speed[i]*intervalTime*5;
           }
           if(this.fruitType[i]=="blue"){
               fruit=this.blueFru;
           }
           else{
               fruit=this.orangeFru;
           }

       }
        context2.drawImage(fruit,this.x[i],this.y[i],this.size[i],this.size[i]);
    }
}
fruit.prototype.born=function (i) {
    var random=Math.floor(Math.random()*myseeWead.seeWeadNum);
    this.x[i]=myseeWead.headX[random];
    this.y[i]=myseeWead.headY[random];
    this.active[i]=true;
    if(Math.random()<0.2)
    {
        this.fruitType[i]="blue";
    }
    else{
        this.fruitType[i]="orange";
    }
    this.size[i]=0;
}
fruit.prototype.fruitNumListener=function(){
    for (var i=0;i<this.num;i++)
    {
        if(!this.active[i]){
            this.born(i);
        }
    }
}

// fruit.prototype.fruitBeEaten=function () {
//
// }
