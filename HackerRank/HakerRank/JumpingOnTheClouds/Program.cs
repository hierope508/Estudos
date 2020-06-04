using System;

namespace JumpingOnTheClouds
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] c = new int[] { 0, 0, 0, 0, 1, 0 };
            System.Console.WriteLine(jumpingOnClouds(c));
        }

        static int jumpingOnClouds(int[] c)
        {
            int count = 0;
            for (int i = 0; i < c.Length; i++)
            {
                if ((i + 2) < c.Length && (c[i + 2] == 0))
                {
                    count++;
                    i++;
                }
                else
                {
                    if (i + 1 < c.Length)
                    {
                        if (c[i + 1] == 0)
                            count++;
                    }
                }
            }

            return count;
        }

    }
}
