using System;
using System.Collections.Generic;

namespace BirthdayChocolate
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> a = new List<int> {1,2,1,3,2};
            System.Console.WriteLine(birthday(a, 3, 2));
        }


        static int birthday(List<int> s, int d, int m)
        {

            int sum = 0, count = 0, limit = 0;

            for (int i = 0; i < s.Count; i++)
            {
                sum = s[i];
                limit = 1;

                if(sum==d && m==limit){
                    count++;
                    continue;  
                } 
                
                for (int j = i+1; j < s.Count; j++)
                {
                    limit++;
                    if(limit > m) break;
                    if((sum+=s[j])> d) break;
                    if(sum==d && m==limit){
                      count++;
                      break;  
                    } 
                    
                }
            }

            return count;
        }
    }
}
