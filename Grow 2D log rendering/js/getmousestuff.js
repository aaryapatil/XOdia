var x1,y1,x2,y2,x3,y3,z1=1,z2=1;
var first_move1=0,first_move2=0;
var turner=1;
var ch1;                   
var unfif1=-1,unfjf1=-1;                  //   unfreezer for player 1
var unfif2=-1,unfjf2=-1;                 //                             //
var move;
var if1=-1,jf1=-1,if2=-1,jf2=-1;
var sc1=0,sc2=0,e1=0,e2=0;
var store = new Array (10);
var color;
    var list = new Array(10);
        var z;
        for(z=0 ; z<10 ; z++ )
        {
          store[z]=new Array(10);
        }
        for(z=0 ; z<10 ; z++ )
        {
          for(y=0;y<10;y++)
          {
            store[z][y]="000000000";
          }
          
        }


function updatescore(score11,score22){
    console.log(score11,score22,"score updated");
    document.getElementById("p1").innerHTML = "Radiant : "+score11;
    document.getElementById("p2").innerHTML = "Dire    : "+score22;

}

function underlineplayer(score11,score22){
    if(turner%2==1){
        document.getElementById("p2").style.textDecoration = "";
        document.getElementById("p1").style.textDecoration = "underline";
        updatescore(score11,score22);
    }
    else if(turner%2==0){
        document.getElementById("p2").style.textDecoration = "underline";
        document.getElementById("p1").style.textDecoration = "";
        updatescore(score11,score22);
    }
}

