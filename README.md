# wod_day_16
Divisible sum pairs

You are given an array of n integers, a1,a2,a3,a4,a5,... an , and a positive integer, k . Find and print the number of (i,j) pairs where i < j and ai + aj is divisible by k .

Input Format

The first line contains 2  space-separated integers, n and , k respectively. 
The second line contains  n space-separated integers describing the respective values of a1,a2,a3,a4, .. an.

Constraints

Output Format

Print the number of (i,j) pairs where i<j and ai + aj is evenly divisible by k .

Sample Input

6 3
1 3 2 6 1 2
Sample Output

5

Explanation

1 + 2 is divisible by 3
1 + 2 is divisible by 3
3 + 6 is divisible by 3
2 + 1 is divisble by 3
1+ 2  is divisble by 3


Try to get the answer on O(n)
