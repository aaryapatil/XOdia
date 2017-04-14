//============================================================================
// Name        : bot.cpp
// Author      : 
// Version     :
// Copyright   : Your copyright notice
// Description : Hello World in C++, Ansi-style
//============================================================================

#include <iostream>
using namespace std;
int main()
{
	char a[20][20][9];
	int i,j,k,moves=0;
	int countup=0,countdown=0;
	for(i=0;i<20;i++)
		for(j=0;j<20;j++)
			for(k=0;k<9;k++)
				cin>>a[i][j][k];
	for(i=0;i<20;i++)
		for(j=0;j<20;j++)
			if(a[i][j][0]=='1'||a[i][j][0]=='3'||a[i][j][0]=='5')
				moves++;
	moves/=2;
	if(moves==0)
	{
		cout<<"11,0,11,1";     //first move
		return 0;
	}
	//kill starts
	int x,y,count=0;
	for(i=0;i<20;i++)
		for(j=0;j<20;j++)
			if(a[i][j][0]=='1')
			{
				if(a[i][j+1][0]=='2')
				{
					x=i;
					y=j+1;
					count++;
				}
				if(a[i+1][j+1][0]=='2')
				{
					if (count==1)
					{
						cout<<i<<","<<j<<","<<i+1<<","<<j+1<<","<<x<<","<<y;
						return 0;
					}
					else
					{
						x=i+1;
						y=j+1;
						count++;
					}
				}
				if(a[i+1][j][0]=='2')
				{
					if (count==1)
					{
						cout<<i<<","<<j<<","<<i+1<<","<<j<<","<<x<<","<<y;
						return 0;
					}
					else
					{
						x=i+1;
						y=j;
						count++;
					}
				}
				if(a[i+1][j-1][0]=='2')
				{
					if (count==1)
					{
						cout<<i<<","<<j<<","<<i+1<<","<<j-1<<","<<x<<","<<y;
						return 0;
					}
					else
					{
						x=i+1;
						y=j-1;
						count++;
					}
				}
				if(a[i][j-1][0]=='2')
				{
					if (count==1)
					{
						cout<<i<<","<<j<<","<<i<<","<<j-1<<","<<x<<","<<y;
						return 0;
					}
					else
					{
						x=i;
						y=j-1;
						count++;
					}
				}
				if(a[i-1][j-1][0]=='2')
				{
					if (count==1)
					{
						cout<<i<<","<<j<<","<<i-1<<","<<j-1<<","<<x<<","<<y;
						return 0;
					}
					else
					{
						x=i-1;
						y=j-1;
						count++;
					}
				}
				if(a[i-1][j][0]=='2')
				{
					if (count==1)
						{
							cout<<i<<","<<j<<","<<i-1<<","<<j<<","<<x<<","<<y;
							return 0;
						}
					else
					{
						x=i-1;
						y=j;
						count++;
					}
				}
				if(a[i-1][j+1][0]=='2')
				{
					if (count==1)
						{
							cout<<i<<","<<j<<","<<i-1<<","<<j+1<<","<<x<<","<<y;
							return 0;
						}
					else
					{
						x=i-1;
						y=j+1;
						count++;
					}
				}
				if(count==1&& a[i+1][j+1][0]!='2'&&a[i+1][j+1][0]!='3')
				{
					cout<<i<<","<<j<<","<<i+1<<","<<j+1<<","<<x<<","<<y;
					return 0;
				}
				if(count==1&& a[i+1][j+1][0]=='2'&&a[i-1][j+1][0]!='3')
				{
					cout<<i<<","<<j<<","<<i-1<<","<<j+1<<","<<x<<","<<y;
					return 0;
				}
			}
		//kill ends
	if(moves>0&&moves<9)
		for(j=1;j<9;j++)
			if(a[11][j][0]=='1')
			{
				if(j%2!=0)
					cout<<"11,"<<j<<",11,"<<j+1<<",12,"<<j;   //downward move
				else
					cout<<"11,"<<j<<",11,"<<j+1<<",10,"<<j;   //upward move
				return 0;
			}
	if(moves==9)
	{
		cout<<"11,9,10,9,12,9";
		return 0;
	}
	if(moves==10)
	{
		for(i=0;i<10;i++)
			for(j=10;j<20;j++)
				if(a[i][j][0]=='2'||a[i][j][0]=='4')
					countup++;
		for(i=10;i<20;i++)
			for(j=10;j<20;j++)
				if(a[i][j][0]=='2'||a[i][j][0]=='4')
					countdown++;
		if(countup<=countdown)
			cout<<"12,9,12,10,13,9";
		else
			cout<<"10,9,9,9,10,10";
		return 0;
	}
	if(moves>10&&moves<16)
	{
				//downward moves
		if(a[13][9][0]=='1')
		{
			for(i=14;i<18;i++)
				if(a[i][9][0]=='1')
				{
					if(i%2!=0)
						cout<<i<<",9,"<<i+1<<",9,"<<i<<",8";    //left move
					else
						cout<<i<<",9,"<<i+1<<",9,"<<i<<",10";     //right move
					return 0;
				}
		}
		else{
			for(i=8;i>4;i--)	//upward moves
				if(a[i][9][0]=='1')
				{
					if(i%2!=0)
						cout<<i<<",9,"<<i-1<<",9,"<<i<<",8";    //left move
					else
						cout<<i<<",9,"<<i-1<<",9,"<<i<<",10";     //right move
					return 0;
				}
		}
	}
	if(moves>=16&&moves<21)
		{
			for(i=12;i<18;i++)
				if(a[i][9][0]=='1')
				{
					if(i%2==0)
					{
						cout<<i<<",9,"<<i+1<<",9,"<<i<<",10";    //right move
						return 0;
					}
					else
					{
						cout<<i<<",9,"<<i+1<<",9,"<<i<<",8";     //left move
						return 0;
					}
				}
			//upward move
			for(i=10;i>4;i--)
				if(a[i][9][0]=='1')
				{
					if(i%2==0)
						cout<<i<<",9,"<<i-1<<",9,"<<i<<",10";    //right move
					else
						cout<<i<<",9,"<<i-1<<",9,"<<i<<",8";     //left move
					return 0;
				}
		}
	if(moves>20)
	{
		countup=0;countdown=0;
		for(i=0;i<10;i++)
			for(j=10;j<20;j++)
				if(a[i][j][0]=='2'||a[i][j][0]=='4')
					countup++;
		for(i=10;i<20;i++)
			for(j=10;j<20;j++)
				if(a[i][j][0]=='2'||a[i][j][0]=='4')
					countdown++;
		for(j=18;j>10;j--)
			if(countup<=countdown)
				for(i=11;i<19;i++)
					if(a[i][j][0]=='1')
					{
						if(a[i-2][j][0]!='2'&&a[i-2][j+1][0]!='2'&&a[i-2][j+2][0]!='2'&&a[i-1][j+2][0]!='2'&&a[i][j+2][0]!='2'&&a[i+1][j+2][0]!='2'&&a[i+2][j+2][0]!='2'&&a[i+2][j+1][0]!='2'&&a[i+2][j][0]!='2'&&a[i+1][j+1][0]!='3'&&a[i-1][j+1][0]!='3')
						{
							cout<<i<<","<<j<<","<<i-1<<","<<j+1<<","<<i+1<<","<<j+1;
							return 0;
						}
						if(a[i-2][j][0]!='2'&&a[i-2][j+1][0]!='2'&&a[i-2][j+2][0]!='2'&&a[i-1][j+2][0]!='2'&&a[i][j+2][0]!='2'&&a[i+1][j+2][0]!='2'&&a[i-1][j+1][0]!='3'&&a[i][j+1][0]!='3')
						{
							cout<<i<<","<<j<<","<<i-1<<","<<j+1<<","<<i<<","<<j+1;
							return 0;
						}
						if(a[i-1][j+2][0]!='2'&&a[i][j+2][0]!='2'&&a[i+1][j+2][0]!='2'&&a[i+2][j+2][0]!='2'&&a[i+2][j+1][0]!='2'&&a[i+2][j][0]!='2'&&a[i][j+1][0]!='3'&&a[i+1][j+1][0]!='3')
						{
							cout<<i<<","<<j<<","<<i+1<<","<<j+1<<","<<i<<","<<j+1;
							return 0;
						}
					}
			else
				for(i=0;i<=10;i++)
					if(a[i][j][0]=='1')
					{
						if(a[i-2][j][0]!='2'&&a[i-2][j+1][0]!='2'&&a[i-2][j+2][0]!='2'&&a[i-1][j+2][0]!='2'&&a[i][j+2][0]!='2'&&a[i+1][j+2][0]!='2'&&a[i+2][j+2][0]!='2'&&a[i+2][j+1][0]!='2'&&a[i+2][j][0]!='2'&&a[i+1][j+1][0]!='3'&&a[i-1][j+1][0]!='3')
						{
							cout<<i<<","<<j<<","<<i-1<<","<<j+1<<","<<i+1<<","<<j+1;
							return 0;
						}
						if(a[i-1][j+2][0]!='2'&&a[i][j+2][0]!='2'&&a[i+1][j+2][0]!='2'&&a[i+2][j+2][0]!='2'&&a[i+2][j+1][0]!='2'&&a[i+2][j][0]!='2'&&a[i][j+1][0]!='3'&&a[i+1][j+1][0]!='3')
						{
							cout<<i<<","<<j<<","<<i+1<<","<<j+1<<","<<i<<","<<j+1;
							return 0;
						}
						if(a[i-2][j][0]!='2'&&a[i-2][j+1][0]!='2'&&a[i-2][j+2][0]!='2'&&a[i-1][j+2][0]!='2'&&a[i][j+2][0]!='2'&&a[i+1][j+2][0]!='2'&&a[i-1][j+1][0]!='3'&&a[i][j+1][0]!='3')
						{
							cout<<i<<","<<j<<","<<i-1<<","<<j+1<<","<<i<<","<<j+1;
							return 0;
						}
					}
		for(i=0;i<20;i++)
			for(j=0;j<20;j++)
				if(a[i][j][0]=='1')
				{
					if(a[i][j+1][0]=='0')
					{
						x=i;
						y=j+1;
						count++;
					}
					if(a[i+1][j+1][0]=='0')
					{
						if (count==1)
						{
							cout<<i<<","<<j<<","<<i+1<<","<<j+1<<","<<x<<","<<y;
							return 0;
						}
						else
						{
							x=i+1;
							y=j+1;
							count++;
						}
					}
					if(a[i+1][j][0]=='0')
					{
						if (count==1)
						{
							cout<<i<<","<<j<<","<<i+1<<","<<j<<","<<x<<","<<y;
							return 0;
						}
						else
						{
							x=i+1;
							y=j;
							count++;
						}
					}
					if(a[i+1][j-1][0]=='0')
					{
						if (count==1)
						{
							cout<<i<<","<<j<<","<<i+1<<","<<j-1<<","<<x<<","<<y;
							return 0;
						}
						else
						{
							x=i+1;
							y=j-1;
							count++;
						}
					}
					if(a[i][j-1][0]=='0')
					{
						if (count==1)
						{
							cout<<i<<","<<j<<","<<i<<","<<j-1<<","<<x<<","<<y;
							return 0;
						}
						else
						{
							x=i;
							y=j-1;
							count++;
						}
					}
					if(a[i-1][j-1][0]=='0')
					{
						if (count==1)
						{
							cout<<i<<","<<j<<","<<i-1<<","<<j-1<<","<<x<<","<<y;
							return 0;
						}
						else
						{
							x=i-1;
							y=j-1;
							count++;
						}
					}
					if(a[i-1][j][0]=='0')
					{
						if (count==1)
							{
								cout<<i<<","<<j<<","<<i-1<<","<<j<<","<<x<<","<<y;
								return 0;
							}
						else
						{
							x=i-1;
							y=j;
							count++;
						}
					}
					if(a[i-1][j+1][0]=='0')
					{
						if (count==1)
							{
								cout<<i<<","<<j<<","<<i-1<<","<<j+1<<","<<x<<","<<y;
								return 0;
							}
						else
						{
							x=i-1;
							y=j+1;
							count++;
						}
					}
					if(count==1&& a[i+1][j+1][0]!='0'&&a[i+1][j+1][0]!='3')
					{
						cout<<i<<","<<j<<","<<i+1<<","<<j+1<<","<<x<<","<<y;
						return 0;
					}
					if(count==1&& a[i+1][j+1][0]=='0'&&a[i-1][j+1][0]!='3')
					{
						cout<<i<<","<<j<<","<<i-1<<","<<j+1<<","<<x<<","<<y;
						return 0;
					}
				}
		//write random
	}
}
