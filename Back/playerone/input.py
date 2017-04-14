import subprocess
output=""
a="100000000"
i=0
while i<20:
	j=0
	while j<20:
		output=output+a
		j=j+1
	i=i+1
x=subprocess.Popen("./botcpp",stdin=subprocess.PIPE,stdout=subprocess.PIPE,shell=True)
y=x.communicate(output)[0]
print y