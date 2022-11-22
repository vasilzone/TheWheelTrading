using System;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.Extensions.Logging;
using TheWheelTrading.Features.UserOptions;

namespace FillTickersDailyData
{
    public class Function1
    {
        private GetTickersQuery _getTickersQuery;
        public Function1()
        {
            _getTickersQuery = new GetTickersQuery();
        }

        [FunctionName("Function1")]
        //public async Task Run([TimerTrigger("0 0 8 * * *")]TimerInfo myTimer, ILogger log)
        public async Task Run([TimerTrigger("*/30 * * * * *")] TimerInfo myTimer, ILogger log)
        {
        
            log.LogInformation($"C# Timer trigger function executed at: {DateTime.Now}");

            using var client = new HttpClient();            

            var symbols = await _getTickersQuery.GetOptions();

            foreach (var symbol in symbols) {

                var url = $"https://api.nasdaq.com/api/analyst/{symbol.Trim()}/earnings-date";
                var content = await client.GetStringAsync(url);
                var startIndex = content.IndexOf("earnings on");
                var date = content.Substring(startIndex + 12, 11);                
            }
            
        }
    }
}
