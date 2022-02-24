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
                string sql = @"insert into issue  (issue_id,issue_name,issue_desc,project_id,issue_status,created,updated) values (@issue_id,@issue_name,@issue_desc,@project_id,@issue_status,@created,@updated)";
                dbConnection.Open();
                dbConnection.Execute(sql, issue);
            }
        }
        public IEnumerable<issue_info> GetAll()
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sql = "select * from issue";
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
                string sql = "update issue set issue_id=@issue_id,issue_name=@issue_name,issue_desc=@issue_desc,project_id=@project_id,issue_status=@issue_status,created=@created,updated=@updated where issue_id = @issue_id ";
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
