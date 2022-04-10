using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using Microsoft.Extensions.Configuration;
using BugatronWebApi.Model;
using Dapper;

namespace BugatronWebApi.Repository
{
    public class developerRepository
    {
        public IDbConnection Connection
        {
            get
            {
                dbConnection db = new dbConnection();
                return db.con;
            }
        }
        public void DevAdd(developer_info dev)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sql = @"insert into developer (developer_id,developer_name,developer_email,developer_password,developer_pos,developer_contact,created) values (@developer_id,@developer_name,@developer_email,@developer_password,@developer_pos,@developer_contact,@created)";
                dbConnection.Open();
                dbConnection.Execute(sql, dev);
            }
        }
        public IEnumerable<developer_info> GetAll()
        {
            using(IDbConnection dbConnection = Connection)
            {
                string sql = "select * from developer";
                dbConnection.Open();
                return dbConnection.Query<developer_info>(sql);
            }
        }
        public developer_info GetById(int id)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sql = "select * from developer where developer_id=@id";
                dbConnection.Open();
                return dbConnection.Query<developer_info>(sql,new { Id = id }).FirstOrDefault();
            }
        }
        public developer_info Login(string email,string password)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sql = "select * from developer where developer_email=@email && developer_password=@password";
                dbConnection.Open();
                return dbConnection.Query<developer_info>(sql, new { Email  = email,Password = password }).FirstOrDefault();
            }
        }      

        public void Update(developer_info dev)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sql = "update developer set developer_name = @developer_name,developer_email = @developer_email,developer_password = @developer_password,developer_pos = @developer_pos,developer_contact = @developer_contact,created = @created where developer_id = @developer_id ";
                dbConnection.Open();
                dbConnection.Execute(sql,dev);
            }
        }
        public void ResetPass(developer_info dev)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sql = "update developer set developer_password = @developer_password where developer_email = @developer_email ";
                dbConnection.Open();
                dbConnection.Execute(sql, dev);
            }
        }
        public void Delete(int id)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sql = @"delete from developer where developer_id=@id ";
                dbConnection.Open();
                dbConnection.Execute(sql,new {Id = id });
            }
        }
    }
}
