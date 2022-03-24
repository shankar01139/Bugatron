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
    public class companyController : Controller
    {
        private readonly companyRepository companyRepository;
        public companyController()
        {
            companyRepository = new companyRepository();
        }
        [HttpGet]
        [EnableCors("AllowOrigin")]
        public IEnumerable<company_info> GetAll()
        {
            return companyRepository.GetAll();
        }

        [HttpGet("{id}")]
        public company_info GetById(int id)
        {
            return companyRepository.GetById(id);
        }

        [HttpPost]
        public void Post([FromBody] company_info comp)
        {
            if (ModelState.IsValid)
            {
                companyRepository.DevAdd(comp);
            }
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] company_info comp)
        {
            comp.company_id = id;
            if (ModelState.IsValid)
            {
                companyRepository.Update(comp);
            }
        }


        [HttpDelete]
        public void Delete(int id)
        {
            companyRepository.Delete(id);
        }

    }
}
