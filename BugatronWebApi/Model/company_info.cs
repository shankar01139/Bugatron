using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BugatronWebApi.Model
{
    public class company_info
    {
        public int company_id { get; set; }

        public string comapny_name { get; set; }
        public char company_stat { get; set; }

        public DateTime created { get; set; }
        public string company_address { get; set; }

        public string city { get; set; }
        public string state { get; set; }
        public string country { get; set; }
        public string zip { get; set; }
    }
}
