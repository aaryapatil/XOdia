#include<iostream>
using namespace std;
int main()
{	int i,j,k;
	char s[3600];
	cin>>s;
	char array[20][20][9];
	for(i=0;i<20;i++)
		for(j=0;j<20;j++)
			for(k=0;k<9;k++)
				array[i][j][k]=s[i*9*20+j*9+k];
	
	for(i=0;i<20;i++)
		for(j=0;j<20;j++)
			for(k=0;k<9;k++)
				cout<<array[i][j][k];

	
	
/*
Scan whether 
1. Grid is empty
2. There is a move played by opponent
in order to play the first move
Note: Your code is always given the grid values according to player1.
	Your code should output just one move and then exit.
*/

//For Instance:-

for(i=0;i<20;i++)
{
	for(j=0;j<20;j++)
	{

		int flag=0;
		if(array[i][j][0]!='0' and array[i][j][0]!='2' and array[i][j][0]!='4')
			{
			//play first move
			cout<<i1+","+<<j1+","+i2+","+j2;
				}
					}
						}

			
//Your code logic starts here

//for Subsequent  moves
	cout<<i1+","+j1+","+i2+","+j2+","+i3+","+j3;
	//where (i1,j1) (i2,j2) (i3,j3) are coordinates of the seed and leaves

}
