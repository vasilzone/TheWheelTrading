using System.Data.SqlClient;
using Dapper;
using TheWheelTrading.Infrastructure;

namespace TheWheelTrading.Features.UserOptions
{
    public class GetOptionsQuery
    {
        private string ConnectionString { set; get; }
        public GetOptionsQuery(Microsoft.Extensions.Options.IOptions<DBConfig> DBConfig)
        {
            ConnectionString = DBConfig.Value.TheWheelTrading;
        }


        private string Sql = @"SELECT uo.[Id]
      ,ts.[Ticker]
      ,[OpenDate]
      ,[ExpirationDate]
      ,[CallOrPut]
      ,[BuyOrSell]
      ,[StrikePrice]
      ,[Premium]
      ,[NumberOfContracts]
      ,[Fees]
      ,[Assigned]
       FROM [TheWheelTrading].[dbo].[UserOptions] uo
       JOIN TickerSymbols ts ON uo.TickerId = ts.Id";

        public async Task<IEnumerable<UserOptionsModel>> GetOptions()
        {
            using var con = new SqlConnection(ConnectionString);
            con.Open();

            var result =  await con.QueryAsync<UserOptionsModel>(Sql);

            return result;
        }
    }
}
