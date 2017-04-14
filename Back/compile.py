import subprocess,os,sys,string
from compileall import compile_file

def compile(l,a):
	b=l.split('.')
	if(a!=0):
		if b[1]=='c':
			os.system('gcc ./playerone/'+str(l))
	
		elif b[1]=='java':
			os.system('javac '+str(l))

		elif b[1]=='py':
			compile_file('./playerone/'+str(l))

		elif b[1]=='cpp':	
			os.system('g++ -std=c++11 ./playerone/'+str(l))
	else:
		if b[1]=='c':
			os.system('gcc ./playertwo/'+str(l))

		elif b[1]=='java':
			os.system('javac '+str(l))

		elif b[1]=='py':
			compile_file('./playertwo/'+str(l))

		elif b[1]=='cpp':	
			os.system('g++ -std=c++11 ./playertwo/'+str(l))
	return b[1]
