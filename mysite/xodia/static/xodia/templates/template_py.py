import textwrap
string=str(raw_input())
a=textwrap.wrap(string,9)
arr=[['000000000'for i in range(20)]for j in range(20)]
for i in range(20):
	for j in range(20):
		arr[i][j]=a[i*20+j]



'''
Scan whether 
1. Grid is empty
2. There is a move played by opponent
in order to play the first move
Note: Your code is always given the grid values according to player1.
	Your code should output just one move and then exit.
'''

#For Instance:-

for i in range(20):
	for j in range(20):
		flag=0
		if(arr[i][j][0]!='0' and arr[i][j][0]!='2' and arr[i][j][0]!='4'):
			#play first move
			print i1+","+j1+","+i2+","+j2
			

#Your code logic starts here

#for Subsequent  moves
print i1+","+j1+","+i2+","+j2+","+i3+","+j3
#where (i1,j1) (i2,j2) (i3,j3) are coordinates of the seed and leaves

