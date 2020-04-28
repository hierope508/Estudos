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
            var cars = ProcessCarFile("fuel.csv");
            var manufactorers = ProcessManuFactorerFile("manufacturers.csv");

            //Select anonimous type
            //var cars = query.OrderByDescending(c => c.Combined)
            //                .ThenBy(c => c.Name)
            //                .Select(c =>
            //                {
            //                    return new
            //                    {
            //                        c.Manufacturer
            //                        ,c.Name
            //                        ,c.Combined
            //                    };
            //                });

            var query = from car in cars
                        join manufacturer in manufactorers
                        //Criando um novo objeto para poder comparar duas variaveis ao mesmo tempo
                         on new { car.Manufacturer, car.Year } equals new { Manufacturer = manufacturer.Name, manufacturer.Year }
                        orderby car.Combined descending, car.Name ascending
                        select new
                        {
                            car.Manufacturer,
                            car.Name,
                            car.Combined
                        };

            var query2 = cars.Join(
                            manufactorers,
                            c => new { c.Manufacturer, c.Year },
                            m => new { Manufacturer = m.Name, m.Year },
                            (c, m) =>
                            {
                                return new
                                {
                                    m.Headquartes,
                                    c.Name,
                                    c.Combined
                                };

                            })
                            .OrderByDescending(c => c.Combined)
                            .ThenBy(c => c.Name);

            foreach (var car in query2.Take(10))
            {
                Console.WriteLine($"{car.Name } : {car.Combined}");
            }

            Console.ReadKey();
        }

        private static IEnumerable<Car> ProcessCarFile(string path)
        {
            return File.ReadAllLines(path)
                .Skip(1)
                .Where(l => l.Length > 1)
                .ToCar();

            //var query = from cars in File.ReadAllLines(path).Skip(1)
            //            where cars.Length > 1
            //            select Car.ParseFromCSV(cars);

            //return query.ToList();
        }

        private static IEnumerable<Manufacturer> ProcessManuFactorerFile(string path)
        {
            return File.ReadAllLines(path)
                .Skip(1)
                .Where(l => l.Length > 1)
                .Select(
                    l =>
                    {
                        var columns = l.Split(',');
                        return new Manufacturer
                        {
                            Name = columns[0],
                            Headquartes = columns[1],
                            Year = int.Parse(columns[2])
                        };
                    }

                );
        }

    }
}
