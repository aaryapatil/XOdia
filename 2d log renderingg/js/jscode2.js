var pos,flag=0,sc1,sc2,if1=-1,jf1=-1,if2=-1,jf2=-1,e1,e2,turner,valid = 0,r,doctemp=0;
var i1,j1,i2,j2,i3,j3,temp=0;
var arr1 = new Array(10);
var l = new Array(2);
var i;
for(i=0;i<10;i++){
    arr1[i] = new Array(10);
}

function isMoveValid(input,arr1,if1,jf1,if2,jf2,sc1,sc2,e1,e2,turner){
	pos = input.split(",");
	var i;
    var LA = new Array(8);
	if(turner == 0 || turner == 1){
	for(i=0;i<4;i++){
		if(isNaN(pos[i])){
			toast("Illegal format",2000);
			flag = 1;
			break;			
		}
	}
	if(i==4)
		LA = validation(arr1,turner);
		//turner++;
	}

	else{
	for(i=0;i<6;i++){
		if(isNaN(pos[i])){
			toast("Illegal format",2000);
            flag=1;
			break;			
		}
	}
	if(i==6)
		LA = validation(arr1,turner);
		//turner++;
		//document.getElementById('ip').value = " ";
	}
    //return(flag,sc1,e1,e2,if1,jf1,if2,jf2);
    if(flag!=1)
    {
            if1 = LA[2];
            if2 = LA[4];
            jf1 = LA[3];
            jf2 = LA[5];
        	sc1 = LA[6];
        	sc2 = LA[7];
            e1 = LA[8];
            e2 = LA[9];
    }
	// alert(sc1+"  "+sc2);
    // alert(e1+" "+e2);
    return  [flag,arr1,if1,jf1,if2,jf2,sc1,sc2,e1,e2];
	
}
function replac(S,pos,ch){//replaces character at 'pos' position with ch             
        //chA =S;        
        var str="";
        var i;
        for(i=0;i<9;i++)
        {
            if(i!=pos)
            {
                str=str+S[i];
            }
            else
            {
                str=str+ch;
            }
        }
        //S="".join(chA);
        return str;
}
function direction(i1,j1,i2,j2){    //returns direction of one point to another         
        //direction is returned, with up as 1 && clockwise
        //down is 5
        //up left is 8
        //invalid is nine
        if(i2==i1-1 && j2==j1)    //up         
            r=1;          
        else if(i2==i1-1 && j2==j1+1)    //up right         
            r=2;          
        else if(i2==i1 && j2==j1+1)    //left         
            r=3;          
        else if(i2==i1+1 && j2==j1+1)    //down right         
            r=4;          
        else if(i2==i1+1 && j2==j1)    //down      
            r=5;          
        else if(i2==i1+1 && j2==j1-1)    // down left         
            r=6;          
        else if(i2==i1 && j2==j1-1)    //left         
            r=7;          
        else if(i2==i1-1 && j2==j1-1)    //up left         
            r=8;          
        else    //invalid         
            r=9;          
        if(i1<0 || j1<0 || i1>10|| j1>10 || i2<0 || j2<0 || i2>10 || j2>10)    //index out of bounds         
            r=9;      

        return r;
} 
function heat(arr1,if1,jf1,if2,jf2,e1,e2){     
        if((if1>=0 && jf1>=0)){ //also works with if1!=0
            var chf1 = arr1[if1][jf1];
            //console.log(chf1);
            //var chf2 = arr1[if2][jf2];
            if(chf1[0]=='5'){         
                arr1[if1][jf1]=  replac(arr1[if1][jf1],0,'1');
                //arr2[if1][14-int(jf1)]=swap_array(arr1[if1][jf1]);
                e1=e1+1;
			}             
            if(chf1[0]=='6'){            
                arr1[if1][jf1]=  replac(arr1[if1][jf1],0,'2');    
                //arr1[if1][14-int(jf1)]=swap_array(arr1[if1][jf1]); 
                e2=e2+1;
			}          
        
        }
    if((if2>=0 && jf2>=0)){
        var chf2 = arr1[if2][jf2];
        if(chf2[0]=='5'){      
                arr1[if2][jf2]=  replac(arr1[if2][jf2],0,'1');
                //arr2[if2][14-int(jf2)]=swap_array(arr1[if2][jf2]);
                e1=e1+1;
            } 
        if(chf2[0]=='6'){    
                arr1[if2][jf2]=  replac(arr1[if2][jf2],0,'2');
                //arr1[if2][14-int(jf2)]=swap_array(arr1[if2][jf2]); 
                e2=e2+1;           
            }  
    }
return [e1,e2];
}

