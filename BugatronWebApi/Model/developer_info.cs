using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BugatronWebApi.Model
{
    public class developer_info
    {
        [Key]
        public int developer_id { get; set; }
        public string developer_name { get; set; }
        public string developer_email { get; set; }
        public string developer_password { get; set; }
        public string developer_pos { get; set; }
        public string developer_contact { get; set; }
        public DateTime created { get; set; }
    }
}
