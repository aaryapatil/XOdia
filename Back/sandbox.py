import subprocess, resource, time, sys, signal, os, threading

'''Sandbox function is called by Bot Management file.
   For C, C++ and Java code, user's code (found at ./playerone) is compiled by Bot Management
   and output file is created(at ./playerone).
   For Python code, user's code is compiled+run by sandbox function'''

def sandbox(arr, ext, pname):
    #LIMIT TIME
    #soft,hard = resource.getrlimit(resource.RLIMIT_CPU) 
    #resource.setrlimit(resource.RLIMIT_CPU,(1,1))
    #soft,hard = resource.getrlimit(resource.RLIMIT_CPU)

    #LIMITING NUMBER OF PROCESS
	soft,hard = resource.getrlimit(resource.RLIMIT_NPROC)
	resource.setrlimit(resource.RLIMIT_NPROC,(400,400))
	soft,hard = resource.getrlimit(resource.RLIMIT_NPROC)

    #LIMITING STACK MEMORY
	soft,hard = resource.getrlimit(resource.RLIMIT_STACK)
	resource.setrlimit(resource.RLIMIT_STACK,(1024*1024*8,1024*1024*8)) #LIMIT IS 8 MB
	soft,hard = resource.getrlimit(resource.RLIMIT_STACK)

    #LIMITING DATA
	soft,hard = resource.getrlimit(resource.RLIMIT_DATA)
	resource.setrlimit(resource.RLIMIT_DATA,(1024,1024))
	soft,hard = resource.getrlimit(resource.RLIMIT_DATA)

    #CONVERT INPUT ARRAY TO SINGLE STRING
	string=''
	for i in range(20):
		for j in range(20):
			string=string+str(arr[i][j])
	command=''
    
    #FUNCTION FOR TIMEOUT
	def wait_timeout(proc, seconds):
		start = time.time()
		end = start + seconds
		interval = min(seconds / 1000.0, 1)
		while True:
			result = proc.poll()
			if result is not None:
				return result
			if time.time() >= end:
				raise RuntimeError("Process timed out")
			time.sleep(interval)
	if pname==1:
		if ext=='py':
			command="python ./playerone/first.py"
		if ext=='c' or ext=='cpp':
			command="./a.out"
		if ext=='java':	
			command='java botv2'			
	if pname==2:
		if ext=='py':
			command="python ./playertwo/second.py"
		if ext=='c' or ext =='cpp':
			command="./playertwo/a.out"
		if ext=='java':
			command='java botv2'
	p=subprocess.Popen(command, shell=True, stdout=subprocess.PIPE, stdin=subprocess.PIPE, stderr=subprocess.PIPE, preexec_fn=os.setsid)
	try:
		p.stdin.write(string)
		p.stdin.close()
        #op,err=p.communicate()
		wait_timeout(p,5)   #1 SECOND HARD TIMEOUT
		op=p.stdout.read()
		err=p.stderr.read()
		if err!='' and (err is not None):
			flag=1
			#print err, flag
			return err,flag
		else:
			flag=0
			#print flag
			return str(op),flag

	except RuntimeError:
		os.killpg(p.pid, signal.SIGKILL)  #HARD KILL POPEN PROCESS GROUP IF TIMEOUT IS EXCEEDED
		flag=1
		print flag,'here'
		return 'Timeout error!!',flag

'''USE THIS FOR TESTING
test_array=[["0,0,0,0,0,0,0,0" for j in range(25)]for i in range(25)]
sandbox(test_array, 'py', 1)
p=subprocess.Popen('CLASSPATH=/home/shivam/playerone java first', shell=True, stdout=subprocess.PIPE, stdin=subprocess.PIPE, stderr=subprocess.PIPE, preexec_fn=os.setsid)
p=subprocess.Popen('CLASSPATH=~/playertwo java second', shell=True, stdout=subprocess.PIPE, stdin=subprocess.PIPE, stderr=subprocess.PIPE, preexec_fn=os.setsid)
    if ext !='java':'''


