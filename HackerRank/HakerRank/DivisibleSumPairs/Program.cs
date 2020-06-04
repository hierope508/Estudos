using System;

namespace DivisibleSumPairs
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] a = new int[] {1,3,2,6,1,2};
            System.Console.WriteLine(divisibleSumPairs(a.Length, 3, a));
        }

        static int divisibleSumPairs(int n, int k, int[] ar)
        {
            int count = 0;
            for (int i = 0; i < n; i++)
            {
                for (int j = i+1; j < n; j++)
                {
                    if((ar[i] + ar[j]) % k == 0 ) count++;
                }
            }
            
            return count;
        }
    }
}
