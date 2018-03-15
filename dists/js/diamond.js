/**
 * getContext()返回一个用于在画布上绘图的环境
 **/
$(function () {
    var canvas = document.querySelector('#myCanvas');
    var ctx = canvas.getContext('2d');
    var n;
    /* for(var j = 0;j<8;j++){
         for(var i = 0;i<8;i+=2){//0 1 2 3 4 5 6 7/////0 2 4 6
             j%2==0?n=i:n=i+1;//如果j是偶数 恰好是奇数行
             ctx.fillRect(100*n,100*j,100,100);//0 100 200 300...700   ////0 200 400 600
         }
     }*/
    setInterval(function(){
        //i：行 j：列
        for(var j = 0;j<8;j++){
            for(var i = 0;i<8;i+=2){//0 1 2 3 4 5 6 7/////0 2 4 6
                j%2==0?n=i:n=i+1;//如果j是偶数 恰好是奇数行
                ctx.fillStyle=rgb();
                ctx.fillRect(100*n,100*j,100,100);//0 100 200 300...700   ////0 200 400 600
            }
        }
    },200);
    function rgb(){//background:rgb(x,y,z);
        var r = Math.floor(Math.random()*256);//[0,1)*256
        var g = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);
        return 'rgb('+r+','+g+','+b+')';//'rgb(23,56,213)'
    }
})

