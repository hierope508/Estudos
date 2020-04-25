using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cars
{
    class Program
    {
        static void Main(string[] args)
        {
            var query = ProcessFile("fuel.csv");
            var cars = query.OrderByDescending(c => c.Combined)
                            .ThenBy(c=>c.Name);

            foreach (var car in cars.Take(10))
            {
                Console.WriteLine($"{car.Name } : {car.Combined}");
            }

            Console.ReadKey();
        }

        private static List<Car> ProcessFile(string path)
        {
            //return File.ReadAllLines(path)
            //    .Skip(1)
            //    .Where(l => l.Length > 1)
            //    .Select(l=> Car.ParseFromCSV(l))
            //    .ToList();
            var query = from cars in File.ReadAllLines(path).Skip(1)
                        where cars.Length > 1
                        select Car.ParseFromCSV(cars);
            
            return query.ToList();
        }
    }
}
