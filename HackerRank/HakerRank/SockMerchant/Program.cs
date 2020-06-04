using System;

namespace SockMerchant
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] a = new int[] {10,20,20,10,10,30,50,10,20};

            System.Console.WriteLine(sockMerchant(a.Length, a));
        }

        static int sockMerchant(int n, int[] ar)
        {
            int pairs = 0;
            int count = 1;

            Array.Sort(ar);

            int i = 0;
            while (i<n)
            {
                int j = i+1;

                while(j<n && ar[i]==ar[j])
                {
                    count++;
                    j++;
                }

                pairs+=(int)count/2;

                i=j;
                count = 1;
            }

            return pairs;
        }
    }
}
