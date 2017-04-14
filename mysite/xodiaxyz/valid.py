def xodia1(arr1,arr2,sc1,sc2,turner,player_output,if1,jf1,if2,jf2,it1,jt1,it2,jt2,valid):    
 #i1,j1 = coordinates of chosen leaf
    #i2,j2 coordinates of new leaf 1
    #i3,j3 = coordinates of new leaf 2    
	def swap_array(string):
		string_split=list(string)
		if(string_split[0]=='1'):
			string_split[0]='2'
		elif(string_split[0]=='3'):
			string_split[0]='4'
		elif(string_split[0]=='5'):
			string_split[0]='6'
		elif(string_split[0]=='2'):
			string_split[0]='1'
		elif(string_split[0]=='4'):
			string_split[0]='3'
		elif(string_split[0]=='6'):
			string_split[0]='5'
		string_split[2],string_split[8]=string_split[8],string_split[2]
		string_split[3],string_split[7]=string_split[7],string_split[3]
		string_split[4],string_split[6]=string_split[6],string_split[4]
		string=''.join(string_split)
		return string
	def replace(S,pos,ch):#replaces character at 'pos' position with ch             
		chA =list(S)	    
		chA[pos]=ch
		S=''.join(chA)
		return S         
	def direction(i1,j1,i2,j2):#returns direction of one point to another         
		#direction is returned, with up as 1 and clockwise
		#down is 5
		#up left is 8
		#invalid is nine
		if(i2==i1-1 and j2==j1):#up         
			r=1          
		elif(i2==i1-1 and j2==j1+1):#up right         
			r=2          
		elif(i2==i1 and j2==j1+1):#left         
			r=3          
		elif(i2==i1+1 and j2==j1+1):#down right         
			r=4          
		elif(i2==i1+1 and j2==j1):#down      
			r=5          
		elif(i2==i1+1 and j2==j1-1):# down left         
			r=6          
		elif(i2==i1 and j2==j1-1):#left         
			r=7          
		elif(i2==i1-1 and j2==j1-1):#up left         
			r=8          
		else:#didnt played in adjacent locations      
			r=9          
		if(i1<0 or j1<0 or i1>19 or j1>19 or i2<0 or j2<0 or i2>19 or j2>19):#index out of bounds         
			r=10        
		return r 
	def heat(if1,jf1,if2,jf2,turner): 
		if (turner%2!=0):
			chf1 = arr1[if1][jf1]
			chf2 = arr1[if2][jf2]
			if(chf1[0]=='5'):  
				arr1[if1][jf1]= replace(arr1[if1][jf1],0,'1')
				arr2[if1][19-jf1]=swap_array(arr1[if1][jf1])
			if(chf2[0]=='5'): 
				arr1[if2][jf2]= replace(arr1[if2][jf2],0,'1')
				arr2[if2][19-jf2]=swap_array(arr1[if2][jf2])
			return -1,-1,-1,-1
		else:  		
			chf1 = arr2[if1][jf1]
			chf2 = arr2[if2][jf2]
			if(chf1[0]=='5'):         
				arr2[if1][jf1]= replace(arr2[if1][jf1],0,'1')
				arr1[if1][19-jf1]=swap_array(arr2[if1][jf1])
			if(chf2[0]=='5'):  
				arr2[if2][jf2]= replace(arr2[if2][jf2],0,'1')
				arr1[if2][19-jf2]=swap_array(arr2[if2][jf2])              
			return -1,-1,-1,-1                   
	def white_seed(i1,j1,i2,j2,sc1,turner):#white seed
        #This method executes the "first move" ie. seeding for white
		flag=0
		if j1==0:#checks if seed on ground
			r=direction(i1,j1,i2,j2)
			if r!=10:
				if(r!=9):#checks if adjacent valid address for stump            
					arr1[i1][j1]= replace(arr1[i1][j1], direction(i1,j1,i2,j2),'1')
					arr1[i1][j1]= replace(arr1[i1][j1],0,'3')
					arr2[i1][19-j1]=swap_array(arr1[i1][j1])
					arr1[i2][j2]= replace(arr1[i2][j2], direction(i2,j2,i1,j1),'1')
					arr1[i2][j2]= replace(arr1[i2][j2],0,'1')
					arr2[i2][19-j2]=swap_array(arr1[i2][j2])
					sc1 = sc1+1
					turner=turner+1
				else:
					flag=6
			else:           
				flag=5                  
		else:       
			flag=4      
		
		return flag,sc1,turner
	def black_seed(i1,j1,i2,j2,sc2,turner):#black seed
    
        #This method executes the "first move" ie. seeding for black
		flag=0
		if(j1==0):#checks if seed on ground
			r=direction(i1,j1,i2,j2)
			if r!=10:        
				if(r!=9):#checks if adjacent valid address for stump            
					arr2[i1][j1]= replace(arr2[i1][j1], direction(i1,j1,i2,j2),'1')
					arr2[i1][j1]= replace(arr2[i1][j1],0,'3')
					arr1[i1][19-j1]=swap_array(arr2[i1][j1])
					arr2[i2][j2]= replace(arr2[i2][j2], direction(i2,j2,i1,j1),'1')
					arr2[i2][j2]= replace(arr2[i2][j2],0,'1')
					arr1[i2][19-j2]=swap_array(arr2[i2][j2])
					sc2 = sc2+1
					turner=turner+1
				else:           
					flag=6                    
			else:
				flag=5
		else:       
			flag=4        
		return flag,sc2,turner
	def white_move(i1,j1,i2,j2,i3,j3,sc1,sc2,turner,if1,jf1,if2,jf2,it1,jt1,it2,jt2): #accepts position, tries move, returns flag    
        #This method will accept initial and final positions, and if legal will make changes
		flag=0
		dir1=direction(i1,j1,i2,j2)
		dir2=direction(i1,j1,i3,j3)

		p=arr1[i1][j1]
		c1=arr1[i2][j2]
		c2=arr1[i3][j3]
		ch1=c1[0] 
		ch2=c2[0]
		if(dir1!=10 and dir2!=10):
			if((dir1!=9 and dir2!=9) or (dir1 != dir2)):
				if(p[0]=='1'):#checks if played from leaf
					if(p[dir1]=='0' and p[dir2]=='0'):#checks for overlapping
						arr1[i1][j1]=replace(arr1[i1][j1],dir1,'1')
						arr1[i1][j1]=replace(arr1[i1][j1],dir2,'1')
						arr1[i1][j1]=replace(arr1[i1][j1],0,'3')
						arr2[i1][19-j1]=swap_array(arr1[i1][j1])	
						dir1=direction(i2,j2,i1,j1)
						dir2=direction(i3,j3,i1,j1)
						#changes to child elements
						if(ch1=='3' or ch1=='4' or ch1=='5' or ch1=='1'):
							arr1[i2][j2]=replace(arr1[i2][j2],dir1,'1')
							arr2[i2][19-j2]=swap_array(arr1[i2][j2])
						elif (ch1=='0'):
							arr1[i2][j2]=replace(arr1[i2][j2],dir1,'1')
							arr1[i2][j2]= replace(arr1[i2][j2],0,'1')
							arr2[i2][19-j2]=swap_array(arr1[i2][j2])
						if(ch2=='3' or ch2=='4' or ch2=='5' or ch2=='1'):
							arr1[i3][j3]=replace(arr1[i3][j3],dir2,'1')
							arr2[i3][19-j3]=swap_array(arr1[i3][j3])
						elif(ch2=='0'):
							arr1[i3][j3]=replace(arr1[i3][j3],dir2,'1')
							arr1[i3][j3]= replace(arr1[i3][j3],0,'1')
							arr2[i3][19-j3]=swap_array(arr1[i3][j3])
						sc1=sc1+2
						if(ch1=='3' or ch1=='4'): 
							sc1=sc1-1
						elif(ch1=='2'):#for termination
							arr1[i2][j2]=replace(arr1[i2][j2],0,'5')
							arr2[i2][19-j2]=swap_array(arr1[i2][j2])
							if(ch2!='3' and ch2!='4'):#if second leaf does not go to a node
								arr1[i3][j3]=replace(arr1[i3][j3],0,'5') #freeze second leaf
								arr2[i3][19-j3]=swap_array(arr1[i3][j3])
						if(ch2=='3' or ch2=='4'): 
							sc1=sc1-1
						elif(ch2=='2'): 
							arr1[i3][j3]=replace(arr1[i3][j3],0,'5')
							arr2[i3][19-j3]=swap_array(arr1[i3][j3])	
							if(ch1!='3' and ch1!='4'):
								arr1[i2][j2]=replace(arr1[i2][j2],0,'5')#freeze the second leaf
								arr2[i2][19-j2]=swap_array(arr1[i2][j2])
						if(if1!=-1):#check if a leaf has been freezed previously
							if1,jf1,if2,jf2=heat(if1,jf1,if2,jf2,turner)
						if(ch1=='2' or ch2=='2'):
							if1=i2
							jf1=j2
							if2=i3
							jf2=j3
							if ch1=='2':
								it1=i2
								jt1=j2
							elif ch2=='2':
								it2=i3
								jt2=j3
							else:
								it1=i2
								jt1=j2
								it2=i3
								jt2=j3
						else:
							turner=turner+1
						if(i2==0):
							arr1[i2][j2] = replace(arr1[i2][j2],8,'1')
							arr1[i2][j2] = replace(arr1[i2][j2],1,'1')
							arr1[i2][j2] = replace(arr1[i2][j2],2,'1')
							arr2[i2][19-j2]=swap_array(arr1[i2][j2])
						if(j2==0):
							arr1[i2][j2] = replace(arr1[i2][j2],8,'1')
							arr1[i2][j2] = replace(arr1[i2][j2],7,'1')
							arr1[i2][j2] = replace(arr1[i2][j2],6,'1')
							arr2[i2][19-j2]=swap_array(arr1[i2][j2]) 
						if(j2==19):
							arr1[i2][j2] = replace(arr1[i2][j2],2,'1')
							arr1[i2][j2] = replace(arr1[i2][j2],3,'1')
							arr1[i2][j2] = replace(arr1[i2][j2],4,'1')
							arr2[i2][19-j2]=swap_array(arr1[i2][j2])
						if(i2==19):
							arr1[i2][j2] = replace(arr1[i2][j2],5,'1')
							arr1[i2][j2] = replace(arr1[i2][j2],6,'1')
							arr1[i2][j2] = replace(arr1[i2][j2],4,'1')  
							arr2[i2][19-j2]=swap_array(arr1[i2][j2])
						if(i3==0):
							arr1[i3][j3] = replace(arr1[i3][j3],8,'1')
							arr1[i3][j3] = replace(arr1[i3][j3],1,'1')
							arr1[i3][j3] = replace(arr1[i3][j3],2,'1')
							arr2[i3][19-j3]=swap_array(arr1[i3][j3])
						if(j3==0):
							arr1[i3][j3] = replace(arr1[i3][j3],8,'1')
							arr1[i3][j3] = replace(arr1[i3][j3],7,'1')
							arr1[i3][j3] = replace(arr1[i3][j3],6,'1') 
							arr2[i3][19-j3]=swap_array(arr1[i3][j3])
						if(j3==19):
							arr1[i3][j3] = replace(arr1[i3][j3],2,'1')
							arr1[i3][j3] = replace(arr1[i3][j3],3,'1')
							arr1[i3][j3] = replace(arr1[i3][j3],4,'1')
							arr2[i3][19-j3]=swap_array(arr1[i3][j3])
						if(i3==19):
							arr1[i3][j3] = replace(arr1[i3][j3],5,'1')
							arr1[i3][j3] = replace(arr1[i3][j3],6,'1')
							arr1[i3][j3] = replace(arr1[i3][j3],4,'1')
							arr2[i3][19-j3]=swap_array(arr1[i3][j3])
						count=0
						for i in range(9):
							if(arr1[i2][j2][i]=='0'):
								count=count+1
						if count==1:
							##print count,arr1[i2][j2]
							arr1[i2][j2]=replace(arr1[i2][j2],0,'3')
							arr2[i2][19-j2] = swap_array(arr1[i2][j2])
						count=0
						for i in range(9):
							if(arr1[i3][j3][i]=='0'):
								count=count+1
						if count==1:
							##print count,arr1[i3][j3]
							arr1[i3][j3]=replace(arr1[i3][j3],0,'3')
							arr2[i3][19-j3] = swap_array(arr1[i3][j3])
					else:
						flag=8
				else:
					flag=7
			else:
				flag=6
		else:
			flag=5
		##print arr1[i1][j1],arr1[i2][j2],arr1[i3][j3],arr2[i1][19-j1],arr2[i2][19-j2],arr2[i3][19-j3]
		return flag,sc1,sc2,if1,jf1,if2,jf2,it1,jt1,it2,jt2,turner    
	def black_move(i1,j1,i2,j2,i3,j3,sc1,sc2,turner,if1,jf1,if2,jf2,it1,jt1,it2,jt2): #accepts position, tries move, returns flag    
		#This method will accept initial and final positions, and if legal will make changes
		flag=0
		dir1=direction(i1,j1,i2,j2)
		dir2=direction(i1,j1,i3,j3)
		p=arr2[i1][j1]
		c1=arr2[i2][j2]
		c2=arr2[i3][j3]
		ch1=c1[0] 
		ch2=c2[0]
		if(dir1!=10 and dir2!=10):
			if((dir1!=9 and dir2!=9) or (dir1 != dir2)):
				if(p[0]=='1'):#checks if played from leaf
					if(p[dir1]=='0' and p[dir2]=='0'):
						arr2[i1][j1]=replace(arr2[i1][j1],dir1,'1')
						arr2[i1][j1]=replace(arr2[i1][j1],dir2,'1')
						arr2[i1][j1]=replace(arr2[i1][j1],0,'3')
						arr1[i1][19-j1]=swap_array(arr2[i1][j1])	
						dir1=direction(i2,j2,i1,j1)
						dir2=direction(i3,j3,i1,j1)
						#changes to child elements
						if(ch1=='3' or ch1=='4' or ch1=='5' or ch1=='1'):
							arr2[i2][j2]=replace(arr2[i2][j2],dir1,'1')
							arr1[i2][19-j2]=swap_array(arr2[i2][j2])
						elif(ch1=='0'):
							arr2[i2][j2]=replace(arr2[i2][j2],dir1,'1')
							arr2[i2][j2]= replace(arr2[i2][j2],0,'1')
							arr1[i2][19-j2]=swap_array(arr2[i2][j2])
						if(ch2=='3' or ch2=='4' or ch2=='5' or ch2=='1'):
							arr2[i3][j3]=replace(arr2[i3][j3],dir2,'1')
							arr1[i3][19-j3]=swap_array(arr2[i3][j3])
						elif(ch2=='0'):
							arr2[i3][j3]=replace(arr2[i3][j3],dir2,'1')
							arr2[i3][j3]= replace(arr2[i3][j3],0,'1')
							arr1[i3][19-j3]=swap_array(arr2[i3][j3])
						sc2=sc2+2
						if(ch1=='3' or ch1=='4'): 
							sc2=sc2-1
						elif(ch1=='2'):
							arr2[i2][j2]=replace(arr2[i2][j2],0,'5')
							arr1[i2][19-j2]=swap_array(arr2[i2][j2])
							if(ch2!='3' and ch2!='4'):#if second leaf does not go to a node
								arr2[i3][j3]=replace(arr2[i3][j3],0,'5') #freeze second leaf
								arr1[i3][19-j3]=swap_array(arr2[i3][j3])
						if(ch2=='3' or ch2=='4'): 
							sc2=sc2-1
						elif(ch2=='2'): 
							arr2[i3][j3]=replace(arr2[i3][j3],0,'5')                                            
							arr1[i3][19-j3]=swap_array(arr2[i3][j3])	
							if(ch1!='3' and ch1!='4'): #if second leaf does not go to a node
								arr2[i2][j2]=replace(arr2[i2][j2],0,'5')#freeze the second leaf
								arr1[i2][19-j2]=swap_array(arr2[i2][j2])
						if(if1!=-1):#check if a leaf has been freezed previously
							if1,jf1,if2,jf2=heat(if1,jf1,if2,jf2,turner)
						if(ch1=='2' or ch2=='2'):
							if1=i2
							jf1=j2
							if2=i3
							jf2=j3
							if ch1=='2':
								it1=i2
								jt1=j2
							elif ch2=='2':
								it2=i3
								jt2=j3
							else:
								it1=i2
								jt1=j2
								it2=i3
								jt2=j3
						else:
							turner = turner+1
						if(i2==0):
							arr2[i2][j2] = replace(arr2[i2][j2],8,'1')
							arr2[i2][j2] = replace(arr2[i2][j2],1,'1')
							arr2[i2][j2] = replace(arr2[i2][j2],2,'1')
							arr1[i2][19-j2]=swap_array(arr2[i2][j2])
						if(j2==0):
							arr2[i2][j2] = replace(arr2[i2][j2],8,'1')
							arr2[i2][j2] = replace(arr2[i2][j2],7,'1')
							arr2[i2][j2] = replace(arr2[i2][j2],6,'1')
							arr1[i2][19-j2]=swap_array(arr2[i2][j2]) 
						if(j2==19):
							arr2[i2][j2] = replace(arr2[i2][j2],2,'1')
							arr2[i2][j2] = replace(arr2[i2][j2],3,'1')
							arr2[i2][j2] = replace(arr2[i2][j2],4,'1')
							arr1[i2][19-j2]=swap_array(arr2[i2][j2])
						if(i2==19):
							arr2[i2][j2] = replace(arr2[i2][j2],5,'1')
							arr2[i2][j2] = replace(arr2[i2][j2],6,'1')
							arr2[i2][j2] = replace(arr2[i2][j2],4,'1')
							arr1[i2][19-j2]=swap_array(arr2[i2][j2])  
						if(i3==0):
							arr2[i3][j3] = replace(arr2[i3][j3],8,'1')
							arr2[i3][j3] = replace(arr2[i3][j3],1,'1')
							arr2[i3][j3] = replace(arr2[i3][j3],2,'1')
							arr1[i3][19-j3]=swap_array(arr2[i3][j3])
						if(j3==0):
							arr2[i3][j3] = replace(arr2[i3][j3],8,'1')
							arr2[i3][j3] = replace(arr2[i3][j3],7,'1')
							arr2[i3][j3] = replace(arr2[i3][j3],6,'1')
							arr1[i3][19-j3]=swap_array(arr2[i3][j3]) 
						if(j3==19):
							arr2[i3][j3] = replace(arr2[i3][j3],2,'1')
							arr2[i3][j3] = replace(arr2[i3][j3],3,'1')
							arr2[i3][j3] = replace(arr2[i3][j3],4,'1')
							arr1[i3][19-j3]=swap_array(arr2[i3][j3])
						if(i3==19):
							arr2[i3][j3] = replace(arr2[i3][j3],5,'1')
							arr2[i3][j3] = replace(arr2[i3][j3],6,'1')
							arr2[i3][j3] = replace(arr2[i3][j3],4,'1')
							arr1[i3][19-j3]=swap_array(arr2[i3][j3])
						count=0
						for i in range(9):
							if(arr2[i2][j2][i]=='0'):
								count=count+1
						if count==1:
							##print count,arr2[i2][j2]
							arr2[i2][j2]=replace(arr2[i2][j2],0,'3')
							arr1[i2][19-j2] = swap_array(arr2[i2][j2])
						count=0
						for i in range(9):
							if(arr2[i3][j3][i]=='0'):
								count=count+1
						if count==1:
							##print count,arr2[i3][j3]
							arr2[i3][j3]=replace(arr2[i3][j3],0,'3')
							arr1[i3][19-j3] = swap_array(arr2[i3][j3])
					else:
						flag=8
				else:
					flag=7
			else:
				flag=6
		else:
			flag=5  
		##print arr1[i1][19-j1],arr1[i2][19-j2],arr1[i3][19-j3],arr2[i1][j1],arr2[i2][j2],arr2[i3][j3]
		return flag,sc1,sc2,if1,jf1,if2,jf2,it1,jt1,it2,jt2,turner
	i1='#'
	j1='#'
	i2='#'
	j2='#'
	i3='#'
	j3='#'          
	e1=0
	e2=0
	for i in xrange(20):
		for j in xrange(20):
			if arr1[i][j][0]=='1':
				e1=e1+1
	for i in xrange(20):
		for j in xrange(20):
			if arr2[i][j][0]=='1':
				e2=e2+1
	##print e1,e2
	if(turner== 1):
		player_out_split=player_output.split(',')
		if(len(player_out_split)==4):
			i1=int(player_out_split[0])
			j1=int(player_out_split[1])
			i2=int(player_out_split[2])
			j2=int(player_out_split[3])
			i3='#'
			j3='#'
			flag,sc1,turner = white_seed(i1,j1,i2,j2,sc1,turner)
			if(flag!=0):     
				if((turner-1)%2!=0):                         
					valid = 2#"Black Wins" 
				else:         
					valid = 1#"White Wins"
			e1=0
			e2=0
			for i in xrange(20):
				for j in xrange(20):
					if arr1[i][j][0]=='1':
						e1=e1+1
			for i in xrange(20):
				for j in xrange(20):
					if arr2[i][j][0]=='1':
						e2=e2+1
			##print e1,e2
			return arr1,arr2,sc1,sc2,i1,j1,i2,j2,i3,j3,turner,if1,jf1,if2,jf2,it1,jt1,it2,jt2,valid,flag
		else:
			return arr1,arr2,sc1,sc2,i1,j1,i2,j2,i3,j3,turner,if1,jf1,if2,jf2,it1,jt1,it2,jt2,valid,3
	elif(turner==2):
		player_out_split=player_output.split(',')
		if(len(player_out_split)==4):
			i1=int(player_out_split[0])
			j1=int(player_out_split[1])
			i2=int(player_out_split[2])
			j2=int(player_out_split[3])
			i3='#'
			j3='#'
			flag,sc2,turner= black_seed(i1,j1,i2,j2,sc2,turner)
			if(flag!=0):     
				if((turner-1)%2!=0):                         
					valid = 2#"Black Wins" 
				else:         
					valid = 1#"White Wins"
			e1=0
			e2=0
			for i in xrange(20):
				for j in xrange(20):
					if arr1[i][j][0]=='1':
						e1=e1+1
			for i in xrange(20):
				for j in xrange(20):
					if arr2[i][j][0]=='1':
						e2=e2+1
			##print e1,e2   
			return arr1,arr2,sc1,sc2,i1,j1,i2,j2,i3,j3,turner,if1,jf1,if2,jf2,it1,jt1,it2,jt2,valid,flag
		else:
			return arr1,arr2,sc1,sc2,i1,j1,i2,j2,i3,j3,turner,if1,jf1,if2,jf2,it1,jt1,it2,jt2,valid,3
	else:
		if(turner%2!=0):
			player_out_split=player_output.split(',')
			if(len(player_out_split)==6):
				i1=int(player_out_split[0])
				j1=int(player_out_split[1])
				i2=int(player_out_split[2])
				j2=int(player_out_split[3])
				i3=int(player_out_split[4])
				j3=int(player_out_split[5])	     
				flag,sc1,sc2,if1,jf1,if2,jf2,it1,jt1,it2,jt2,turner= white_move(i1,j1,i2,j2,i3,j3,sc1,sc2,turner,if1,jf1,if2,jf2,it1,jt1,it2,jt2)
				if(flag!=0):     
					if((turner-1)%2!=0):                         
						valid = 2#"Black Wins" 
					else:         
						valid = 1#"White Wins"
				e1=0
				e2=0
				for i in xrange(20):
					for j in xrange(20):
						if arr1[i][j][0]=='1':
							e1=e1+1
				for i in xrange(20):
					for j in xrange(20):
						if arr2[i][j][0]=='1':
							e2=e2+1
				##print e1,e2	
				if (e1==0 or e2==0):
					if(sc1>sc2):
						valid = 1#White one wins
					elif(sc1<sc2):
						valid = 2#Black two winds
					else:
						valid=3#draw
				return arr1,arr2,sc1,sc2,i1,j1,i2,j2,i3,j3,turner,if1,jf1,if2,jf2,it1,jt1,it2,jt2,valid,flag   
			else:	     
				return arr1,arr2,sc1,sc2,i1,j1,i2,j2,i3,j3,turner,if1,jf1,if2,jf2,it1,jt1,it2,jt2,valid,3
		else:     
			player_out_split=player_output.split(',')
			if(len(player_out_split)==6):
				i1=int(player_out_split[0])
				j1=int(player_out_split[1])
				i2=int(player_out_split[2])
				j2=int(player_out_split[3])
				i3=int(player_out_split[4])
				j3=int(player_out_split[5])	     
				flag,sc1,sc2,if1,jf1,if2,jf2,it1,jt1,it2,jt2,turner= black_move(i1,j1,i2,j2,i3,j3,sc1,sc2,turner,if1,jf1,if2,jf2,it1,jt1,it2,jt2)
				if(flag!=0):     
					if((turner-1)%2!=0):                         
						valid = 2#"Black Wins" 
					else:         
						valid = 1#"White Wins"
				e1=0
				e2=0
				for i in xrange(20):
					for j in xrange(20):
						if arr1[i][j][0]=='1':
							e1=e1+1
				for i in xrange(20):
					for j in xrange(20):
						if arr2[i][j][0]=='1':
							e2=e2+1
				##print e1,e2
				if(e1==0 or e2==0):
					if(sc1>sc2):
						valid = 1#White one wins
					elif(sc1<sc2):
						valid = 2#Black one wins
					else:
						valid=3#draw
				return arr1,arr2,sc1,sc2,i1,j1,i2,j2,i3,j3,turner,if1,jf1,if2,jf2,it1,jt1,it2,jt2,valid,flag    
			else:
				return arr1,arr2,sc1,sc2,i1,j1,i2,j2,i3,j3,turner,if1,jf1,if2,jf2,it1,jt1,it2,jt2,valid,3
		
