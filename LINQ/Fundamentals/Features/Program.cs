using System;
using System.Collections.Generic;
using System.Linq;

namespace Features
{
    class Program
    {
        static void Main(string[] args)
        {
            var developers = new Employee[]
            {
                new Employee {Id = 1, Name = "Iran"},
                new Employee {Id = 2, Name = "Saldanha" }
            };

            var sales = new List<Employee>()
            {
                new Employee {Id = 3, Name = "Alex"}
            };

            //var query = developers.Where(d => d.Name.StartsWith("S")).OrderBy(d => d.Name);
            var query = developers.Where(d => d.Name.Length >= 4).OrderBy(d => d.Name);

            var query2 =
                from d in developers
                where d.Name.Length >= 4
                orderby d.Name
                select d;

            foreach (var item in query)
            {
                Console.WriteLine(item.Name);
            }

            foreach (var item in query2)
            {
                Console.WriteLine(item.Name);
            }

            Console.ReadKey();
        }

        private static bool StartsWithS(Employee employee)
        {
            return employee.Name.StartsWith("S");
        }
    }
}
