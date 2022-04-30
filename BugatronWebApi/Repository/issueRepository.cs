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
        public IEnumerable<issue_info> GetAll()
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sql = "select i.issue_id,i.issue_name,i.issue_desc,p.project_name as project_id,i.issue_status,i.created,i.updated,d.developer_name as assigned_to,i.action from issue i inner join project p on i.project_id = p.project_id inner join developer d on i.assigned_to = d.developer_id";
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
        public IEnumerable<issue_info> GetResolved()
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sql = "select i.issue_id,i.issue_name,i.issue_desc,p.project_name as project_id,i.issue_status,i.created,i.updated,d.developer_name as assigned_to,i.action from issue i inner join project p on i.project_id = p.project_id inner join developer d on i.assigned_to = d.developer_id where issue_status = 'R'";
                dbConnection.Open();
                return dbConnection.Query<issue_info>(sql);
            }
        }

        public IEnumerable<issue_info> GetUnassigned()
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
