import java.io.*;
class bot
{
	public static void main(String args[])throws IOException
	{
		BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
		String st[][]=new String[20][20];
		int x[]=new int[400];
		int y[]=new int[400];
		String str="";
		int count1=0,count2=0;
		int x1,y1,x2,fx2=0,fy2=0,fx3=0,fy3=0;
		for(int i=0;i<20;i++)
		{
			for(int j=0;j<20;j++)
			{
				st[i][j]=br.readLine();
			}
		}
		for(int i=0;i<9;i++)
		{
			str=str+"0";
		}
		for(int i=0;i<20;i++)
		{
			if(st[0][i].charAt(0)=='3')
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
				if(x2==2)
				{
					fx2=1;
					fy2=x1-1;
				}
				if(x2==3)
				{
					fx2=1;
					fy2=x1;
				}
				if(x2==4)
				{
					fx2=1;
					fy2=x1+1;
				}
				if(x2==5)
				{
					fx2=0;
					fy2=x1+1;
				}
			}
			System.out.println(x1+",0,"+fx2+","+fy2);
		}
		else
		{
			int c=0;
			for(int i=0;i<20;i++)
			{
				for(int j=0;j<20;j++)
				{
					if(st[i][j].charAt(0)=='1')
					{
						x[c]=i;
						y[c]=j;
						c++;
					}
				}
			}
			int pos=(int)(Math.random()*(c-1));
			x1=x[c];
			y1=y[c];
			int to=0;
			do
			{
				to=(int)(Math.random()*8);
				if(to==1)
				{
					fx2=x[c];
					fy2=y[c]-1;
				}
				if(to==2)
				{
					fx2=x[c]+1;
					fy2=y[c]-1;
				}
				if(to==3)
				{
					fx2=x[c]+1;
					fy2=y[c];
				}
				if(to==4)
				{
					fx2=x[c]+1;
					fy2=y[c]+1;
				}
				if(to==5)
					{
					fx2=x[c];
					fy2=y[c]+1;
				}
				if(to==6)
				{
					fx2=x[c]-1;
					fy2=y[c]+1;
				}
				if(to==7)
				{
					fx2=x[c]-1;
					fy2=y[c];
				}
				if(to==8)
				{
					fx2=x[c]-1;
					fy2=y[c]-1;
				}
			}while(to==0 || st[x1][y1].charAt(to)=='1');
			int temp=to;
			do
			{
				to=(int)(Math.random()*8);
				if(to==1)
				{
					fx3=x[c];
					fy3=y[c]-1;
				}
				if(to==2)
				{
					fx3=x[c]+1;
					fy3=y[c]-1;
				}
				if(to==3)
				{
					fx3=x[c]+1;
					fy3=y[c];
				}
				if(to==4)
				{
					fx3=x[c]+1;
					fy3=y[c]+1;
				}
				if(to==5)
				{
					fx3=x[c];
					fy3=y[c]+1;
				}
				if(to==6)
				{
					fx3=x[c]-1;
					fy3=y[c]+1;
				}
				if(to==7)
				{
					fx3=x[c]-1;
					fy3=y[c];
				}
				if(to==8)
				{
					fx3=x[c]-1;
					fy3=y[c]-1;
				}
			}while(to==0 || st[x1][y1].charAt(to)=='1' || to==temp);
			System.out.println(x1+","+y1+","+fx2+","+fy2+","+fx3+","+fy3);
		}
	}
}