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
    public class projectController : Controller
    {
        private readonly projectRepository projectRepository;
        public projectController()
        {
            projectRepository = new projectRepository();
        }
        [HttpGet]
        [EnableCors("AllowOrigin")]
        public IEnumerable<project_info> GetAll()
        {
            return projectRepository.GetAll();
        }
        [HttpGet("GetbyCustomer/{id}")]
        [EnableCors("AllowOrigin")]
        public IEnumerable<project_info> GetbyCustomer(int id)
        {
            return projectRepository.GetByCustomer(id);
        }
        [HttpGet("{id}")]
        public project_info GetById(int id)
        {
            return projectRepository.GetById(id);
        }

        [HttpPost]
        public void Post([FromBody] project_info proj)
        {
            if (ModelState.IsValid)
            {
                projectRepository.DevAdd(proj);
            }
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] project_info proj)
        {
            proj.project_id = id;
            if (ModelState.IsValid)
            {
                projectRepository.Update(proj);
            }
        }


        [HttpDelete]
        public void Delete(int id)
        {
            projectRepository.Delete(id);
        }

    }
}
