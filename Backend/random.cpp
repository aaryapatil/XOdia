#include <iostream>
#include <ctime> // Needed for the true randomization
#include <cstdlib> 
using namespace std;

int main ()
{
	int xRan;
	srand( time(0)); // This will ensure a really randomized number by help of time.
	
	xRan=rand()%15+1; // Randomizing the number between 1-15.
	cout << "Shows a random number between 1-15: " << xRan;	
	
	return 0;
}