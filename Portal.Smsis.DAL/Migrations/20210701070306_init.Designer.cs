﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Portal.Smsis.DAL;

namespace Portal.Smsis.DAL.Migrations
{
    [DbContext(typeof(DataBaseContext))]
    [Migration("20210701070306_init")]
    partial class init
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("Portal.Smsis.DAL.Entities.NumberingByRegionEF", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID")
                        .HasColumnType("int");

                    b.Property<string>("ConnectionOver")
                        .HasColumnName("CONNECT_OVER")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("MountedCapacity")
                        .HasColumnName("MOUNTED_CAPACITY")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("Notes")
                        .HasColumnName("NOTES")
                        .HasColumnType("text");

                    b.Property<string>("Object")
                        .HasColumnName("OBJECT")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("Range")
                        .HasColumnName("RANGE")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("numbering_by_region_ef");
                });
#pragma warning restore 612, 618
        }
    }
}
