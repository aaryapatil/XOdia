#include <stdio.h>
//#include <ctime>
#include <stdlib.h> 
int main()
{
		int x[400];
		int y[400];
		int count1=0,count2=0;
		int x1,y1,x2,fx2=0,fy2=0,fx3=0,fy3=0,pos=0;
		char st[20][20][9];
		char s[3600];
		scanf("%s",s);
		int i,j,k,i1=0,i2=0,i3=0,j1=0,j2=0,j3=0;
		for(i=0;i<20;i++)
		{
			for(j=0;j<20;j++)
			{
				for(k=0;k<9;k++)
				{
					st[i][j][k]=s[i*9*20+j*9+k];
				}
			}
		}
		for(i=0;i<20;i++)
		{
			if(st[i][0][0]!='0')
			{
				count1++;
			}
		}
		if(count1==0)
		{
			srand(time(0)); 
	
			x1=rand()%20;
			if(x1==0)
			{
				fx2=1;
				fy2=1;
			}
			else
			{
				srand( time(0)); 
	
				x2=rand()%20;
				if(x2==1)
				{
					fx2=0;
					fy2=x1-1;
				}
				else if(x2==2)
				{
					fx2=1;
					fy2=x1-1;
				}
				else if(x2==3)
				{
					fx2=1;
					fy2=x1;
				}
				else if(x2==4)
				{
					fx2=1;
					fy2=x1+1;
				}
				else
				{
					fx2=0;
					fy2=x1+1;
				}
			}
			printf("%d,%d,%d,%d",x1,y1,fy2,fx2);
		}
		else
		{
			int c=0;
			for(i=0;i<20;i++)
			{
				for(j=0;j<20;j++)
				{
					if(st[j][i][0]=='1')
					{
						x[c]=i;
						y[c]=j;
						c++;
					}
				}
			}
			srand( time(0)); 
	
			pos=rand()%20;
			x1=x[pos];
			y1=y[pos];
			int to=0;
			do
			{
				srand( time(0)); 
	
				to=rand()%20;
				if((to==1 || to==0) && y[pos]!=0)
				{
					fx2=x[pos];
					fy2=y[pos]-1;
				}
				else if(to==2 && x[pos]!=19 && y[pos]!=0)
				{
					fx2=x[pos]+1;
					fy2=y[pos]-1;
				}
				else if(to==3 && y[pos]!=19)
				{
					fx2=x[pos]+1;
					fy2=y[pos];
				}
				else if(to==4 && y[pos]!=19 && x[pos]!=0)
				{
					fx2=x[pos]+1;
					fy2=y[pos]+1;
				}
				else if(to==5 && y[pos]!=19)
					{
					fx2=x[pos];
					fy2=y[pos]+1;
				}
				else if(to==6 && y[pos]!=19 && x[pos]!=0)
				{
					fx2=x[pos]-1;
					fy2=y[pos]+1;
				}
				else if(to==7 && x[pos]!=0)
				{
					fx2=x[pos]-1;
					fy2=y[pos];
				}
				else if(to==8 && x[pos]!=0 && y[pos]!=0)
				{
					fx2=x[pos]-1;
					fy2=y[pos]-1;
				}
				else
				{
					to=0;
				}
			}while(to==0 || st[y1][x1][to]=='1');
			int temp=to;
			do
			{
				srand( time(0)); 
	
				to=rand()%20;
				if((to==1 || to==0) && y[pos]!=0)
				{
					fx3=x[pos];
					fy3=y[pos]-1;
				}
				else if(to==2 && x[pos]!=19 && y[pos]!=0)
				{
					fx3=x[pos]+1;
					fy3=y[pos]-1;
				}
				else if(to==3 && y[pos]!=19)
				{
					fx3=x[pos]+1;
					fy3=y[pos];
				}
				else if(to==4 && y[pos]!=19 && x[pos]!=19)
				{
					fx3=x[pos]+1;
					fy3=y[pos]+1;
				}
				else if(to==5 && y[pos]!=19)
				{
					fx3=x[pos];
					fy3=y[pos]+1;
				}
				else if(to==6 && y[pos]!=19 && x[pos]!=0)
				{
					fx3=x[pos]-1;
					fy3=y[pos]+1;
				}
				else if(to==7 && x[pos]!=0)
				{
					fx3=x[pos]-1;
					fy3=y[pos];
				}
				else if(to==8 && x[pos]!=0 && y[pos]!=0)
				{
					fx3=x[pos]-1;
					fy3=y[pos]-1;
				}
				else
				{
					to=0;
				}
			}while(to==0 || st[y1][x1][to]=='1' || to==temp);
			printf("%d,%d,%d,%d,%d,%d",y1,x1,fy2,fx2,fy3,fx3);
		}
		return 0;
}