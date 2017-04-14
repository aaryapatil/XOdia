import subprocess,os,sys,string
from compileall import compile_file

def compile(l,a):
	b=l.split('.')
	if(a==1):
		if b[-1]=='c':
			os.system('gcc -o ./playerone/playone ./playerone/'+str(l))
	
		elif b[-1]=='java':
			os.system('javac ./playerone/'+str(l))

		elif b[-1]=='py':
			if b[-2][-1]=='3':
				compile_file('./playerone/'+str(l))
			else:
				#print "elif2"
				compile_file('./playerone/'+str(l)) 

		else:	
			os.system('g++ -std=c++11 -o ./playerone/playone ./playerone/'+str(l))
	else:
		if b[-1]=='c':
			os.system('gcc -o ./playertwo/playtwo ./playertwo/'+str(l))

		elif b[-1]=='java':
			os.system('javac ./playertwo'+str(l))

		elif b[-1]=='py':
			if b[-2][-1]=='3':
				compile_file('./playerone/'+str(l))
			else:
				compile_file('./playertwo/'+str(l))
		else:	
			os.system('g++ -std=c++11 -o ./playertwo/playtwo ./playertwo/'+str(l))
