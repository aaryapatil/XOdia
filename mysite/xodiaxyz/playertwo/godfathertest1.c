#include<stdio.h>
int main()
{ int i,j,k;
  char s[3600];
 scanf("%s",s);
  char array[20][20][9];
  for(i=0;i<20;i++)
 {
   for(j=0;j<20;j++)
   {
     for(k=0;k<9;k++)
      {
       array[i][j][k]=s[i*9*20+j*9+k];
     }
   }
 }
       
  //your code to grow

    for(i=0;i<20;i++){
        if(array[i][0][0]!="0"){
            break;
        }
    }
    if(i==20)
        printf("4,0,4,1");
    else
        printf("4,1,4,2,5,1");
 //for first move
  //printf("%d,%d,%d,%d",i1,j1,i2,j2);
  //where (i1,j1)(i2,j2) are coordinates of the seed and leaf

 //for the rest of the moves
 //printf("%d,%d,%d,%d,%d,%d",i1,j1,i2,j2,i3,j3);
  //where (i1,j1) (i2,j2) (i3,j3) are coordinates of the seed and leaves
  return 0;
}
