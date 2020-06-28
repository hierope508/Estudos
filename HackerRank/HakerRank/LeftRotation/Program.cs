using System;
using System.Runtime.CompilerServices;

namespace LeftRotation
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] arr = new int[] { 33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60, 87, 97 };
            
            print(arr);
            
            arr = rotLeft(arr, 13);
            
            print(arr);
        }

        static void print(int[] arr)
        {
            for (int i = 0; i < arr.Length; i++)
            {
                Console.Write(arr[i]);
                Console.Write(" ");
            }

            Console.WriteLine();
        }

        static int[] rotLeft(int[] a, int d)
        {

            int[] result = new int[a.Length];
            for (int i = 0; i < a.Length; i++)
            {
                int newPosition = (a.Length - d) + i;

                if (newPosition >= a.Length)
                    newPosition = newPosition - a.Length;

                result[newPosition] = a[i];
            }

            return result;
 
        }
    }
}
