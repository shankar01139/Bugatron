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
    public class projectRepository
    {
        public IDbConnection Connection
        {
            get
            {
                dbConnection db = new dbConnection();
                return db.con;
            }
        }
        public void DevAdd(project_info proj)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sql = @"insert into project  (project_id,project_name,project_company,created,customer_id) values (@project_id,@project_name,@project_company,@created,@customer_id)";
                dbConnection.Open();
                dbConnection.Execute(sql, proj);
            }
        }
        public IEnumerable<project_info> GetAll()
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sql = "select project_id,project_name,project_company,p.created,c.customer_name as customer_id from project p join customer c on c.customer_id = p.customer_id";
                dbConnection.Open();
                return dbConnection.Query<project_info>(sql);
            }
        }
        public project_info GetById(int id)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sql = "select * from project where project_id=@id";
                dbConnection.Open();
                return dbConnection.Query<project_info>(sql, new { Id = id }).FirstOrDefault();
            }
        }

        public void Update(project_info proj)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sql = "update project set project_id=@project_id,project_name=@project_name,project_company=@project_company,created=@created,customer_id=@customer_id where project_id = @project_id ";
                dbConnection.Open();
                dbConnection.Execute(sql, proj);
            }
        }
 
        public void Delete(int id)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sql = @"delete from project where project_id=@id ";
                dbConnection.Open();
                dbConnection.Execute(sql, new { Id = id });
            }
        }
    }
}
