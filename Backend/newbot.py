from subprocess import Popen,PIPE
import os
from valid import xodia1
from sys import argv
from compile import compile
from sandbox import sandbox

"""
format of bot1 = filename.extension.playernumber i.e filename.extension.1
format of bot2 = filename.extension.playernumber i.e filename.extension.2

error code for checkerror function
Sandbox errors:
timeout error = 1
memory error=2
all other = 3

Validation errors:
didnt played from ground = 4
out of bound = 5
didnt played on adjacent locations = 6
didnt played from active leaf = 7
retracing = 8


logfile format
move.player.starting point x coordinate.starting point y coordinate.new leaf1 x coordinate.new leaf1 y coordinate.new leaf2 x coordinate.new leaf2 y coordinate.score1.score2"""

arr1 = [['000000000' for i in range(20)] for j in range(20)]
arr2 = [['000000000' for i in range(20)] for j in range(20)]
sc1=0
sc2=0
valid = 0
turner=1
if1=-1
jf1=-1
if2=-1
jf2=-1
log=''
flag=0
it1='#'
jt1='#'
it2='#'
jt2='#'

def Nlog(player,i1,j1,i2,j2,i3,j3,s1,s2,log):
	log=log+"m"+"."+str(player)+"."+str(i1)+"."+str(j1)+"."+str(i2)+"."+str(j2)+"."+str(i3)+"."+str(j3)+"."+str(s1)+"."+str(s2)+' '
	return log

def Tlog(player,i2,j2,i3,j3,s1,s2,log):
	log=log+"t"+"."+str(player)+"."+str(i2)+"."+str(j2)+"."+str(i3)+"."+str(j3)+"."+str(s1)+"."+str(s2)+' '
	return log

def Ilog(err,player,log):
	log=log+"i"+"."+str(player)+"."+str(err)+' '
	return log

def Wlog(player,log):
	log=log+"w"+"."+str(player)+' '
	return log

while valid==0:
	if((turner%2)!=0):
		print 'First Turn'
		extension=compile('bot.cpp',turner%2)	
		sand_output,flag=sandbox(arr1,extension,1)
		print sand_output
	else:
		print 'Second Turn'
 		extension=compile('second.py',turner%2)
		sand_output,flag=sandbox(arr2,"py",2)
		print sand_output	
	if flag==1:
		#print 'Ilog'
		log=Ilog(1,(turner-1)%2+1,log)
		break
		
	else:
		arr1,arr2,sc1,sc2,i1,j1,i2,j2,i3,j3,turner,if1,jf1,if2,jf2,it1,jt1,it2,jt2,valid,flag=xodia1(arr1,arr2,sc1,sc2,turner,sand_output,if1,jf1,if2,jf2,it1,jt1,it2,jt2,valid)
		if flag!=0:
			if turner%2!=0:
				if flag==4:
					log=Nlog(1,i1,j1,i2,j2,i3,j3,sc1,sc2,log)
					log=Ilog(4,1,log)
					log=Wlog(2,log)
					break
				elif flag==5:
					log=Nlog(1,i1,j1,i2,j2,i3,j3,sc1,sc2,log)
					log=Ilog(5,1,log)
					log=Wlog(2,log)
					break
				elif flag==6:
					log=Nlog(1,i1,j1,i2,j2,i3,j3,sc1,sc2,log)
					log=Ilog(6,1,log)
					log=Wlog(2,log)
					break
				elif flag==7:
					log=Nlog(1,i1,j1,i2,j2,i3,j3,sc1,sc2,log)
					log=Ilog(7,1,log)
					log=Wlog(2,log)
					break
				elif flag==8:
					log=Nlog(1,i1,j1,i2,j2,i3,j3,sc1,sc2,log)
					log=Ilog(8,1,log)
					log=Wlog(2,log)
					break
			else:
				if flag==4:
					if j3!='#':
						log=Nlog(2,i1,19-int(j1),i2,19-int(j2),i3,19-int(j3),sc1,sc2,log)
					else:
						log=Nlog(2,i1,19-int(j1),i2,19-int(j2),i3,j3,sc1,sc2,log)
					log=Ilog(4,2,log)
					log=Wlog(1,log)
					break
				elif flag==5:
					if j3!='#':
						log=Nlog(2,i1,19-int(j1),i2,19-int(j2),i3,19-int(j3),sc1,sc2,log)
					else:
						log=Nlog(2,i1,19-int(j1),i2,19-int(j2),i3,j3,sc1,sc2,log)
					log=Ilog(5,2,log)
					log=Wlog(1,log)
					break
				elif flag==6:
					if j3!='#':
						log=Nlog(2,i1,19-int(j1),i2,19-int(j2),i3,19-int(j3),sc1,sc2,log)
					else:
						log=Nlog(2,i1,19-int(j1),i2,19-int(j2),i3,j3,sc1,sc2,log)
					log=Ilog(6,2,log)
					log=Wlog(1,log)
					break
				elif flag==7:
					if j3!='#':
						log=Nlog(2,i1,19-int(j1),i2,19-int(j2),i3,19-int(j3),sc1,sc2,log)
					else:
						log=Nlog(2,i1,19-int(j1),i2,19-int(j2),i3,j3,sc1,sc2,log)
					log=Ilog(7,2,log)
					log=Wlog(1,log)
					break
				elif flag==8:
					if j3!='#':
						log=Nlog(2,i1,19-int(j1),i2,19-int(j2),i3,19-int(j3),sc1,sc2,log)
					else:
						log=Nlog(2,i1,19-int(j1),i2,19-int(j2),i3,j3,sc1,sc2,log)
					log=Ilog(8,2,log)
					log=Wlog(1,log)
					break

		elif flag==0:
			if  valid==1:
				log=Nlog(2,i1,19-int(j1),i2,19-int(j2),i3,19-int(j3),sc1,sc2,log)
				#log=Nlog(1,i1,j1,i2,j2,i3,j3,sc1,sc2,log)
				log=Wlog(1,log)
				break
			elif valid==2:
				#log=Nlog(2,i1,19-int(j1),i2,19-int(j2),i3,19-int(j3),sc1,sc2,log)
				log=Nlog(1,i1,j1,i2,j2,i3,j3,sc1,sc2,log)
				log=Wlog(2,log)
				break
			elif valid==3:
				log=Wlog(0,log)
				break
			if (if1!=-1):
				if(turner%2!=0):
					log=Nlog(1,i1,j1,i2,j2,i3,j3,sc1,sc2,log)
					log=Tlog(2,it1,jt1,it2,jt2,sc1,sc2,log)
				else:
					log=Nlog(2,i1,19-int(j1),i2,19-int(j2),i3,19-int(j3),sc1,sc2,log)
					if it1=='#':
						log=Tlog(1,it1,jt1,it2,19-int(jt2),sc1,sc2,log)
					else:
						log=Tlog(1,it1,19-int(jt1),it2,jt2,sc1,sc2,log)
				
			else:
				if((turner-1)%2!=0):
					log=Nlog(1,i1,j1,i2,j2,i3,j3,sc1,sc2,log)

				else:
					if j3!='#':
						log=Nlog(2,i1,19-int(j1),i2,19-int(j2),i3,19-int(j3),sc1,sc2,log)
					else:
						log=Nlog(2,i1,19-int(j1),i2,19-int(j2),i3,j3,sc1,sc2,log)
	
print log
filewrite = open("log.txt","w")
filewrite.write(log)
filewrite.close()


