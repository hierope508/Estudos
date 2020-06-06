using System;
using System.Linq;

namespace RepeatedString
{
    class Program
    {
        static void Main(string[] args)
        {
            System.Console.WriteLine(repeatedString("aba", 10));
        }

        static long repeatedString(string s, long n)
        {
            if (s == "a")
                return n;

            long length = s.Length;
            long repeat = (n / length) + 1;
            
            long countA = s.Split("a").LongCount() -1 ;
            long relacao = length / countA;
            


            long result = length * repeat;

            long diff = result - n;
            if(diff>0)
            {
                result-=diff;
            }
            System.Console.WriteLine($"length: {length} : repeat: {repeat} : countA: {countA} : relacao: {relacao} : result: {result}");
            result = (result / relacao) - 1 ;
            // System.Console.WriteLine(repeat);



            // if (repeat > Int32.MaxValue)
            // {
            //     while(repeat>Int32.MaxValue)
            //     {
            //         result += String.Join("", Enumerable.Repeat(s, Int16.MaxValue).ToArray()); 
            //         repeat =repeat-Int16.MaxValue;
            //     }

            //     result += String.Join("", Enumerable.Repeat(s, (int)repeat).ToArray());
            // }
            // else
            // {
            //     result = String.Join("", Enumerable.Repeat(s, (int)repeat).ToArray());
            // }


            // // for (long i = 0; i < repeat; i++)
            // // {
            // //     System.Console.WriteLine(length);
            // //     if ((length > n))
            // //     {
            // //         long diff = (length - n);
            // //         result = result.Substring(0,result.Length-(int)diff);
            // //         break;
            // //     }

            // //     result += s;
            // //     length+=s.Length;
            // // }
            // length = result.LongCount();

            // if ((length > n))
            // {
            //     long diff = (length - n);
            //     result = result.Substring(0, result.Length - (int)diff);
            //     // break;
            // }

            // return result.Split("a").LongLength - 1;

            return result;
        }
    }
}
