import java.io.*;
class botv2
{
	public static void main(String args[])throws IOException
	{
		int x[]=new int[400];
		int y[]=new int[400];
		String str="";
		int count1=0,count2=0;
		int x1,y1,x2,fx2=0,fy2=0,fx3=0,fy3=0;
		BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
		char st[][][]=new char[20][20][9];
		String s=br.readLine();
		int i,j,k,i1=0,i2=0,i3=0,j1=0,j2=0,j3=0;
		for(i=0;i<20;i++)
		{
			for(j=0;j<20;j++)
			{
				for(k=0;k<9;k++)
				{
					st[i][j][k]=s.charAt(i*9*20+j*9+k);
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
			x1=(int)(Math.random()*19);
			if(x1==0)
			{
				fx2=1;
				fy2=1;
			}
			else
			{
				x2=(int)(Math.random()*5);
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
			System.out.print(x1+",0,"+fy2+","+fx2);
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
			int pos=(int)(Math.random()*(c-1));
			x1=x[pos];
			y1=y[pos];
			int to=0;
			do
			{
				to=(int)(Math.random()*8);
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
				else if(to==3 && y[c]!=19)
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
				to=(int)(Math.random()*8);
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
				else if(to==4 && y[pos]!=19 && x[pos]!=0)
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
			System.out.print(y1+","+x1+","+fy2+","+fx2+","+fy3+","+fx3);
		}
	}
}