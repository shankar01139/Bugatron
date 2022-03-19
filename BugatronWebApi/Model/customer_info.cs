using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BugatronWebApi.Model
{
    public class customer_info
    {
        [Key]
        public int customer_id { get; set; }
        public string customer_name { get; set; }
        public string company_name { get; set; }
        public string customer_pass { get; set; }
        public string customer_contact { get; set; }
        public string  customer_mail { get; set; }
        public DateTime created { get; set; }
        public char customer_stat { get; set; }

    }
}
