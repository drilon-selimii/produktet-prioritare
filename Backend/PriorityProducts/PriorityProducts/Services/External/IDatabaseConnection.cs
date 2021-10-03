using System.Data;

namespace PriorityProducts.Services.External
{
    public interface IDatabaseConnection
    {
        IDbConnection Connection { get; }
    }
}
