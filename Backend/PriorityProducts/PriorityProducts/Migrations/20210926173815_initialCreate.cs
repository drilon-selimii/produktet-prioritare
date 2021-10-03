using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PriorityProducts.Migrations
{
    public partial class initialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "SevenDays",
                columns: table => new
                {
                    Product_Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Product_Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Last_Update = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Remaining_Quantity = table.Column<int>(type: "int", nullable: false),
                    Sales_Amount = table.Column<int>(type: "int", nullable: false),
                    Product_Price = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Coefficient = table.Column<decimal>(type: "decimal(18,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SevenDays", x => x.Product_Id);
                });

            migrationBuilder.CreateTable(
                name: "ThirtyDays",
                columns: table => new
                {
                    Product_Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Product_Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Last_Update = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Remaining_Quantity = table.Column<int>(type: "int", nullable: false),
                    Sales_Amount = table.Column<int>(type: "int", nullable: false),
                    Product_Price = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Coefficient = table.Column<decimal>(type: "decimal(18,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ThirtyDays", x => x.Product_Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SevenDays");

            migrationBuilder.DropTable(
                name: "ThirtyDays");
        }
    }
}
