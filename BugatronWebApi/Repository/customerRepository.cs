using BugatronWebApi.Model;
using Dapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace BugatronWebApi.Repository
{
    public class customerRepository
    {
        public IDbConnection Connection
        {
            get
            {
                dbConnection db = new dbConnection();
                return db.con;
            }
        }
        public void DevAdd(customer_info cust)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sql = @"insert into customer  (customer_id,customer_name,company_name,customer_pass,customer_contact,created,customer_mail,customer_stat) values (@customer_id,@customer_name,@company_name,@customer_pass,@customer_contact,@created,@customer_mail,@customer_stat)";
                dbConnection.Open();
                dbConnection.Execute(sql, cust);
            }
        }
        public IEnumerable<customer_info> GetAll()
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sql = "select * from customer";
                dbConnection.Open();
                return dbConnection.Query<customer_info>(sql);
            }
        }
        public IEnumerable<customer_info> GetBycomp(string name)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sql = "select * from customer where company_name=@name";
                dbConnection.Open();
                return dbConnection.Query<customer_info>(sql, new { Name = name });
            }
        }
        public customer_info GetById(int id)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sql = "select * from customer where customer_id=@id";
                dbConnection.Open();
                return dbConnection.Query<customer_info>(sql, new { Id = id }).FirstOrDefault();
            }
        }
        public customer_info Login(string email, string password)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sql = "select * from customer where customer_mail=@email && customer_pass=@password";
                dbConnection.Open();
                return dbConnection.Query<customer_info>(sql, new { Email = email, Password = password }).FirstOrDefault();
            }
        }

        public void Update(customer_info cust)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sql = "update customer set customer_id=@customer_id,customer_name=@customer_name,company_name=@company_name,customer_pass=@customer_pass,customer_contact=@customer_contact,created=@created,customer_mail=@customer_mail,customer_stat = @customer_stat where customer_id = @customer_id ";
                dbConnection.Open();
                dbConnection.Execute(sql, cust);
            }
        }
        public void ResetPass(customer_info cust)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sql = "update customer set customer_id=@customer_id,customer_name=@customer_name,company_name=@company_name,customer_pass=@customer_pass,customer_contact=@customer_contact,created=@created,customer_mail=@customer_mail,customer_stat = @customer_stat where customer_id = @customer_id ";
                dbConnection.Open();
                dbConnection.Execute(sql, cust);
            }
        }
        public void Delete(int id)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sql = @"delete from customer where customer_id=@id ";
                dbConnection.Open();
                dbConnection.Execute(sql, new { Id = id });
            }
        }
    }
}