function validation(arr1,turner){
	i1 = parseInt(pos[0]);
	j1 = parseInt(pos[1]);
	i2 = parseInt(pos[2]);
	j2 = parseInt(pos[3]);
	i3 = parseInt(pos[4]);
	j3 = parseInt(pos[5]);
	//flag,sc1,e1,e2,if1,jf1,if2,jf2
    var T = new Array(8);
	var ret = new Array(3);
	if(turner == 0){
		//turner++;
		//var func = new white_seed();
        ret = white_seed(arr1,i1,j1,i2,j2,sc1,e1);
        flag=ret[0];
        sc1 = ret[1];
        e1 = ret[2];
		if(flag != 0){
            toast("Invalid Move By Player 1.",2000);
            //exit(0);
        }
		// alert(ret[1]+"OK.");
    }
			
	/*flag=0;
        if(j1==0){//checks if seed on ground        
            if(direction(i1,j1,i2,j2)!=9){//checks if adjacent valid address for stump            
                arr1[i1][j1]=  replac(arr1[i1][j1], direction(i1,j1,i2,j2),'1');
                arr1[i1][j1]=  replac(arr1[i1][j1],0,'3');
				//arr2[i1][24-j1]=swap_array(arr1[i1][j1]);
                arr1[i2][j2]=  replac(arr1[i2][j2], direction(i2,j2,i1,j1),'1');
                arr1[i2][j2]=  replac(arr1[i2][j2],0,'1');
				//arr2[i2][24-j2]=swap_array(arr1[i2][j2]);
                sc1 = sc1+1;
                e1 = e1+1;
			}
	    else           
                flag=1;
		}                    
        else       
            flag=1;
		 //document.getElementById("demo").innerHTML = turner;
	}*/
	else if(turner == 1){
		//turner++;
		ret = blackseed(arr1,i1,j1,i2,j2,sc2,e1);
        flag=ret[0];
        sc2 = ret[1];
		e2 = ret[2];
		if(flag != 0){
            toast("Invalid Move By Player 2.",2000);
            //exit(0);
        }
        // alert
		// document.getElementById("demo").innerHTML = turner;
	}	
	else if(turner%2 == 0){
        T = white_move(arr1,i1, j1, i2, j2, i3, j3,if1,if2,jf1,jf2,sc1,e1,e2);
        flag = T[0];
    if1 = T[4];
    jf1 = T[5];
    if2 = T[6];
    jf2 = T[7];
    sc1 = T[1];
    e1 = T[2];
    e2=T[3];
        if(flag != 0){
            toast("Invalid Move By Player 1.",2000);
            //exit(0);
        }
        /*else{
            /*if(temp == 0){
                turner++;
                //heat(if1,if2,jf1,jf2,e1,e2);
                if1=-1;
                if2=-1;
                jf1=-1;
                jf2=-1;
            }
        }*/

	}
	else{
		
        T = black_move(arr1,i1, j1, i2, j2, i3, j3,if1,if2,jf1,jf2,sc2,e1,e2);
        flag = T[0];
    if1 = T[4];
    jf1 = T[5];
    if2 = T[6];
    jf2 = T[7];
    sc2 = T[1];
    e1 = T[2];
    e2=T[3];
        if(flag != 0){
            toast("Invalid Move By Player 2.",2000);
            //exit(0);
            //return [arr1,T,sc1,sc2,P];
        }
        /*else{
            if(temp == 0){
                //turner++;
                //heat(if1,if2,jf1,jf2,e1,e2);
                if1=-1;
                if2=-1;
                jf1=-1;
                jf2=-1;
            }
        }*/
	}
    if(turner != 0 && sc1!=0 && sc2!=0){
        if(e1==0 || e2 == 0){
            if(sc1>sc2){
                swal({
                      title: "Growth Over, Radiant Victory",
                      text: "Do you want to reGrow?",
                      type: "success",
                      showCancelButton: true,
                      confirmButtonClass: "btn-danger",
                      confirmButtonText: "Yes, I want to reGrow!",
                      cancelButtonText: "No, cancel plz!",
                      closeOnConfirm: false,
                      closeOnCancel: false
                    },
                    function(isConfirm) {
                      if (isConfirm) {
                        location.reload();
                      }
                      else{
                        swal("reGrowth cancelled","","success");
                      }
                    });                
            }
   

            else if(sc2>sc1){
                swal({
                      title: "Growth Over, Dire Victory",
                      text: "Do you want to reGrow?",
                      type: "success",
                      showCancelButton: true,
                      confirmButtonClass: "btn-danger",
                      confirmButtonText: "Yes, I want to reGrow!",
                      cancelButtonText: "No, cancel plz!",
                      closeOnConfirm: false,
                      closeOnCancel: false
                    },
                    function(isConfirm) {
                      if (isConfirm) {
                        location.reload();
                      }
                      else{
                        swal("reGrowth cancelled","","success");
                      }
                    });    

                //swal("Growth Over","Dire Victory.","success");
            }
                
            else{
                // alert("Draw.");
                if(e1>e2){
                    swal({
                      title: "Growth Over, Radiant Victory",
                      text: "Do you want to reGrow?",
                      type: "success",
                      showCancelButton: true,
                      confirmButtonClass: "btn-danger",
                      confirmButtonText: "Yes, I want to reGrow!",
                      cancelButtonText: "No, cancel plz!",
                      closeOnConfirm: false,
                      closeOnCancel: false
                    },
                    function(isConfirm) {
                      if (isConfirm) {
                        location.reload();
                      }
                      else{
                        swal("reGrowth cancelled","","success");
                      }
                    });    
                }
                    
                else if(e1<e2){
                     swal({
                      title: "Growth Over, Dire Victory",
                      text: "Do you want to reGrow?",
                      type: "success",
                      showCancelButton: true,
                      confirmButtonClass: "btn-danger",
                      confirmButtonText: "Yes, I want to reGrow!",
                      cancelButtonText: "No, cancel plz!",
                      closeOnConfirm: false,
                      closeOnCancel: false
                    },
                    function(isConfirm) {
                      if (isConfirm) {
                        location.reload();
                      }
                      else{
                        swal("reGrowth cancelled","","success");
                      }
                    }); 

                }
                    
                else
                    {
                        swal({
                      title: "Growth Over, Its a Draw",
                      text: "Do you want to reGrow?",
                      type: "error",
                      showCancelButton: true,
                      confirmButtonClass: "btn-danger",
                      confirmButtonText: "Yes, I want to reGrow!",
                      cancelButtonText: "No, cancel plz!",
                      closeOnConfirm: false,
                      closeOnCancel: false
                    },
                    function(isConfirm) {
                      if (isConfirm) {
                        location.reload();
                      }
                      else{
                        swal("reGrowth cancelled","","success");
                      }
                    });
                    }
            }
        }
    }
    var ar=[flag,arr1,if1,jf1,if2,jf2,sc1,sc2,e1,e2];
	return ar;
}
function white_seed(arr1,i1,j1,i2,j2,sc1,e1)
{
    flag=0;
        if(j1==0)
        {//checks if seed on ground        
            if(direction(i1,j1,i2,j2)!=9)
            {//checks if adjacent valid address for stump            
                //arr1[i1][j1]=  replac(arr1[i1][j1], direction(i1,j1,i2,j2),'1');
              arr1[i1][j1]=replac(arr1[i1][j1],direction(i1,j1,i2,j2),'1');                
              arr1[i1][j1]=  replac(arr1[i1][j1],0,'3');
                //arr2[i1][24-j1]=swap_array(arr1[i1][j1]);
                arr1[i2][j2]=replac(arr1[i2][j2],direction(i2,j2,i1,j1),'1');
                //arr1[i2][j2]=  replac(arr1[i2][j2], direction(i2,j2,i1,j1),'1');
                arr1[i2][j2]=replac(arr1[i2][j2],0,'1');
                //arr1[i2][j2]=  replac(arr1[i2][j2],0,'1');
                //arr2[i2][24-j2]=swap_array(arr1[i2][j2]);
                sc1 = sc1+1;
                e1 = e1+1;
           }
           else           
                flag=1;
        }                    
        else       
            flag=1;
        return [flag,sc1,e1];
}
function blackseed(arr1,i1,j1,i2,j2,sc2,e1)
{//black seed
    
        //This method executes the "first move" ie. seeding for black
        flag=0;
        if(j1==9){ //checks if seed on ground        
            if(direction(i1,j1,i2,j2)!=9){ //checks if adjacent valid address for stump            
                //arr1[i1][j1]=  replac(arr1[i1][j1], direction(i1,j1,i2,j2),'2');
                arr1[i1][j1]= replac(arr1[i1][j1],direction(i1,j1,i2,j2),'2')
                arr1[i1][j1]=  replac(arr1[i1][j1],0,'4');
                arr1[i2][j2]=  replac(arr1[i2][j2], direction(i2,j2,i1,j1),'2');
                arr1[i2][j2]=  replac(arr1[i2][j2],0,'2');
                sc2 = sc2+1;
                e2 = e2+1;
        //flag = 0;
            }
            else           
                flag=1;
        }                    
        else       
            flag=1;        
        return [flag,sc2,e2];
}
function white_move(arr1,i1, j1, i2, j2, i3, j3,if1,if2,jf1,jf2,sc1,e1,e2,temp){//i1, j1, i2, j2, i3, j3,if1,if2,jf1,jf2,sc1,e1,e2,temp)   //accepts position, tries move, returns flag    
        //This method will accept initial && final positions, && if legal will make changes
        flag=0;
        var dir1=direction(i1,j1,i2,j2);
        var dir2=direction(i1,j1,i3,j3);

        var p=arr1[i1][j1];
        var c1=arr1[i2][j2];
        var c2=arr1[i3][j3];
        var ch1=c1[0]; 
        var ch2=c2[0];
        if((dir1!=9 && dir2!=9) && (dir1 != dir2)){
            if(p[0]=='1'){
                if(p[dir1]=='0' && p[dir2]=='0'){
                    //changes to parent element
                    arr1[i1][j1]= replac(arr1[i1][j1],dir1,'1');
                    arr1[i1][j1]= replac(arr1[i1][j1],dir2,'1');
                    arr1[i1][j1]= replac(arr1[i1][j1],0,'3');
                    
                    dir1=direction(i2,j2,i1,j1);
                    dir2=direction(i3,j3,i1,j1);
                     //changes to child element
                    arr1[i2][j2]= replac(arr1[i2][j2],dir1,'1');
                    arr1[i3][j3]= replac(arr1[i3][j3],dir2,'1');
                }
                else
                    flag=1;
            }
            else 
                flag=1;
        }
        else 
            flag=1; 
        temp =0;
        if(flag==0){ 
            sc1=sc1+2;
	//if(ch1=='2' || ch2=='2'){       
            l = heat(arr1,if1,jf1,if2,jf2,e1,e2);
	    	e1=l[0];
	    	e2=l[1];
            /*if((ch1!='3' && ch1!='4') && (ch2!='3' && ch2!='4')){
            //heat(if1,jf1,if2,jf2,e1,e2);
            // e1=e[0];
            // e2=e[1]; ///release previous frozen leaves   
            if1=i2;
            jf1=j2;
            if2=i3;
            jf2=j3; //store frozen leaves
        }}*/
}
        if((ch1=='0' || ch1=='1') && flag==0){   //empty normal valid move
            //temp = 0;
            if(ch1=='1') 
                e1=e1-1;
            arr1[i2][j2]= replac(arr1[i2][j2],0,'1');
        }
            
        else if((ch1=='3' || ch1=='4') && flag==0){ 
            //temp =0 ;
            e1=e1-1;
            sc1=sc1-1;
        }
        else if((ch1=='5') && flag==0)
        { 
		e1=e1-1;
        }
        if((ch2=='0' || ch2=='1') && flag==0){   //empty normal valid move || reaching your own leaf
            temp = 0;
            e1=e1+1;
            if(ch2=='1')
                e1=e1-1;
            arr1[i3][j3]= replac(arr1[i3][j3],0,'1');
         }
         else if((ch2=='3' || ch2=='4') && flag==0) 
            sc1=sc1-1;
                
        if(ch1=='2' && flag==0){   //for termination
            temp=1;
            e1=e1-2;
            e2=e2-1;
            arr1[i2][j2]= replac(arr1[i2][j2],0,'5');
            if(ch2!='3' && ch2!='4') 
                arr1[i3][j3]= replac(arr1[i3][j3],0,'5');  //freeze new leaves
            else
            e1=e1+1;
            if(ch2=='2') {
            	e1=e1+1
                e2=e2-1;
        }}
        if(ch2=='2' && flag==0){    //for termination           
            temp=1;
            e1=e1-1;
            e2=e2-1;
            arr1[i3][j3]= replac(arr1[i3][j3],0,'5'); //freeze                                           
            if(ch1!='3' && ch1!='4')                 
                arr1[i2][j2]= replac(arr1[i2][j2],0,'5');
            else
            e1=e1+1;
            if(ch1=='2') {
                e1=e1+1;
                e2=e2+1;
            }
        }
        // if(ch1=='2' || ch2=='2'){
        //     heat(arr1,if1,jf1,if2,jf2,e1,e2);            
        //     //e=heat(if1,jf1,if2,jf2,e1,e2);
        //     //e1=e[0];
        //     //e2=e[1];
        //     if1=i2;
        //     jf1=j2;
        //     if2=i3;
        //     jf2=j3; //store frozen leaves
        // }
        if(flag==0){
        if(ch1=='2' || ch2=='2'){       
            /*l = heat(arr1,if1,jf1,if2,jf2,e1,e2);
	    	e1=l[0];
	    	e2=l[1];*/
            if((ch1!='3' && ch1!='4') && (ch2!='3' && ch2!='4')){
            //heat(if1,jf1,if2,jf2,e1,e2);
            // e1=e[0];
            // e2=e[1]; ///release previous frozen leaves   
            if1=i2;
            jf1=j2;
            if2=i3;
            jf2=j3; //store frozen leaves
        }
        else if(ch1!='3' && ch1!='4')
        {
            if1=i2;
            jf1=j2;
            if2=-1;
            jf2=-1;

        }
        else{
            if1=-1;
            jf1=-1;
            if2=i3;
            jf2=j3;

        }
        }
        }
        if(i2==0){ 
            arr1[i2][j2] =  replac(arr1[i2][j2],8,'1');
            arr1[i2][j2] =  replac(arr1[i2][j2],1,'1');
            arr1[i2][j2] =  replac(arr1[i2][j2],2,'1');
        }
       if(j2==0) {
            arr1[i2][j2] =  replac(arr1[i2][j2],8,'1');
            arr1[i2][j2] =  replac(arr1[i2][j2],7,'1');
            arr1[i2][j2] =  replac(arr1[i2][j2],6,'1');
        }
        if(j2==9){ 
            arr1[i2][j2] =  replac(arr1[i2][j2],2,'1');
            arr1[i2][j2] =  replac(arr1[i2][j2],3,'1');
            arr1[i2][j2] =  replac(arr1[i2][j2],4,'1');
        }
        if(i2==9){
            arr1[i2][j2] =  replac(arr1[i2][j2],5,'1');
            arr1[i2][j2] =  replac(arr1[i2][j2],6,'1');
            arr1[i2][j2] =  replac(arr1[i2][j2],4,'1');
        }
        if(i3==0) {
            arr1[i3][j3] =  replac(arr1[i3][j3],8,'1');
            arr1[i3][j3] =  replac(arr1[i3][j3],1,'1');
            arr1[i3][j3] =  replac(arr1[i3][j3],2,'1');
            }
        if(j3==0) {
            arr1[i3][j3] =  replac(arr1[i3][j3],8,'1');
            arr1[i3][j3] =  replac(arr1[i3][j2],7,'1');
            arr1[i3][j3] =  replac(arr1[i3][j3],6,'1');
        }
        if(j3==9)  {
            arr1[i3][j2] =  replac(arr1[i3][j3],2,'1');
            arr1[i3][j3] =  replac(arr1[i3][j3],3,'1');
            arr1[i3][j3] =  replac(arr1[i3][j3],4,'1');
        }
        if(i3==9) {
            arr1[i3][j3] =  replac(arr1[i3][j3],5,'1');
            arr1[i3][j3] =  replac(arr1[i3][j3],6,'1');
            arr1[i3][j3] =  replac(arr1[i3][j3],4,'1');
        }
        /**arr2[i1][9-int(j1)]=swap_array(arr1[i1][j1]);
        arr2[i2][9-int(j2)]=swap_array(arr1[i2][j2]);
        arr2[i3][9-int(j3)]=swap_array(arr1[i3][j3]);*/
        var j=0;
        for(i=0;i<9;i++){
            if(arr1[i2][j2].charAt[i]=='0')
                j++;
        }
        if(j==1){
            e2 = e2-1;
            arr1[i2][j2]=replac(arr1[i2][j2],0,'3');
        }

        //if(for "0" not in range arr1[i3][j3])  
            //e2 = e2-1
        var w=0;
        for(i=0;i<9;i++){
            if(arr1[i3][j3].charAt[i]=='0')
                w++;
        }
        if(w==1){
            e2 = e2-1;
            arr1[i3][j3]=replac(arr1[i3][j3],0,'3');
        }
        
        if(flag==0){
            if(temp == 0){
                //turner++;
                l=heat(arr1,if1,jf1,if2,jf2,e1,e2);
                e1=l[0];
                e2=l[1];
                if1=-1;
                if2=-1;
                jf1=-1;
                jf2=-1;
            }
        }
        return [flag,sc1,e1,e2,if1,jf1,if2,jf2];
}
 function black_move(arr1,i1, j1, i2, j2, i3, j3,if1,if2,jf1,jf2,sc2,e1,e2,temp){   //see white comments    
        //This method will accept initial && final positions, && if legal will make changes
        flag=0;
        dir1=direction(i1,j1,i2,j2);
        dir2=direction(i1,j1,i3,j3);
        p=arr1[i1][j1];
        c1=arr1[i2][j2];
        c2=arr1[i3][j3];
        ch1=c1[0];
        ch2=c2[0];
        if(p[0]=='2'){ 
            if((dir1<9 && dir2<9) && (dir1 != dir2)){
                if(p[dir1]=='0' && p[dir2]=='0'){
                    //changes to parent element
                    arr1[i1][j1]= replac(arr1[i1][j1],dir1,'1');
                    arr1[i1][j1]= replac(arr1[i1][j1],dir2,'1');
                    arr1[i1][j1]= replac(arr1[i1][j1],0,'4');

                    dir1=direction(i2,j2,i1,j1);
                    dir2=direction(i3,j3,i1,j1);
                    //changes to child elements
                    arr1[i2][j2]= replac(arr1[i2][j2],dir1,'1');
                    //arr1[i2][j2]= replac(arr1[i2][j2],0,'2');
                    arr1[i3][j3]= replac(arr1[i3][j3],dir2,'1');
                    //arr1[i3][j3]= replac(arr1[i3][j3],0,'2');                
                }
                else  
                    flag=1;
            }
            else  
                flag=1;
        }

        else  
            flag=1;
        temp = 0;
        if(flag==0)  
            sc2=sc2+2;
        if((ch1=='0' || ch1=='2') && flag==0){   //empty n||mal valid move
            if(ch1=='2')  
                e2=e2-1;
            arr1[i2][j2]= replac(arr1[i2][j2],0,'2');
            }
        else if((ch1=='3' || ch1=='4') && flag==0){  
            e2=e2-1;
            sc2=sc2-1;
        }
        else if((ch1=='6') && flag==0)
        { e2=e2-1;
        }
        if((ch2=='0' || ch2=='2') && flag==0){   //empty n||mal valid move || reaching your own leaf
            e2=e2+1;
            if(ch2=='2') 
                e2=e2-1;
            arr1[i3][j3]= replac(arr1[i3][j3],0,'2');
        }
        else if((ch2=='3' || ch2=='4') && flag==0)  
            sc2=sc2-1;

        if(ch1=='1' && flag==0){   //for termination
            temp=1;
            e2=e2-2;
            e1=e1-1;
            arr1[i2][j2]= replac(arr1[i2][j2],0,'6');
        
            if(ch2!='3' && ch2!='4')  
                arr1[i3][j3]= replac(arr1[i3][j3],0,'6'); //freeze new leaves
            else
            e2=e2+1;
            if(ch2=='1') { 
                e2=e2+1;
                e1=e1-1;
        }}
        if(ch2=='1' && flag==0){    //for termination           
            temp=1;
            e2=e2-1;
            e1=e1-1;
            arr1[i3][j3]= replac(arr1[i3][j3],0,'6'); //freeze                                           
            if(ch1!='3' && ch1!='4')                  
                arr1[i2][j2]= replac(arr1[i2][j2],0,'6');
            else
            e2=e2+1;    
            if(ch1=='1'){
                e2=e2+1;

                e1=e1+1;
            }
        }
        if(flag==0){
        if(ch1=='1' || ch2=='1'){       
            l=heat(arr1,if1,jf1,if2,jf2,e1,e2);
            if((ch1!='3' && ch1!='4') && (ch2!='3' && ch2!='4')){
            /*heat(if1,jf1,if2,jf2,e1,e2);*/
            e1=l[0];
            e2=l[1]; //release previous frozen leaves   
            if1=i2;
            jf1=j2;
            if2=i3;
            jf2=j3; //store frozen leaves
        }
        else if(ch1!='3' && ch1!='4')
        {
            if1=i2;
            jf1=j2;
            if2=-1;
            jf2=-1;

        }
        else{
            if1=-1;
            jf1=-1;
            if2=i3;
            jf2=j3;

        }
        }
        }
        if(i2==0){  
            arr1[i2][j2] =  replac(arr1[i2][j2],8,'1');
            arr1[i2][j2] =  replac(arr1[i2][j2],1,'1');
            arr1[i2][j2] =  replac(arr1[i2][j2],2,'1');
        }
        if(j2==0){  
            arr1[i2][j2] =  replac(arr1[i2][j2],8,'1');
            arr1[i2][j2] =  replac(arr1[i2][j2],7,'1');
            arr1[i2][j2] =  replac(arr1[i2][j2],6,'1');
        }
        if(j2==9)  {
            arr1[i2][j2] =  replac(arr1[i2][j2],2,'1');
            arr1[i2][j2] =  replac(arr1[i2][j2],3,'1');
            arr1[i2][j2] =  replac(arr1[i2][j2],4,'1');
        }
        if(i2==9){  
            arr1[i2][j2] =  replac(arr1[i2][j2],5,'1');
            arr1[i2][j2] =  replac(arr1[i2][j2],6,'1');
            arr1[i2][j2] =  replac(arr1[i2][j2],4,'1');
        } 
        if(i3==0){  
            arr1[i3][j3] =  replac(arr1[i3][j3],8,'1');
            arr1[i3][j3] =  replac(arr1[i3][j3],1,'1');
            arr1[i3][j3] =  replac(arr1[i3][j3],2,'1');
        }
        if(j3==0){  
            arr1[i3][j3] =  replac(arr1[i3][j3],8,'1');
            arr1[i3][j3] =  replac(arr1[i3][j2],7,'1');
            arr1[i3][j3] =  replac(arr1[i3][j3],6,'1');
        }
        if(j3==9){  
            arr1[i3][j2] =  replac(arr1[i3][j3],2,'1');
            arr1[i3][j3] =  replac(arr1[i3][j3],3,'1');
            arr1[i3][j3] =  replac(arr1[i3][j3],4,'1');
        }
        if(i3==9){  
            arr1[i3][j3] =  replac(arr1[i3][j3],5,'1');
            arr1[i3][j3] =  replac(arr1[i3][j3],6,'1');
            arr1[i3][j3] =  replac(arr1[i3][j3],4,'1');
        }
        /*arr2[i1][19-int(j1)]=swap_array(arr1[i1][j1]);
        arr2[i2][19-int(j2)]=swap_array(arr1[i2][j2])
        arr2[i3][19-int(j3)]=swap_array(arr1[i3][j3])*/               
        //if(for "0" not in range arr1[i2][j2])  
            //e2 = e2-1
        var j=0;
        for(i=0;i<9;i++){
            if(arr1[i2][j2].charAt[i]=='0')
                j++;
        }
        if(j==1){
            e2 = e2-1;
            arr1[i2][j2]=replac(arr1[i2][j2],0,'4');
        }

        //if(for "0" not in range arr1[i3][j3])  
            //e2 = e2-1
        var w=0;
        for(i=0;i<9;i++){
            if(arr1[i3][j3].charAt[i]=='0')
                w++;
        }
        if(w==1){
            e2 = e2-1;
            arr1[i3][j3]=replac(arr1[i3][j3],0,'4');
        }
        if(flag==0){
            if(temp == 0){
                //turner++;
                l=heat(arr1,if1,jf1,if2,jf2,e1,e2);
                e1=l[0];
                e2=l[1];
                if1=-1;
                if2=-1;
                jf1=-1;
                jf2=-1;
            }
        }
        //return [flag,sc1,e1,e2,if1,jf1,if2,jf2];
        return [flag,sc2,e1,e2,if1,jf1,if2,jf2];                                  
}