function savecoord(event){
unfif1=if1;
unfjf1=jf1;                  //   unfreezer values
unfif2=if2;
unfjf2=jf2;
    
    // if((unfif1 != -1 || unfif2 != -1)){
    //     if(unfif1 != -1){
    //         ctx.fillStyle="green";
    //         //ctx.fillRect(unfif1*60,*60,6,6);
    //     }
    // }
    if(turner%2==1)
    {
       if(first_move1==0)
        {
            
            


            if(z1==1){
            event = event || window.event;
            x1 = event.pageX - c.offsetLeft;
            y1 = event.pageY - c.offsetTop;
            
            x1=x1/60;
            if(Math.ceil(x1)-x1<x1-Math.floor(x1))
            {
                x1=Math.ceil(x1);
            }
            else
            {
                x1=Math.floor(x1);
            }
        
            y1=y1/60;
            if(Math.ceil(y1)-y1<y1-Math.floor(y1))
            {
                y1=Math.ceil(y1);
            }
            else
            {
                y1=Math.floor(y1);
            }
            ctx.fillStyle="red";
            ctx.fillRect(x1*60,y1*60,6,6);
            
            z1=2;
          }
          else if(z1==2){
            event = event || window.event;
            x2 = event.pageX - c.offsetLeft;
            y2 = event.pageY - c.offsetTop;
            x2=x2/60;
            if(Math.ceil(x2)-x2<x2-Math.floor(x2))
            {
                x2=Math.ceil(x2);
            }
            else
            {
                x2=Math.floor(x2);
            }
        
            y2=y2/60;
            if(Math.ceil(y2)-y2<y2-Math.floor(y2))
            {
                y2=Math.ceil(y2);
            }
            else
            {
                y2=Math.floor(y2);
            }
            move=y1+","+x1+","+y2+","+x2;
           // alert(move);
            //return  [flag,arr1,if1,jf1,if2,jf2,sc1,sc2,e1,e2];
    

            list=isMoveValid(move,store,if1,jf1,if2,jf2,sc1,sc2,e1,e2,turner-1);
             store = list[1];
    if1 = list[2];
    jf1 = list[3];
    if2 = list[4];
    jf2 = list[5];
    sc1 = list[6];
    sc2 = list[7];
    updatescore(sc1,sc2);
    e1 = list[8];
    e2 = list[9];
            // store = list[1];
            // if1 = list[2];
            // jf1 = list[3];
            // if2 = list[4];
            // jf2 = list[5];
            // sc1 = list[6];
            // sc2 = list[7];
            // e1 = list[8];
            // e2 = list[9];
            if(list[0]==0)
            {
             ctx.beginPath();
             ctx.strokeStyle="red";
             ctx.moveTo(x1*60+3,y1*60+3);
             ctx.lineTo(x2*60+3,y2*60+3);
             ctx.stroke();
             ctx.fillStyle="green";
             ctx.fillRect(x2*60,y2*60,6,6);
             turner++;
             z1=1;
             first_move1=1;
             }
             else
             {
                //alert("Invalid Move");
                ctx.fillStyle="#3f3f3b";
                ctx.fillRect(x1*60,y1*60,6,6);
                z1=1;

             }

            // ctx.fillStyle="red";
            // ctx.fillRect(x1*60-5,y1*60-5,10,10);
    
            
            
          }
        }
        else
        {
          if(z1==1){
            event = event || window.event;
            x1 = event.pageX - c.offsetLeft;
            y1 = event.pageY - c.offsetTop;
            x1=x1/60;
            if(Math.ceil(x1)-x1<x1-Math.floor(x1))
            {
                x1=Math.ceil(x1);
            }
            else
            {
                x1=Math.floor(x1);
            }
        
            y1=y1/60;0
            if(Math.ceil(y1)-y1<y1-Math.floor(y1))
            {
                y1=Math.ceil(y1);
            }
            else
            {
                y1=Math.floor(y1);
            }
        
            z1=2;
            ctx.fillStyle="red";
            ctx.fillRect(x1*60,y1*60,6,6);       
          }
          else if(z1==2){
            event = event || window.event;
            x2 = event.pageX - c.offsetLeft;
            y2 = event.pageY - c.offsetTop;
            x2=x2/60;
            if(Math.ceil(x2)-x2<x2-Math.floor(x2))
            {
                x2=Math.ceil(x2);
            }
            else
            {
                x2=Math.floor(x2);
            }
        
            y2=y2/60;
            if(Math.ceil(y2)-y2<y2-Math.floor(y2))
            {
                y2=Math.ceil(y2);
            }
            else
            {
                y2=Math.floor(y2);
            }
        
            z1=3;
            ctx.fillStyle="green";
            ctx.fillRect(x2*60,y2*60,6,6);
            // ctx.fillStyle="blue";
            // ctx.fillRect(x2*60-5,y2*60-5,10,10);
            
          }
          else if(z1==3)
          {
            event = event || window.event;
            x3 = event.pageX - c.offsetLeft;
            y3 = event.pageY - c.offsetTop;
            x3=x3/60;
            if(Math.ceil(x3)-x3<x3-Math.floor(x3))
            {
                x3=Math.ceil(x3);
            }
            else
            {
                x3=Math.floor(x3);
            }
        
            y3=y3/60;
            if(Math.ceil(y3)-y3<y3-Math.floor(y3))
            {
                y3=Math.ceil(y3);
            }
            else
            {
                y3=Math.floor(y3);
            }
             move=y1+","+x1+","+y2+","+x2+","+y3+","+x3;
             //alert(move);
            list=isMoveValid(move,store,if1,jf1,if2,jf2,sc1,sc2,e1,e2,turner-1);
            store = list[1];
             store = list[1];
                if1 = list[2];
                jf1 = list[3];
                if2 = list[4];
                jf2 = list[5];
                sc1 = list[6];
                sc2 = list[7];
                updatescore(sc1,sc2);
                e1 = list[8];
                e2 = list[9];
                
            if(list[0]==0)
            {
                if(unfif1 != -1 || unfif2 != -1){

                    if(unfif1!=-1)
                    {
                        ctx.fillStyle="green";
                        ctx.fillRect(unfjf1*60,unfif1*60,6,6);
                    }
                    if(unfif2!=-1)
                    {
                        ctx.fillStyle="green";
                        ctx.fillRect(unfjf2*60,unfif2*60,6,6);
                    }
                //change colour;
                }
                ctx.beginPath();
                ctx.strokeStyle="red";
                ctx.moveTo(x1*60+3,y1*60+3);
                ctx.lineTo(x2*60+3,y2*60+3);
                ctx.moveTo(x1*60+3,y1*60+3);
                ctx.lineTo(x3*60+3,y3*60+3);
                ctx.lineWidth=1;
                ctx.stroke();
                ctx.fillStyle="green";
                ctx.fillRect(x3*60,y3*60,6,6);
                turner++;
                z1=1;
                if(list[2]!=-1&&list[4]!=-1)
                {
                    //alert(list[2]+list[3]+list[4]+list[5]);

                    turner--;
                    ctx.fillStyle="green";
                //ctx.fillRect(list[2]*60,list[3]*60,6,6);
                ctx.fillStyle="green";
                //ctx.fillRect(list[4]*60,list[5]*60,6,6);

                }
                else if(list[2]!=-1){
                    //alert(list[2]+list[3]+list[4]+list[5]);
                    turner--;
                    ctx.fillStyle="green";
                    ctx.fillRect(list[2]*60,list[3]*60,6,6);
                }
                else if(list[4]!=-1){
                    turner--;
                    ctx.fillStyle="green";
                    ctx.fillRect(list[4]*60,list[5]*60,6,6);
                }
                ch1=store[y1][x1].charAt(0);
                if(ch1=='0')
                {
                    ctx.fillStyle="#3f3f3b";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }
                else if(ch1=='1')
                {
                    ctx.fillStyle="green";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }
                else if(ch1=='2')
                {
                    ctx.fillStyle="yellow";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }
                else if(ch1=='3')
                {
                    ctx.fillStyle="red";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }
                else if(ch1=='4')
                {
                    ctx.fillStyle="blue";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }
                else if(ch1=='5')
                {
                    ctx.fillStyle="pink";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }
                else if(ch1=='6')
                {
                    ctx.fillStyle="cyan";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }

                ch1=store[y2][x2].charAt(0);
                if(ch1=='0')
                {
                    ctx.fillStyle="#3f3f3b";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                else if(ch1=='1')
                {
                    ctx.fillStyle="green";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                else if(ch1=='2')
                {
                    ctx.fillStyle="yellow";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                else if(ch1=='3')
                {
                    ctx.fillStyle="red";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                else if(ch1=='4')
                {
                    ctx.fillStyle="blue";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                else if(ch1=='5')
                {
                    ctx.fillStyle="pink";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                else if(ch1=='6')
                {
                    ctx.fillStyle="cyan";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                ch1=store[y3][x3].charAt(0);
                if(ch1=='0')
                {
                    ctx.fillStyle="#3f3f3b";
                    ctx.fillRect(x3*60,y3*60,6,6);
                }
                else if(ch1=='1')
                {
                    ctx.fillStyle="green";
                    ctx.fillRect(x3*60,y3*60,6,6);
                }
                else if(ch1=='2')
                {
                    ctx.fillStyle="yellow";
                    ctx.fillRect(x3*60,y3*60,6,6);
                }
                else if(ch1=='3')
                {
                    ctx.fillStyle="red";
                    ctx.fillRect(x3*60,y3*60,6,6);
                }
                else if(ch1=='4')
                {
                    ctx.fillStyle="blue";
                    ctx.fillRect(x3*60,y3*60,6,6);
                }
                else if(ch1=='5')
                {
                    ctx.fillStyle="pink";
                    ctx.fillRect(x3*60,y3*60,6,6);
                }
                else if(ch1=='6')
                {
                    ctx.fillStyle="cyan";
                    ctx.fillRect(x3*60,y3*60,6,6);
                }
            }
            else
            {
                //alert("Invalid Move");
                z1=1;
                ch1=store[y1][x1].charAt(0);
                if(ch1=='0')
                {
                    ctx.fillStyle="#3f3f3b";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }
                else if(ch1=='1')
                {
                    ctx.fillStyle="green";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }
                else if(ch1=='2')
                {
                    ctx.fillStyle="yellow";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }
                else if(ch1=='3')
                {
                    ctx.fillStyle="red";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }
                else if(ch1=='4')
                {
                    ctx.fillStyle="blue";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }
                else if(ch1=='5')
                {
                    ctx.fillStyle="pink";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }
                else if(ch1=='6')
                {
                    ctx.fillStyle="cyan";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }

                ch1=store[y2][x2].charAt(0);
                if(ch1=='0')
                {
                    ctx.fillStyle="#3f3f3b";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                else if(ch1=='1')
                {
                    ctx.fillStyle="green";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                else if(ch1=='2')
                {
                    ctx.fillStyle="yellow";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                else if(ch1=='3')
                {
                    ctx.fillStyle="red";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                else if(ch1=='4')
                {
                    ctx.fillStyle="blue";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                else if(ch1=='5')
                {
                    ctx.fillStyle="pink";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                else if(ch1=='6')
                {
                    ctx.fillStyle="cyan";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }

                // ctx.fillStyle="#A6B8C2";
                // ctx.fillRect(x1*60,y1*60,6,6);
                // ctx.putImageData(color, x1, y1);
                // ctx.fillStyle="#E2D0AA";
                // ctx.fillRect(x2*60,y2*60,6,6);    

            }
          }
        }
    
    
    }
    else if(turner%2==0)
    {    
        if(first_move2==0)
        {
            if(z2==1){
            event = event || window.event;
            x1 = event.pageX - c.offsetLeft;
            y1 = event.pageY - c.offsetTop;
            x1=x1/60;
            if(Math.ceil(x1)-x1<x1-Math.floor(x1))
            {
                x1=Math.ceil(x1);
            }
            else
            {
                x1=Math.floor(x1);
            }
        
            y1=y1/60;
            if(Math.ceil(y1)-y1<y1-Math.floor(y1))
            {
                y1=Math.ceil(y1);
            }
            else
            {
                y1=Math.floor(y1);
            }
        
            z2=2;
            ctx.fillStyle="blue";
            ctx.fillRect(x1*60,y1*60,6,6);
          }
          else if(z2==2){
            event = event || window.event;
            x2 = event.pageX - c.offsetLeft;
            y2 = event.pageY - c.offsetTop;
            x2=x2/60;
            if(Math.ceil(x2)-x2<x2-Math.floor(x2))
            {
                x2=Math.ceil(x2);
            }
            else
            {
                x2=Math.floor(x2);
            }
        
            y2=y2/60;
            if(Math.ceil(y2)-y2<y2-Math.floor(y2))
            {
                y2=Math.ceil(y2);
            }
            else
            {
                y2=Math.floor(y2);
            }
            move=y1+","+x1+","+y2+","+x2;
             //alert(move);
            list=isMoveValid(move,store,if1,jf1,if2,jf2,sc1,sc2,e1,e2,turner-1);
            store = list[1];
             store = list[1];
            if1 = list[2];
            jf1 = list[3];
            if2 = list[4];
            jf2 = list[5];
            sc1 = list[6];
            sc2 = list[7];
            e1 = list[8];
            e2 = list[9];
            if(list[0]==0)
            {
                ctx.beginPath();
             ctx.strokeStyle="blue";
                 ctx.moveTo(x1*60+3,y1*60+3);
                 ctx.lineTo(x2*60+3,y2*60+3);
                 ctx.stroke();
                 turner++;
            
                 z2=1;
                 ctx.fillStyle="yellow";
                 ctx.fillRect(x2*60,y2*60,6,6);
                 first_move2=1;
             }
             else
             {
                //alert("Invalid Move");
                ctx.fillStyle="#3f3f3b";
                ctx.fillRect(x1*60,y1*60,6,6);
                z2=1;
             }

          }
        }
        else
        {
          if(z2==1){
            event = event || window.event;
            x1 = event.pageX - c.offsetLeft;
            y1 = event.pageY - c.offsetTop;
            x1=x1/60;
            if(Math.ceil(x1)-x1<x1-Math.floor(x1))
            {
                x1=Math.ceil(x1);
            }
            else
            {
                x1=Math.floor(x1);
            }
        
            y1=y1/60;
            if(Math.ceil(y1)-y1<y1-Math.floor(y1))
            {
                y1=Math.ceil(y1);
            }
            else
            {
                y1=Math.floor(y1);
            }
            ctx.fillStyle="blue";
            ctx.fillRect(x1*60,y1*60,6,6);
            z2=2;
          }
          else if(z2==2){
            event = event || window.event;
            x2 = event.pageX - c.offsetLeft;
            y2 = event.pageY - c.offsetTop;
            x2=x2/60;
            if(Math.ceil(x2)-x2<x2-Math.floor(x2))
            {
                x2=Math.ceil(x2);
            }
            else
            {
                x2=Math.floor(x2);
            }
        
            y2=y2/60;
            if(Math.ceil(y2)-y2<y2-Math.floor(y2))
            {
                y2=Math.ceil(y2);
            }
            else
            {
                y2=Math.floor(y2);
            }
        
            z2=3;
            ctx.fillStyle="yellow";
            ctx.fillRect(x2*60,y2*60,6,6);
            // ctx.fillStyle="cyan";
            // ctx.fillRect(x2*60-5,y2*60-5,10,10);
          }
          else if(z2==3){
            event = event || window.event;
            x3 = event.pageX - c.offsetLeft;
            y3 = event.pageY - c.offsetTop;
            x3=x3/60;
            if(Math.ceil(x3)-x3<x3-Math.floor(x3))
            {
                x3=Math.ceil(x3);
            }
            else
            {
                x3=Math.floor(x3);
            }
        
            y3=y3/60;
            if(Math.ceil(y3)-y3<y3-Math.floor(y3))
            {
                y3=Math.ceil(y3);
            }
            else
            {
                y3=Math.floor(y3);
            }
            move=y1+","+x1+","+y2+","+x2+","+y3+","+x3;
             //alert(move);F
            list=isMoveValid(move,store,if1,jf1,if2,jf2,sc1,sc2,e1,e2,turner-1);
            store = list[1];
             store = list[1];
                if1 = list[2];
                jf1 = list[3];
                if2 = list[4];
                jf2 = list[5];
                sc1 = list[6];
                sc2 = list[7];
                e1 = list[8];
                e2 = list[9];
            if(list[0]==0)
            {
                if(unfif1 != -1 || unfif2 != -1){
                    if(unfif1!=-1)
                    {
                        ctx.fillStyle="yellow";
                        ctx.fillRect(unfjf1*60,unfif1*60,6,6);
                    }
                    if(unfif2!=-1)
                    {
                        ctx.fillStyle="yellow";
                        ctx.fillRect(unfjf2*60,unfif2*60,6,6);
                    }
                //change colour;
                }
                ctx.beginPath();
             ctx.strokeStyle="blue";
                ctx.moveTo(x1*60+3,y1*60+3);
                ctx.lineTo(x2*60+3,y2*60+3);
                ctx.moveTo(x1*60+3,y1*60+3);
                ctx.lineTo(x3*60+3,y3*60+3);
                ctx.stroke();
                ctx.fillStyle="yellow";
                ctx.fillRect(x3*60,y3*60,6,6);
                turner++; 
                z2=1;
                if(list[2]!=-1&&list[4]!=-1)
                {
                    //alert(list[2]+list[3]+list[4]+list[5]);
                    turner--;
                    ctx.fillStyle="yellow";
                    //ctx.fillRect(list[2]*60,list[3]*60,6,6);
                    ctx.fillStyle="#yellow";
                    //ctx.fillRect(list[4]*60,list[5]*60,6,6);
                
                

                }
                else if(list[2]!=-1){
                    //alert(list[2]+list[3]+list[4]+list[5]);
                    ctx.fillStyle="yellow";
                    ctx.fillRect(list[2]*60,list[3]*60,6,6);
                    turner--;
                }
		          else if(list[4]!=-1){
		              ctx.fillStyle="yellow";
                    ctx.fillRect(list[4]*60,list[5]*60,6,6);
                    turner--;
		          }
                                ch1=store[y1][x1].charAt(0);
                if(ch1=='0')
                {
                    ctx.fillStyle="#3f3f3b";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }
                else if(ch1=='1')
                {
                    ctx.fillStyle="green";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }
                else if(ch1=='2')
                {
                    ctx.fillStyle="yellow";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }
                else if(ch1=='3')
                {
                    ctx.fillStyle="red";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }
                else if(ch1=='4')
                {
                    ctx.fillStyle="blue";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }
                else if(ch1=='5')
                {
                    ctx.fillStyle="pink";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }
                else if(ch1=='6')
                {
                    ctx.fillStyle="cyan";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }

                ch1=store[y2][x2].charAt(0);
                if(ch1=='0')
                {
                    ctx.fillStyle="#3f3f3b";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                else if(ch1=='1')
                {
                    ctx.fillStyle="green";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                else if(ch1=='2')
                {
                    ctx.fillStyle="yellow";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                else if(ch1=='3')
                {
                    ctx.fillStyle="red";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                else if(ch1=='4')
                {
                    ctx.fillStyle="blue";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                else if(ch1=='5')
                {
                    ctx.fillStyle="pink";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                else if(ch1=='6')
                {
                    ctx.fillStyle="cyan";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                ch1=store[y3][x3].charAt(0);
                if(ch1=='0')
                {
                    ctx.fillStyle="#3f3f3b";
                    ctx.fillRect(x3*60,y3*60,6,6);
                }
                else if(ch1=='1')
                {
                    ctx.fillStyle="green";
                    ctx.fillRect(x3*60,y3*60,6,6);
                }
                else if(ch1=='2')
                {
                    ctx.fillStyle="yellow";
                    ctx.fillRect(x3*60,y3*60,6,6);
                }
                else if(ch1=='3')
                {
                    ctx.fillStyle="red";
                    ctx.fillRect(x3*60,y3*60,6,6);
                }
                else if(ch1=='4')
                {
                    ctx.fillStyle="blue";
                    ctx.fillRect(x3*60,y3*60,6,6);
                }
                else if(ch1=='5')
                {
                    ctx.fillStyle="pink";
                    ctx.fillRect(x3*60,y3*60,6,6);
                }
                else if(ch1=='6')
                {
                    ctx.fillStyle="cyan";
                    ctx.fillRect(x3*60,y3*60,6,6);
                }
            }
            else
            {
                //alert("Invalid Move By Player 2");
                z2=1;
                ch1=store[y1][x1].charAt(0);
                if(ch1=='0')
                {
                    ctx.fillStyle="#3f3f3b";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }
                else if(ch1=='1')
                {
                    ctx.fillStyle="green";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }
                else if(ch1=='2')
                {
                    ctx.fillStyle="yellow";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }
                else if(ch1=='3')
                {
                    ctx.fillStyle="red";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }
                else if(ch1=='4')
                {
                    ctx.fillStyle="blue";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }
                else if(ch1=='5')
                {
                    ctx.fillStyle="pink";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }
                else if(ch1=='6')
                {
                    ctx.fillStyle="cyan";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }

                ch1=store[y2][x2].charAt(0);
                if(ch1=='0')
                {
                    ctx.fillStyle="#3f3f3b";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                else if(ch1=='1')
                {
                    ctx.fillStyle="green";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                else if(ch1=='2')
                {
                    ctx.fillStyle="yellow";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                else if(ch1=='3')
                {
                    ctx.fillStyle="red";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                else if(ch1=='4')
                {
                    ctx.fillStyle="blue";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                else if(ch1=='5')
                {
                    ctx.fillStyle="pink";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                else if(ch1=='6')
                {
                    ctx.fillStyle="cyan";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                // ctx.fillStyle="#E05042";
                // ctx.fillRect(x1*60,y1*60,6,6);
                // ctx.fillStyle="#E2D0AA";
                // ctx.fillRect(x2*60,y2*60,6,6);
            }
          }
        
    }
    // store = list[1];
    // if1 = list[2];
    // jf1 = list[3];
    // if2 = list[4];
    // jf2 = list[5];
    // sc1 = list[6];
    // sc2 = list[7];
    // e1 = list[8];
    // e2 = list[9];
    
      
}
    // store = list[1];
    //     if1 = list[2];
    //     jf1 = list[3];
    //     if2 = list[4];
    //     jf2 = list[5];
    //     sc1 = list[6];
    //     sc2 = list[7];
    //     e1 = list[8];
    //     e2 = list[9];
    
underlineplayer(sc1,sc2);


}




























function inputbutton()
{
        unfif1=if1;
        unfjf1=jf1;                  //   unfreezer values
        unfif2=if2;
        unfjf2=jf2;
        underlineplayer(sc1,sc2);
        move = document.getElementById("xo1").value;
        var count = 0,t=0;
        for(var i=0;i<move.length;i++){
            if(move.charAt(i) == ","){
                count++;
            }
        }
        if(turner == 1 || turner ==2){
            if(move.length != 7){
                //alert("Invalid Format.");
                toast("Invalid Format.",2000);
                t=1;
            }
            if(count!=3 && t!=1){
                //alert("Invalid Format.");
                toast("Invalid Format.",2000);
                t=1;
            }
        }
        else{
            if(move.length !=11){
                //alert("Invalid Format.");
                toast("Invalid Format.",2000);
                t=1;
            }
            if(count!=5 && t!=1){
                //alert("Invalid Format.");
                toast("Invalid Format.",2000);
                t=1;
            }
        }
        if(t==0){
    if(turner%2==1)
    {
     
        console.log(move);
        
            if(first_move1==0)
            {
                //alert(move+" is it?");
                move.split(",");
                y1=move[0];
                //alert(y1);
                x1=move[2];
                //alert(x1);
                y2=move[4];
                //alert(y2);
                x2=move[6];
                //alert(x2);
                ctx.fillStyle="red";
                ctx.fillRect(x1*60,y1*60,6,6);
                move=y1+","+x1+","+y2+","+x2;
                //alert(move);
            
                list=isMoveValid(move,store,if1,jf1,if2,jf2,sc1,sc2,e1,e2,turner-1);
                store = list[1];
                 store = list[1];
    if1 = list[2];
    jf1 = list[3];
    if2 = list[4];
    jf2 = list[5];
    sc1 = list[6];
    sc2 = list[7];
    updatescore(sc1,sc2);
    e1 = list[8];
    e2 = list[9];
                if(list[0]==0)
                {
                    ctx.beginPath();
             ctx.strokeStyle="red";
                    ctx.moveTo(x1*60+3,y1*60+3);
                    ctx.lineTo(x2*60+3,y2*60+3);
                    ctx.stroke();
                    ctx.fillStyle="green";
                    ctx.fillRect(x2*60,y2*60,6,6);
                    turner++;
                    z1=1;
                    first_move1=1;
                 }
                 else
                 {
                    //alert("Invalid Move");
                    ctx.fillStyle="#3f3f3b";
                    ctx.fillRect(x1*60,y1*60,6,6);
                    z1=1;

                 }       
            
            }
            else
            {
                //alert(move[10]);
                move.split(",");
                y1=move[0];
                x1=move[2];
                y2=move[4];
                x2=move[6];
                y3=move[8];
                x3=move[10];
                ctx.fillStyle="red";
                ctx.fillRect(x1*60,y1*60,6,6);
                ctx.fillStyle="green";
                ctx.fillRect(x2*60,y2*60,6,6);
                move=y1+","+x1+","+y2+","+x2+","+y3+","+x3;
                //alert(move);
                list=isMoveValid(move,store,if1,jf1,if2,jf2,sc1,sc2,e1,e2,turner-1);
                store = list[1];
                 store = list[1];
    if1 = list[2];
    jf1 = list[3];
    if2 = list[4];
    jf2 = list[5];
    sc1 = list[6];
    sc2 = list[7];
    updatescore(sc1,sc2);
    e1 = list[8];
    e2 = list[9];
                if(list[0]==0)
                {
                    if(unfif1 != -1 || unfif2 != -1){
                        if(unfif1!=-1)
                        {
                            ctx.fillStyle="green";
                            ctx.fillRect(unfjf1*60,unfif1*60,6,6);
                        }
                        if(unfif2!=-1)
                        {
                            ctx.fillStyle="green";
                            ctx.fillRect(unfjf2*60,unfif2*60,6,6);
                        }
                    //change colour;
                    }
                    ctx.beginPath();
             ctx.strokeStyle="red";
                    ctx.moveTo(x1*60+3,y1*60+3);
                    ctx.lineTo(x2*60+3,y2*60+3);
                    ctx.moveTo(x1*60+3,y1*60+3);
                    ctx.lineTo(x3*60+3,y3*60+3);
                    ctx.stroke();
                    ctx.fillStyle="green";
                    ctx.fillRect(x3*60,y3*60,6,6);
                    turner++;
                    z1=1;
                    if(list[2]!=-1&&list[4]!=-1)
                    {
                        //alert(list[2]+list[3]+list[4]+list[5]);

                        turner--;
                        ctx.fillStyle="green";
                        //ctx.fillRect(list[2]*60,list[3]*60,6,6);
                        //ctx.fillRect(list[4]*60,list[5]*60,6,6);

                    }
                    else if(list[2]!=-1)
                    {
                        //alert(list[2]+list[3]+list[4]+list[5]);
                        turner--;
                        ctx.fillStyle="green";
                        ctx.fillRect(list[2]*60,list[3]*60,6,6);
                    }
                    else if(list[4]!=-1){
                        turner--;
                        ctx.fillStyle="green";
                        ctx.fillRect(list[4]*60,list[5]*60,6,6);
                    }
                            ch1=store[y1][x1].charAt(0);
                            if(ch1=='0')
                            {
                                ctx.fillStyle="#3f3f3b";
                                ctx.fillRect(x1*60,y1*60,6,6);
                            }
                            else if(ch1=='1')
                            {
                                ctx.fillStyle="green";
                                ctx.fillRect(x1*60,y1*60,6,6);
                            }
                            else if(ch1=='2')
                            {
                                ctx.fillStyle="yellow";
                                ctx.fillRect(x1*60,y1*60,6,6);
                            }
                            else if(ch1=='3')
                            {
                                ctx.fillStyle="red";
                                ctx.fillRect(x1*60,y1*60,6,6);
                            }
                            else if(ch1=='4')
                            {
                                ctx.fillStyle="blue";
                                ctx.fillRect(x1*60,y1*60,6,6);
                            }
                            else if(ch1=='5')
                            {
                                ctx.fillStyle="pink";
                                ctx.fillRect(x1*60,y1*60,6,6);
                            }
                            else if(ch1=='6')
                            {
                                ctx.fillStyle="cyan";
                                ctx.fillRect(x1*60,y1*60,6,6);
                            }

                            ch1=store[y2][x2].charAt(0);
                            if(ch1=='0')
                            {
                                ctx.fillStyle="#3f3f3b";
                                ctx.fillRect(x2*60,y2*60,6,6);
                            }
                            else if(ch1=='1')
                            {
                                ctx.fillStyle="green";
                                ctx.fillRect(x2*60,y2*60,6,6);
                            }
                            else if(ch1=='2')
                            {
                                ctx.fillStyle="yellow";
                                ctx.fillRect(x2*60,y2*60,6,6);
                            }
                            else if(ch1=='3')
                            {
                                ctx.fillStyle="red";
                                ctx.fillRect(x2*60,y2*60,6,6);
                            }
                            else if(ch1=='4')
                            {
                                ctx.fillStyle="blue";
                                ctx.fillRect(x2*60,y2*60,6,6);
                            }
                            else if(ch1=='5')
                            {
                                ctx.fillStyle="pink";
                                ctx.fillRect(x2*60,y2*60,6,6);
                            }
                            else if(ch1=='6')
                            {
                                ctx.fillStyle="cyan";
                                ctx.fillRect(x2*60,y2*60,6,6);
                            }
                            ch1=store[y3][x3].charAt(0);
                            if(ch1=='0')
                            {
                                ctx.fillStyle="#3f3f3b";
                                ctx.fillRect(x3*60,y3*60,6,6);
                            }
                            else if(ch1=='1')
                            {
                                ctx.fillStyle="green";
                                ctx.fillRect(x3*60,y3*60,6,6);
                            }
                            else if(ch1=='2')
                            {
                                ctx.fillStyle="yellow";
                                ctx.fillRect(x3*60,y3*60,6,6);
                            }
                            else if(ch1=='3')
                            {
                                ctx.fillStyle="red";
                                ctx.fillRect(x3*60,y3*60,6,6);
                            }
                            else if(ch1=='4')
                            {
                                ctx.fillStyle="blue";
                                ctx.fillRect(x3*60,y3*60,6,6);
                            }
                            else if(ch1=='5')
                            {
                                ctx.fillStyle="pink";
                                ctx.fillRect(x3*60,y3*60,6,6);
                            }
                            else if(ch1=='6')
                            {
                                ctx.fillStyle="cyan";
                                ctx.fillRect(x3*60,y3*60,6,6);
                            }
                }
                else
                {
                    //alert("Invalid Move");
                    z1=1;
                ch1=store[y1][x1].charAt(0);
                if(ch1=='0')
                {
                    ctx.fillStyle="#3f3f3b";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }
                else if(ch1=='1')
                {
                    ctx.fillStyle="green";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }
                else if(ch1=='2')
                {
                    ctx.fillStyle="yellow";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }
                else if(ch1=='3')
                {
                    ctx.fillStyle="red";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }
                else if(ch1=='4')
                {
                    ctx.fillStyle="blue";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }
                else if(ch1=='5')
                {
                    ctx.fillStyle="pink";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }
                else if(ch1=='6')
                {
                    ctx.fillStyle="cyan";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }

                ch1=store[y2][x2].charAt(0);
                if(ch1=='0')
                {
                    ctx.fillStyle="#3f3f3b";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                else if(ch1=='1')
                {
                    ctx.fillStyle="green";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                else if(ch1=='2')
                {
                    ctx.fillStyle="yellow";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                else if(ch1=='3')
                {
                    ctx.fillStyle="red";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                else if(ch1=='4')
                {
                    ctx.fillStyle="blue";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                else if(ch1=='5')
                {
                    ctx.fillStyle="pink";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                else if(ch1=='6')
                {
                    ctx.fillStyle="cyan";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                    // ctx.fillStyle="#A6B8C2";
                    // ctx.fillRect(x1*60,y1*60,6,6);
                    // ctx.fillStyle="#E2D0AA";
                    // ctx.fillRect(x2*60,y2*60,6,6);    
                }
          
            }

    
    
    }
    else if(turner%2==0)
    {
        
            if(first_move2==0)
            {
                move.split(",");
                y1=move[0];
                x1=move[2];
                y2=move[4];
                x2=move[6];
                ctx.fillStyle="blue";
                ctx.fillRect(x1*60,y1*60,6,6);
                move=y1+","+x1+","+y2+","+x2;
                //alert(move);
                list=isMoveValid(move,store,if1,jf1,if2,jf2,sc1,sc2,e1,e2,turner-1);
                store = list[1];
                 store = list[1];
    if1 = list[2];
    jf1 = list[3];
    if2 = list[4];
    jf2 = list[5];
    sc1 = list[6];
    sc2 = list[7];
    updatescore(sc1,sc2);
    e1 = list[8];
    e2 = list[9];

                if(list[0]==0)
                {   
                    ctx.beginPath();
             ctx.strokeStyle="blue";
        
                     ctx.moveTo(x1*60+3,y1*60+3);
                     ctx.lineTo(x2*60+3,y2*60+3);
                     ctx.stroke();
                     turner++;
            
                     z2=1;
                     ctx.fillStyle="yellow";
                     ctx.fillRect(x2*60,y2*60,6,6);
                     first_move2=1;
                }
                else
                {
                    //alert("Invalid Move");
                    ctx.fillStyle="#3f3f3b";
                    ctx.fillRect(x1*60,y1*60,6,6);
                    z2=1;
                }
                
          
            }
            else
            {
                move.split(",");
                y1=move[0];
                x1=move[2];
                y2=move[4];
                x2=move[6];
                y3=move[8];
                x3=move[10];
                //alert("abey yaha tk aa raha hai");
                ctx.fillStyle="blue";
                ctx.fillRect(x1*60,y1*60,6,6);
                z2=2;
                ctx.fillStyle="yellow";
                ctx.fillRect(x2*60,y2*60,6,6);
                move=y1+","+x1+","+y2+","+x2+","+y3+","+x3;
                //alert(move);
                list=isMoveValid(move,store,if1,jf1,if2,jf2,sc1,sc2,e1,e2,turner-1);
                store = list[1];
                 store = list[1];
    if1 = list[2];
    jf1 = list[3];
    if2 = list[4];
    jf2 = list[5];
    sc1 = list[6];
    sc2 = list[7];
    updatescore(sc1,sc2);
    e1 = list[8];
    e2 = list[9];
                if(list[0]==0)
                {
                    if(unfif1 != -1 || unfif2 != -1){
                        if(unfif1!=-1)
                        {
                            ctx.fillStyle="yellow";
                            ctx.fillRect(unfjf1*60,unfif1*60,6,6);
                        }
                        if(unfif2!=-1)
                        {
                            ctx.fillStyle="yellow";
                            ctx.fillRect(unfjf2*60,unfif2*60,6,6);
                        }
                    //change colour;
                    }
                    ctx.beginPath();
             ctx.strokeStyle="blue";
                    ctx.moveTo(x1*60+3,y1*60+3);
                    ctx.lineTo(x2*60+3,y2*60+3);
                    ctx.moveTo(x1*60+3,y1*60+3);
                    ctx.lineTo(x3*60+3,y3*60+3);
                    ctx.stroke();
                    ctx.fillStyle="yellow";
                    ctx.fillRect(x3*60,y3*60,6,6);
                    turner++; 
                    z2=1;
                    if(list[2]!=-1&&list[4]!=-1)
                    {
                        //alert(list[2]+list[3]+list[4]+list[5]);
                        turner--;
                        ctx.fillStyle="yellow";
                        //ctx.fillRect(list[2]*60,list[3]*60,6,6);
                        ctx.fillStyle="yellow";
                        //ctx.fillRect(list[4]*60,list[5]*60,6,6);
                     }
                    else if(list[2]!=-1)
                    {
                        //alert(list[2]+list[3]+list[4]+list[5]);
                        ctx.fillStyle="yellow";
                        ctx.fillRect(list[2]*60,list[3]*60,6,6);
                        turner--;
                    }
                    else if(list[4]!=-1){
                        ctx.fillStyle="yellow";
                        ctx.fillRect(list[4]*60,list[5]*60,6,6);
                        turner--;
                    }
                ch1=store[y1][x1].charAt(0);
                if(ch1=='0')
                {
                    ctx.fillStyle="#3f3f3b";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }
                else if(ch1=='1')
                {
                    ctx.fillStyle="green";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }
                else if(ch1=='2')
                {
                    ctx.fillStyle="yellow";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }
                else if(ch1=='3')
                {
                    ctx.fillStyle="red";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }
                else if(ch1=='4')
                {
                    ctx.fillStyle="blue";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }
                else if(ch1=='5')
                {
                    ctx.fillStyle="pink";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }
                else if(ch1=='6')
                {
                    ctx.fillStyle="cyan";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }

                ch1=store[y2][x2].charAt(0);
                if(ch1=='0')
                {
                    ctx.fillStyle="#3f3f3b";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                else if(ch1=='1')
                {
                    ctx.fillStyle="green";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                else if(ch1=='2')
                {
                    ctx.fillStyle="yellow";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                else if(ch1=='3')
                {
                    ctx.fillStyle="red";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                else if(ch1=='4')
                {
                    ctx.fillStyle="blue";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                else if(ch1=='5')
                {
                    ctx.fillStyle="pink";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                else if(ch1=='6')
                {
                    ctx.fillStyle="cyan";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                ch1=store[y3][x3].charAt(0);
                if(ch1=='0')
                {
                    ctx.fillStyle="#3f3f3b";
                    ctx.fillRect(x3*60,y3*60,6,6);
                }
                else if(ch1=='1')
                {
                    ctx.fillStyle="green";
                    ctx.fillRect(x3*60,y3*60,6,6);
                }
                else if(ch1=='2')
                {
                    ctx.fillStyle="yellow";
                    ctx.fillRect(x3*60,y3*60,6,6);
                }
                else if(ch1=='3')
                {
                    ctx.fillStyle="red";
                    ctx.fillRect(x3*60,y3*60,6,6);
                }
                else if(ch1=='4')
                {
                    ctx.fillStyle="blue";
                    ctx.fillRect(x3*60,y3*60,6,6);
                }
                else if(ch1=='5')
                {
                    ctx.fillStyle="pink";
                    ctx.fillRect(x3*60,y3*60,6,6);
                }
                else if(ch1=='6')
                {
                    ctx.fillStyle="cyan";
                    ctx.fillRect(x3*60,y3*60,6,6);
                }
                }
                else
                {
                    //alert("Invalid Move By Player 2");
                    z2=1;
                ch1=store[y1][x1].charAt(0);
                if(ch1=='0')
                {
                    ctx.fillStyle="#3f3f3b";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }
                else if(ch1=='1')
                {
                    ctx.fillStyle="green";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }
                else if(ch1=='2')
                {
                    ctx.fillStyle="yellow";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }
                else if(ch1=='3')
                {
                    ctx.fillStyle="red";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }
                else if(ch1=='4')
                {
                    ctx.fillStyle="blue";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }
                else if(ch1=='5')
                {
                    ctx.fillStyle="pink";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }
                else if(ch1=='6')
                {
                    ctx.fillStyle="cyan";
                    ctx.fillRect(x1*60,y1*60,6,6);
                }

                ch1=store[y2][x2].charAt(0);
                if(ch1=='0')
                {
                    ctx.fillStyle="#3f3f3b";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                else if(ch1=='1')
                {
                    ctx.fillStyle="green";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                else if(ch1=='2')
                {
                    ctx.fillStyle="yellow";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                else if(ch1=='3')
                {
                    ctx.fillStyle="red";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                else if(ch1=='4')
                {
                    ctx.fillStyle="blue";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                else if(ch1=='5')
                {
                    ctx.fillStyle="pink";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                else if(ch1=='6')
                {
                    ctx.fillStyle="cyan";
                    ctx.fillRect(x2*60,y2*60,6,6);
                }
                    // ctx.fillStyle="#E05042";
                    // ctx.fillRect(x1*60,y1*60,6,6);
                    // ctx.fillStyle="#E2D0AA";
                    // ctx.fillRect(x2*60,y2*60,6,6);
                }
             
             }

    
    
                 }
    }

    underlineplayer(sc1,sc2);
}


