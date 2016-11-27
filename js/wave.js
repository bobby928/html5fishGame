/**
 * Created by Administrator on 2016/11/26.
 */
var wave=function () {
    this.x=[];
    this.y=[];
    this.r=[];
    this.active=[];
    this.waveAlf=1;

    this.bx=[];
    this.bay=[];
    this.br=[];
    this.babyActive=[];
    this.babyWaveAlf=1;

    this.poolNum=10;
}
wave.prototype.init=function () {
    for(var i=0;i<this.poolNum;i++)
    {
        this.active[i]=false;
        this.babyActive[i]=false;
    }
    
}
wave.prototype.draw=function () {

    for(var i=0;i<this.poolNum;i++)
    {
        context1.save();
        if(this.active[i]){
            this.waveAlf=(50-this.r[i])/(50-10);
            this.r[i]+=intervalTime*0.05;
            context1.strokeStyle="rgba(255,255,255,"+this.waveAlf+")";
            if(this.r[i]>50)
            {
                this.r[i]=50;
                this.active[i]=false;
                continue;
            }
            context1.beginPath();
            context1.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);
            context1.closePath();
            context1.lineWidth=2;
            context1.stroke();
            context1.restore();
        }
    }
}
wave.prototype.babydraw=function () {
   // console.log("BABYwave");
    for(var i=0;i<this.poolNum;i++)
    {
        context1.save();
        if(this.babyActive[i]){
           // console.log("BABYwave"+i);
            this.babyWaveAlf=(80-this.br[i])/(80-10);
            this.br[i]+=intervalTime*0.05;
            context1.strokeStyle="rgba(252,100,25,"+this.babyWaveAlf+")";
            if(this.br[i]>80)
            {
                this.br[i]=80;
                this.babyActive[i]=false;
                continue;
            }
            context1.beginPath();
            context1.arc(this.bx[i],this.bay[i],this.br[i],0,Math.PI*2);
            context1.closePath();
            context1.lineWidth=2;
            context1.stroke();
            context1.restore();
        }
    }
}
wave.prototype.born=function (x,y) {
   // console.log("wave"+x+" "+y);
        for(var i=0;i<this.poolNum;i++)
        {
            if(!this.active[i]){
                this.x[i]=x;
                this.y[i]=y;
                this.r[i]=10;
                this.active[i]=true;
                return;
            }
    }
}
wave.prototype.babyBorn=function (x,y) {
    // console.log("BABYwave"+x+" "+y);
    for(var i=0;i<this.poolNum;i++)
    {
        if(!this.babyActive[i]){
            this.bx[i]=x;
            this.bay[i]=y;
            this.br[i]=10;
            this.babyActive[i]=true;
            return;
        }
    }
}