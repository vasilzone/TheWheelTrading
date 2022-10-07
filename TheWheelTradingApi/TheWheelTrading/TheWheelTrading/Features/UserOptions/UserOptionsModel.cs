using Newtonsoft.Json.Converters;
using System.Text.Json.Serialization;
using TheWheelTrading.Enums;

namespace TheWheelTrading.Features.UserOptions
{
    public class UserOptionsModel
    {
        public int Id { get; set; }
        public string Ticker { get; set; }
        public DateTime OpenDate { get; set; }
        public DateTime ExpirationDate { get; set; }        
        public CallOrPut CallOrPut { get; set; }
        public BuyOrSell BuyOrSell { get; set; }
        public decimal StrikePrice { get; set; }
        public decimal Premium { get; set; }
        public decimal NumberOfContracts { get; set; }
        public decimal Fees { get; set; }
        public decimal Assigned { get; set; }
        public int DaysHeld => (ExpirationDate - OpenDate).Days;
        public decimal Profit => BuyOrSell == BuyOrSell.Sell ? 100 * NumberOfContracts * Premium - Fees : 100 * NumberOfContracts * -Premium - Fees;
        public decimal CashReserverd => BuyOrSell == BuyOrSell.Sell && CallOrPut == CallOrPut.Put ? StrikePrice * 100 * NumberOfContracts : 0;
        public decimal AnnualizedRoR => BuyOrSell == BuyOrSell.Sell && CallOrPut == CallOrPut.Put ? (Profit / CashReserverd) / DaysHeld * 365 :
            (BuyOrSell == BuyOrSell.Sell && CallOrPut == CallOrPut.Call ? (Profit / (100 * NumberOfContracts * StrikePrice)) / DaysHeld * 365 : 0);
        public decimal WeeklyRor => BuyOrSell == BuyOrSell.Sell && CallOrPut == CallOrPut.Put ? (Profit / CashReserverd) / 7 :
            (BuyOrSell == BuyOrSell.Sell && CallOrPut == CallOrPut.Call ? (Profit / (100 * NumberOfContracts * StrikePrice)) / 7 : 0);
    }
}
