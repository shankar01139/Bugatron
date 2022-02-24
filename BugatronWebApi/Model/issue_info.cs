using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BugatronWebApi.Model
{
    public class issue_info
    {
        public int issue_id { get; set; }
        public string issue_name { get; set; }
        public string issue_desc { get; set; }
        public int project_id { get; set; }
        public char issue_status { get; set; } = 'Y';
        public DateTime created { get; set; }
        public DateTime updated { get; set; }
        

    }
}
