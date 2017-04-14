import java.io.*;
class temp
{
	public static void main(String args[])throws IOException
	{
		BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
		char array[][][]=new char[20][20][9];
		String s=br.readLine();
		int i,j,k,i1=0,i2=0,i3=0,j1=0,j2=0,j3=0;
		for(i=0;i<20;i++)
		{
			for(j=0;j<20;j++)
			{
				for(k=0;k<9;k++)
				{
					array[i][j][k]=s.charAt(i*9*20+j*9+k);
				}
			}
		}
		
		//your code to grow

		//for first move
		System.out.print(i1+","+j1+","+i2+","+j2);
		//where (i1,j1)(i2,j2) are coordinates of the seed and leaf

		//for the rest of the moves
		System.out.print(i1+","+j1+","+i2+","+j2+","+i3+","+j3);
		//where (i1,j2)(i2,j2)(i3,j3) are coordinates of the seed and leaves
	}
}
