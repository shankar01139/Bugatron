using BugatronWebApi.Model;
using BugatronWebApi.Repository;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BugatronWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class issueController : Controller
    {
        private readonly issueRepository issueRepository;
        public issueController()
        {
            issueRepository = new issueRepository();
        }
        [HttpGet("GetAll/{id}")]
        [EnableCors("AllowOrigin")]
        public IEnumerable<issue_info> GetAll(int id)
        {
            return issueRepository.GetAll(id);
        }

        [HttpGet("GetUnassigned/{id}")]
        [EnableCors("AllowOrigin")]
        public IEnumerable<issue_info> GetUnassigned(int id)
        {
            return issueRepository.GetUnassigned(id);
        }
        [HttpGet("GetUnassignedIssues")]
        [EnableCors("AllowOrigin")]
        public IEnumerable<issue_info> GetUnassignedIssues()
        {
            return issueRepository.GetUnassignedIssues();
        }
        [HttpGet("GetResolved/{id}")]
        [EnableCors("AllowOrigin")]
        public IEnumerable<issue_info> GetResolved(int id)
        {
            return issueRepository.GetResolved(id);
        }
        [HttpGet("GetResolvedIssues")]
        [EnableCors("AllowOrigin")]
        public IEnumerable<issue_info> Ge0tResolvedIssues()
        {
            return issueRepository.GetResolvedIssues();
        }
        [HttpGet("GetAssigned/{id}")]
        [EnableCors("AllowOrigin")]
        public IEnumerable<issue_info> GetAssignedforme(int id)
        {
            return issueRepository.GetAssignedforme(id);
        }
        [HttpGet("GetIssueCount/{date}")]
        [EnableCors("AllowOrigin")]
        public int GetIssueCount(string date)
        {
            return issueRepository.Getissuecount(date);
        }

        [HttpGet("GetCustIssueCount/{date}/{id}")]
        [EnableCors("AllowOrigin")]
        public int GetCustIssueCount(string date,int id)
        {
            return issueRepository.GetCustomerissuecount(date,id);
        }

        [HttpGet("GetAll")]
        [EnableCors("AllowOrigin")]
        public IEnumerable<issue_info> GetAllIssue()
        {
            return issueRepository.GetAllIssue();
        }
        [HttpGet("{id}")]
        public issue_info GetById(int id)
        {
            return issueRepository.GetById(id);
        }

        [HttpPost]
        public void Post([FromBody] issue_info issue)
        {
            if (ModelState.IsValid)
            {
                issueRepository.DevAdd(issue);
            }
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] issue_info issue)
        {
            issue.issue_id = id;
            if (ModelState.IsValid)
            {
                issueRepository.Update(issue);
            }
        }
        [HttpPut("Action/{id}")]
        public void UpdateAction(int id, [FromBody] issue_info issue)
        {
            issue.issue_id = id;
            if (ModelState.IsValid)
            {
                issueRepository.UpdateAction(issue);
            }
        }


        [HttpDelete]
        public void Delete(int id)
        {
            issueRepository.Delete(id);
        }

    }
}
