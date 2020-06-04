using System;
using System.Collections.Generic;
using System.Linq;

namespace MigratoryBirds
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> a = new List<int> {1,2,3,4,5,4,3,2,1,3,4};

            System.Console.WriteLine(migratoryBirds(a));
        }

        static int migratoryBirds(List<int> arr)
        {
            Dictionary<int,int> types = new Dictionary<int, int>()
            {
                [1] = 0,
                [2] = 0,
                [3] = 0,
                [4] = 0,
                [5] = 0
            };

            for (int i = 0; i < arr.Count; i++)
            {
                if(types.ContainsKey(arr[i])){
                    types[arr[i]] = types[arr[i]] + 1; 
                }
            }
            
            var result = types.OrderByDescending(t=>t.Value).ToList();

            return result.First().Key;
        }

    }
}
