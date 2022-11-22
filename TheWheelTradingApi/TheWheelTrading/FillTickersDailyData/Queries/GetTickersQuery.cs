using Dapper;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace TheWheelTrading.Features.UserOptions
{
    public class GetTickersQuery
    {
        private string ConnectionString { set; get; }
        public GetTickersQuery()
        {
            ConnectionString = "Server=.\\SqlExpress;Database=TheWheelTrading;User Id=sa;Password=New_Passw0rd;";
        }


        private string Sql = @"SELECT [Ticker]      
                FROM [TheWheelTrading].[dbo].[TickerSymbols]";

        public async Task<IEnumerable<string>> GetOptions()
        {
            using var con = new SqlConnection(ConnectionString);
            con.Open();
            var result = await con.QueryAsync<string>(Sql);

            return result;
        }
    }
}
