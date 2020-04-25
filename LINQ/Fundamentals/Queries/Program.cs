using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Queries
{
    class Program
    {
        static void Main(string[] args)
        {
            var movies = new List<Movie>
            {
                new Movie {Title = "Dark Knight", Rating = 9, Year = 2008 },
                new Movie {Title = "Memento", Rating = 8.4f, Year = 2000 },
                new Movie {Title = "Dark Knight Rises", Rating = 8.5f, Year = 2012 },
                new Movie {Title = "Joker", Rating = 9, Year = 2019 },
                new Movie {Title = "Rear Window", Rating = 8.4f, Year = 1954 }
            };

            var query = movies.Filter(m => m.Year > 2000);
            foreach (var movie in query)
            {
                Console.WriteLine(movie.Title);
            }

            var query2 = MyLinq.Random().Where(d => d > 0.5).Take(5);

            foreach (var item in query2)
            {
                Console.WriteLine(item);
            }

            Console.ReadKey();
        }
    }
}
