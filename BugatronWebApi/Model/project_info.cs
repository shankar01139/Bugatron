using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BugatronWebApi.Model
{
    public class project_info
    {
        [Key]
        public int project_id { get; set; }
        public string project_name { get; set; }
        public string project_company { get; set; }
        public DateTime created { get; set; }
        public string customer_id { get; set; }

    }
}
