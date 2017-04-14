from subprocess import Popen,PIPE
arr=[['000000000' for i in range(20)]for j in range(20)]
farr=''
arr[5][1]='100000000'
print arr[5][1]
for i in range(20):
    for j in range(20):
	farr=farr+arr[i][j]
p=Popen('python ./playerone/first.py', shell=True, stdin=PIPE, stdout=PIPE, stderr=PIPE)
op,err = p.communicate(input=farr)
print op
