using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Portal.Smsis.DAL.Entities
{
    [Table("numbering_by_region_ef")]
    public class NumberingByRegionEF
    {
        [Key]
        [Column("ID")]
        public int Id { get; set; }

        [Column("OBJECT", TypeName = "nvarchar(256)")]
        public string Object { get; set; }

        [Column("CONNECT_OVER", TypeName = "nvarchar(256)")]
        public string ConnectionOver { get; set; }

        [Column("RANGE", TypeName = "text")]
        public string Range { get; set; }

        [Column("MOUNTED_CAPACITY", TypeName = "nvarchar(256)")]
        public string MountedCapacity { get; set; }

        [Column("NOTES", TypeName = "text")]
        public string Notes { get; set; }
    }
}
