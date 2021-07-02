
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Portal.Smsis.DAL.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "numbering_by_region_ef",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    OBJECT = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    CONNECT_OVER = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    RANGE = table.Column<string>(type: "text", nullable: true),
                    MOUNTED_CAPACITY = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    NOTES = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_numbering_by_region_ef", x => x.ID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "numbering_by_region_ef");
        }
    }
}
