using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace BugatronWebApi
{
    public class dbConnection
    {
        public IDbConnection con;
        public dbConnection()
        {
            var configuration = GetConfiguration();
            con = new MySqlConnection(configuration.GetSection("ConnectionStrings").GetSection("Default").Value);
        }
        public IConfigurationRoot GetConfiguration()
        {
            var builder = new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory()).AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);
            return builder.Build();
        }
    }
}
