using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;

namespace HakerRank
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> a =new List<int>{ 2, 6 };
            List<int> b = new List<int> { 24, 36 };
            getTotalX(a, b);
        }

        static int getTotalX(List<int> a, List<int> b)
        {
            Dictionary<int,int> dic = new Dictionary<int, int>();

            int count = 0;
            //Gets all the factors of each number of b and count how many times this number appears
            for (int i = 0; i < b.Count; i++)
            {
                dic.Add(b[i], 1);
                for (int j = 1; j < b[i]; j++)
                {
                    if (b[i] % j == 0)
                    {
                        if (dic.ContainsKey(j))
                        {
                            dic[j] = dic[j]+1;
                        }
                        else
                        {
                            dic.Add(j, 1);
                        }
                        
                    }
                }
                Console.WriteLine();
            }

            foreach (var item in dic)
            {
                //Console.WriteLine($"{item.Key} : {item.Value}");

                //Only numbers that are factor of all elements on b
                if (item.Value == b.Count)
                {
                    bool isFactorOffAllOnA = true;
                    for (int i = 0; i < a.Count; i++)
                    {
                        isFactorOffAllOnA = isFactorOffAllOnA && item.Key % a[i] == 0 ;
                    }

                    //And all a is a factor of this number
                    if (isFactorOffAllOnA)
                    {
                        //Console.WriteLine($"Valor: {item.Key}");
                        count++;
                    }
                    
                }

            }

            //Console.WriteLine(dic.Where(c => c.Value == b.Length).Count());
            //Console.WriteLine(count);
            
            return count;
        }
    }
}
