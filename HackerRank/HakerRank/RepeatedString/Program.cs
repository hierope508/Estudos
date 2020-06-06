using System;
using System.Linq;

namespace RepeatedString
{
    class Program
    {
        static void Main(string[] args)
        {
            System.Console.WriteLine(repeatedString("ojowrdcpavatfacuunxycyrmpbkvaxyrsgquwehhurnicgicmrpmgegftjszgvsgqavcrvdtsxlkxjpqtlnkjuyraknwxmnthfpt", 685118368975));
        }

        static long repeatedString(string s, long n)
        {
            if (s == "a")
                return n;

            long length = s.LongCount();
            int diff = (int)(n % length);
            long repeat = (n / length);

            long countA = s.Split('a').Length -1 ;

            long result = (countA * repeat) + (s.Substring(0, diff).Split('a').Length);

            return result;
        }
    }
}
