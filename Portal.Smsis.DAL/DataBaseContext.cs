using Microsoft.EntityFrameworkCore;
using Portal.Smsis.DAL.Entities;
using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Reflection;

namespace Portal.Smsis.DAL
{
    public class DataBaseContext : DbContext
    {
        public DbSet<NumberingByRegionEF> NumberingByRegionEF { get; set; }

        public DataBaseContext()
        {
            Database.EnsureCreated();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql(AppSettings.ConnectionString,
                mySqlOptionsAction: sqlOption => {
                    sqlOption.MigrationsAssembly(Assembly.GetExecutingAssembly().GetName().Name);
                    sqlOption.EnableRetryOnFailure(maxRetryCount: 5, maxRetryDelay: TimeSpan.FromSeconds(30), errorNumbersToAdd: null);
                });
            optionsBuilder?.EnableSensitiveDataLogging();
        }
    }
}
