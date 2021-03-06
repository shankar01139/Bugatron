using BugatronWebApi.Model;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace BugatronWebApi.Repository
{
    public class issueRepository
    {
        public IDbConnection Connection
        {
            get
            {
                dbConnection db = new dbConnection();
                return db.con;
            }
        }
        public void DevAdd(issue_info issue)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sql = @"insert into issue  (issue_id,issue_name,issue_desc,project_id,issue_status,created,updated,assigned_to,action) values (@issue_id,@issue_name,@issue_desc,@project_id,@issue_status,@created,@updated,@assigned_to,@action)";
                dbConnection.Open();
                dbConnection.Execute(sql, issue);
            }
        }
        public IEnumerable<issue_info> GetAll(int id)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sql = "select i.issue_id,i.issue_name,i.issue_desc,p.project_name as project_id,i.issue_status,i.created,i.updated,d.developer_name as assigned_to,i.action from issue i inner join project p on i.project_id = p.project_id inner join developer d on i.assigned_to = d.developer_id where p.customer_id = @id";
                dbConnection.Open();
                return dbConnection.Query<issue_info>(sql,new{Id=id});
            }
        }
        public IEnumerable<issue_info> GetAllIssue()
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sql = "select i.issue_id,i.issue_name,i.issue_desc,p.project_name as project_id,i.issue_status,i.created,i.updated,assigned_to,i.action from issue i inner join project p on i.project_id = p.project_id";
                dbConnection.Open();
                return dbConnection.Query<issue_info>(sql);
            }
        }
        public IEnumerable<issue_info> GetAssignedforme(int id)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sql = "select i.issue_id,i.issue_name,i.issue_desc,p.project_name as project_id,i.issue_status,i.created,i.updated from issue i inner join project p on i.project_id = p.project_id where assigned_to = @id ";
                dbConnection.Open();
                return dbConnection.Query<issue_info>(sql, new { Id = id });
            }
        }

        public int Getissuecount(string date)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sql = "select * from issue where DAY(created) = DAY(@date)";
                dbConnection.Open();
                var res = dbConnection.Query(sql,new { Date = date });
                return res.Count();
            }
        }
        public int GetCustomerissuecount(string date,int id)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sql = "select i.issue_name from issue i inner join project p on i.project_id = p.project_id where p.customer_id = @id AND DAY(i.created) = DAY(@date) ";
                dbConnection.Open();
                var res = dbConnection.Query(sql, new { Date = date,Id = id });
                return res.Count();
            }
        }
        public int GetDevIssuecount(string date, int id)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sql = "select i.issue_name from issue i inner join developer d on i.assigned_to = d.developer_id where i.assigned_to = @id AND DAY(i.created) = DAY(@date) ";
                dbConnection.Open();
                var res = dbConnection.Query(sql, new { Date = date, Id = id });
                return res.Count();
            }
        }

        public IEnumerable<issue_info> GetResolved(int id)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sql = "select i.issue_id,i.issue_name,i.issue_desc,p.project_name as project_id,i.issue_status,i.created,i.updated,d.developer_name as assigned_to,i.action from issue i inner join project p on i.project_id = p.project_id inner join developer d on i.assigned_to = d.developer_id where issue_status = 'R' or issue_status = 'C' and p.customer_id = @id";
                dbConnection.Open();
                return dbConnection.Query<issue_info>(sql,new { Id = id });
            }
        }

        public IEnumerable<issue_info> GetResolvedIssues()
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sql = "select i.issue_id,i.issue_name,i.issue_desc,p.project_name as project_id,i.issue_status,i.created,i.updated,d.developer_name as assigned_to,i.action from issue i inner join project p on i.project_id = p.project_id inner join developer d on i.assigned_to = d.developer_id where issue_status = 'R' or issue_status = 'C'";
                dbConnection.Open();
                return dbConnection.Query<issue_info>(sql);
            }
        }
        public IEnumerable<issue_info> GetUnassigned(int id)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sql = "select i.issue_id,i.issue_name,i.issue_desc,p.project_name as project_id,i.issue_status,i.created,i.updated,assigned_to,i.action from issue i inner join project p on i.project_id = p.project_id where assigned_to = 0 and p.customer_id = @id";
                dbConnection.Open();
                return dbConnection.Query<issue_info>(sql,new { Id = id });
            }
        }
        public IEnumerable<issue_info> GetUnassignedIssues()
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sql = "select i.issue_id,i.issue_name,i.issue_desc,p.project_name as project_id,i.issue_status,i.created,i.updated,assigned_to,i.action from issue i inner join project p on i.project_id = p.project_id where assigned_to = 0";
                dbConnection.Open();
                return dbConnection.Query<issue_info>(sql);
            }
        }
        public issue_info GetById(int id)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sql = "select * from issue where issue_id=@id";
                dbConnection.Open();
                return dbConnection.Query<issue_info>(sql, new { Id = id }).FirstOrDefault();
            }
        }

        public void Update(issue_info issue)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sql = "update issue set issue_id=@issue_id,issue_name=@issue_name,issue_desc=@issue_desc,project_id=@project_id,issue_status=@issue_status,created=@created,updated=@updated,assigned_to=@assigned_to,action=@action where issue_id = @issue_id ";
                dbConnection.Open();
                dbConnection.Execute(sql, issue);
            }
        }
        public void UpdateAction(issue_info issue)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sql = "update issue set issue_status=@issue_status,updated=@updated,action=@action where issue_id = @issue_id ";
                dbConnection.Open();
                dbConnection.Execute(sql, issue);
            }
        }
        public void Delete(int id)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sql = @"delete from issue where issue_id=@id ";
                dbConnection.Open();
                dbConnection.Execute(sql, new { Id = id });
            }
        }
    }
}
