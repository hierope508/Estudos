using System;

namespace _2DArrayDS
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            int[][] arr = new int[][] {
                new int[] {-1,-1,0,-9,-2,-2},
                new int[] {-2,-1,-6,-8,-2,-5},
                new int[] {-1,-1,-1,-2,-3,-4},
                new int[] {-1,-9,-2,-4,-4,-5},
                new int[] {-7,-3,-3,-2,-9,-9},
                new int[] {-1,-3,-1,-2,-4,-5},
            };

            Console.WriteLine(hourglassSum(arr));
        }

        static int hourglassSum(int[][] arr)
        {
            int max = Int32.MinValue;
            for (int i = 0; i <4; i++)
            {
                int sum = 0;
                for (int j = 0; j < 4; j++)
                {
                    sum = 0;

                    for (int k = j; k < j+3; k++)
                    {
                        sum += arr[i][k];
                    }

                    sum += arr[i+1][j+1];
                    
                    for (int k = j; k < j + 3; k++)
                    {
                        sum += arr[i+2][k];
                    }

                    if (max < sum) max = sum;
                }


            }

            return max;
        }
    }
}
