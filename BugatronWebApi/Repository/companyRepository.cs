using BugatronWebApi.Model;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace BugatronWebApi.Repository
{
    public class companyRepository
    {
        public IDbConnection Connection
        {
            get
            {
                dbConnection db = new dbConnection();
                return db.con;
            }
        }
        public void DevAdd(company_info comp)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sql = @"insert into company  (company_id,comapny_name,company_stat,created,company_address,city,state,country,zip) values (@company_id,@comapny_name,@company_stat,@created,@company_address,@city,@state,@country,@zip)";
                dbConnection.Open();
                dbConnection.Execute(sql, comp);
            }
        }
        public IEnumerable<company_info> GetAll()
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sql = "select * from company";
                dbConnection.Open();
                return dbConnection.Query<company_info>(sql);
            }
        }
        public company_info GetById(int id)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sql = "select * from company where company_id=@id";
                dbConnection.Open();
                return dbConnection.Query<company_info>(sql, new { Id = id }).FirstOrDefault();
            }
        }

        public void Update(company_info comp)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sql = "update company set company_id =@company_id,comapny_name=@comapny_name,company_stat=@company_stat,created=@created,company_address=@company_address,city=@city,state=@state,country=@country,zip=@zip where company_id = @company_id ";
                dbConnection.Open();
                dbConnection.Execute(sql, comp);
            }
        }

        public void Delete(int id)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sql = @"delete from company where company_id=@id ";
                dbConnection.Open();
                dbConnection.Execute(sql, new { Id = id });
            }
        }

    }
}
