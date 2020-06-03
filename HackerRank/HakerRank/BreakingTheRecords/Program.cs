using System;

namespace BreakingTheRecords
{
    class Program
    {
    static void Main(string[] args)
        {
            int[] a = new int[] {3,4,21,36,10,28,35,5,24,42};
            
            int[] result = breakingRecords(a);

            System.Console.WriteLine($"{result[0]} {result[1]}");
        }

        static int[] breakingRecords(int[] scores){
            int min = scores[0];
            int max = scores[0];
            int countMin = 0;
            int countMax = 0;

            for (int i = 0; i < scores.Length; i++)
            {
                if(min>scores[i]){
                    min = scores[i];
                    countMin++;
                }

                if(max<scores[i]){
                    max = scores[i];
                    countMax++;
                }
            }

            return new int[] {countMax, countMin};
        }
    }
}
