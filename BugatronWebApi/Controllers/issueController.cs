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
        [HttpGet]
        [EnableCors("AllowOrigin")]
        public IEnumerable<issue_info> GetAll()
        {
            return issueRepository.GetAll();
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


        [HttpDelete]
        public void Delete(int id)
        {
            issueRepository.Delete(id);
        }

    }
}
