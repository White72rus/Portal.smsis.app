using Microsoft.EntityFrameworkCore;
using Portal.Smsis.DAL.Entities;
using Portal.Smsis.DAL.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Portal.Smsis.DAL.Implementation
{
    public class NumberingByRegionEFRepository : INumberingByRegionEFRepository
    {
        public List<NumberingByRegionEF> GetAllData()
        {
            List<NumberingByRegionEF> result;

            using (var context = new DataBaseContext())
            {
                result = context.NumberingByRegionEF.ToList();
            }
            return result;
        }

        public List<NumberingByRegionEF> FindByColumns(string findString, string[] columns, string table)
        {
            StringBuilder @string = new StringBuilder();

            for (int i = 0; i < columns.Length; i++)
            {
                var item = columns[i];

                @string.Append($"{item} LIKE '%{findString}%' ");

                if (i + 1 < columns.Length)
                {
                    @string.Append("OR ");
                }
            }

            List<NumberingByRegionEF> result;

            using (var context = new DataBaseContext())
            {
                result = context.NumberingByRegionEF.FromSqlRaw($"SELECT * FROM {table} WHERE " + @string.ToString() + ";").ToList();
            }
            return result;
        }
    }
}
