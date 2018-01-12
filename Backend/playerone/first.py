import textwrap
import os
from random import randint
flag=0
string=str(raw_input())
a=textwrap.wrap(string,9)
arr=[['000000000'for i in range(20)]for j in range(20)]
for i in range(20):
	for j in range(20):
		arr[i][j]=a[i*20+j]
for i in range(20):
	for j in range(20):
		flag=0
		if(arr[i][j][0]!='0' and arr[i][j][0]!='2' and arr[i][j][0]!='4'):
			flag=1
			break
	if flag==1:
		break
if flag==0:
	k=randint(3,16)
	print str(k)+','+'0'+','+str(k+randint(-1,1))+','+'1'
else:
	t=randint(1,4)
	if t==1:
		for i in range(20):
			for j in range(20):
				if(arr[i][j][0]=='1'):
						while True:
							p=''
							x=randint(1,8)
							y=randint(1,8)
							if x==y:
								continue
							if arr[i][j][x]=='0':
								if x==1:
									p=p+str(i)+','+str(j)+','+str(i-1)+','+str(j)
								if x==2:
									p=p+str(i)+','+str(j)+','+str(i-1)+','+str(j+1)
								if x==3:
									p=p+str(i)+','+str(j)+','+str(i)+','+str(j+1)
								if x==4:
									p=p+str(i)+','+str(j)+','+str(i+1)+','+str(j+1)
								if x==5:
									p=p+str(i)+','+str(j)+','+str(i+1)+','+str(j)
								if x==6:
									p=p+str(i)+','+str(j)+','+str(i+1)+','+str(j-1)
								if x==7:
									p=p+str(i)+','+str(j)+','+str(i)+','+str(j-1)
								if x==8:
									p=p+str(i)+','+str(j)+','+str(i-1)+','+str(j-1)
							else :
								continue
							if arr[i][j][y]=='0':
								if y==1:
									p=p+','+str(i-1)+','+str(j)
								if y==2:
									p=p+','+str(i-1)+','+str(j+1)
								if y==3:
									p=p+','+str(i)+','+str(j+1)
								if y==4:
									p=p+','+str(i+1)+','+str(j+1)
								if y==5:
									p=p+','+str(i+1)+','+str(j)
								if y==6:
									p=p+','+str(i+1)+','+str(j-1)
								if y==7:
									p=p+','+str(i)+','+str(j-1)
								if y==8:
									p=p+','+str(i-1)+','+str(j-1)
							else :
								continue	
							print p
							exit(0) 
	if t==2:
		for c in range(20):
			for d in range(20):
				i=19-c
				j=19-d
				if(arr[i][j][0]=='1'):
						while True:
							p=''
							x=randint(1,8)
							y=randint(1,8)
							if x==y:
								continue
							if arr[i][j][x]=='0':
								if x==1:
									p=p+str(i)+','+str(j)+','+str(i-1)+','+str(j)
								if x==2:
									p=p+str(i)+','+str(j)+','+str(i-1)+','+str(j+1)
								if x==3:
									p=p+str(i)+','+str(j)+','+str(i)+','+str(j+1)
								if x==4:
									p=p+str(i)+','+str(j)+','+str(i+1)+','+str(j+1)
								if x==5:
									p=p+str(i)+','+str(j)+','+str(i+1)+','+str(j)
								if x==6:
									p=p+str(i)+','+str(j)+','+str(i+1)+','+str(j-1)
								if x==7:
									p=p+str(i)+','+str(j)+','+str(i)+','+str(j-1)
								if x==8:
									p=p+str(i)+','+str(j)+','+str(i-1)+','+str(j-1)
							else :
								continue
							if arr[i][j][y]=='0':
								if y==1:
									p=p+','+str(i-1)+','+str(j)
								if y==2:
									p=p+','+str(i-1)+','+str(j+1)
								if y==3:
									p=p+','+str(i)+','+str(j+1)
								if y==4:
									p=p+','+str(i+1)+','+str(j+1)
								if y==5:
									p=p+','+str(i+1)+','+str(j)
								if y==6:
									p=p+','+str(i+1)+','+str(j-1)
								if y==7:
									p=p+','+str(i)+','+str(j-1)
								if y==8:
									p=p+','+str(i-1)+','+str(j-1)
							else :
								continue	
							print p
							exit(0) 
	if t==3:
		for j in range(20):
			for i in range(20):
				if(arr[i][j][0]=='1'):
						while True:
							p=''
							x=randint(1,8)
							y=randint(1,8)
							if x==y:
								continue
							if arr[i][j][x]=='0':
								if x==1:
									p=p+str(i)+','+str(j)+','+str(i-1)+','+str(j)
								if x==2:
									p=p+str(i)+','+str(j)+','+str(i-1)+','+str(j+1)
								if x==3:
									p=p+str(i)+','+str(j)+','+str(i)+','+str(j+1)
								if x==4:
									p=p+str(i)+','+str(j)+','+str(i+1)+','+str(j+1)
								if x==5:
									p=p+str(i)+','+str(j)+','+str(i+1)+','+str(j)
								if x==6:
									p=p+str(i)+','+str(j)+','+str(i+1)+','+str(j-1)
								if x==7:
									p=p+str(i)+','+str(j)+','+str(i)+','+str(j-1)
								if x==8:
									p=p+str(i)+','+str(j)+','+str(i-1)+','+str(j-1)
							else :
								continue
							if arr[i][j][y]=='0':
								if y==1:
									p=p+','+str(i-1)+','+str(j)
								if y==2:
									p=p+','+str(i-1)+','+str(j+1)
								if y==3:
									p=p+','+str(i)+','+str(j+1)
								if y==4:
									p=p+','+str(i+1)+','+str(j+1)
								if y==5:
									p=p+','+str(i+1)+','+str(j)
								if y==6:
									p=p+','+str(i+1)+','+str(j-1)
								if y==7:
									p=p+','+str(i)+','+str(j-1)
								if y==8:
									p=p+','+str(i-1)+','+str(j-1)
							else :
								continue	
							print p
							exit(0) 
	if t==4:
		for d in range(20):
			for c in range(20):
				i=19-c
				j=19-d
				if(arr[i][j][0]=='1'):
						while True:
							p=''
							x=randint(1,8)
							y=randint(1,8)
							if x==y:
								continue
							if arr[i][j][x]=='0':
								if x==1:
									p=p+str(i)+','+str(j)+','+str(i-1)+','+str(j)
								if x==2:
									p=p+str(i)+','+str(j)+','+str(i-1)+','+str(j+1)
								if x==3:
									p=p+str(i)+','+str(j)+','+str(i)+','+str(j+1)
								if x==4:
									p=p+str(i)+','+str(j)+','+str(i+1)+','+str(j+1)
								if x==5:
									p=p+str(i)+','+str(j)+','+str(i+1)+','+str(j)
								if x==6:
									p=p+str(i)+','+str(j)+','+str(i+1)+','+str(j-1)
								if x==7:
									p=p+str(i)+','+str(j)+','+str(i)+','+str(j-1)
								if x==8:
									p=p+str(i)+','+str(j)+','+str(i-1)+','+str(j-1)
							else :
								continue
							if arr[i][j][y]=='0':
								if y==1:
									p=p+','+str(i-1)+','+str(j)
								if y==2:
									p=p+','+str(i-1)+','+str(j+1)
								if y==3:
									p=p+','+str(i)+','+str(j+1)
								if y==4:
									p=p+','+str(i+1)+','+str(j+1)
								if y==5:
									p=p+','+str(i+1)+','+str(j)
								if y==6:
									p=p+','+str(i+1)+','+str(j-1)
								if y==7:
									p=p+','+str(i)+','+str(j-1)
								if y==8:
									p=p+','+str(i-1)+','+str(j-1)
							else :
								continue	
							print p
							exit(0) 
		
