/**
 * Created by Administrator on 2016/11/27.
 */
var dust=function () {
    this.x=[];
    this.y=[];
    this.fudu=[];
    this.dustNum=30;
    this.index=[];
    this.dusts=[];
    this.alpha=0;
    this.init();
}
dust.prototype.init=function () {
    for(var i=0;i<7 ;i++){
        this.dusts[i]=new Image();
        this.dusts[i].src="./imgs/dust"+i+".png";
    }
    for(var i=0;i<this.dustNum ;i++){
        this.x[i]=conWidth*Math.random();
        this.y[i]=conHeight*Math.random();
        this.fudu[i]=20+Math.random()*15;
        this.index[i]=Math.floor(Math.random()*7);
    }
}
dust.prototype.draw=function () {
    // console.log("drawSeeWead"+context2);
    this.alpha+=intervalTime*0.0009;
    var l=Math.sin(this.alpha);
    context1.save();
    for (var i=0;i<this.dustNum;i++)
    {
        var index=this.index[i];
      context1.drawImage(this.dusts[index],this.x[i]+this.fudu[i]*l,this.y[i]);
    }
    context2.restore();

}