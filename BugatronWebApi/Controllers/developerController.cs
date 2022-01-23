using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using BugatronWebApi.Repository;
using BugatronWebApi.Model;

namespace BugatronWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class developerController : Controller
    {
        private readonly developerRepository developerRepository;
        public developerController()
        {
            developerRepository = new developerRepository();
        }
        [HttpGet]
        [EnableCors("AllowOrigin")]
        public IEnumerable<developer_info> GetAll()
        {
            return developerRepository.GetAll();
        }

        [HttpGet("{id}")]
        public developer_info GetById(int id)
        {
            return developerRepository.GetById(id);
        }

        [HttpGet("{mail}/{password}")]
        [ApiExplorerSettings(IgnoreApi = true)]
        public IActionResult Login(string mail, string password)
        {
            return developerRepository.Login(mail, password);
        }

        [HttpPost]
        public void Post([FromBody] developer_info dev)
        {
            if (ModelState.IsValid)
            {
                developerRepository.DevAdd(dev);
            }
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] developer_info dev)
        {
            dev.developer_id = id;
            if (ModelState.IsValid)
            {
                developerRepository.Update(dev);
            }
        }

        [HttpPut("putPass /{mail}/{password}")]
        public void PutPass(string mail,string password)
        {
            developer_info dev = new developer_info();
            dev.developer_email = mail;
            dev.developer_password = password;
            if (ModelState.IsValid)
            {
                developerRepository.ResetPass(dev);
            }
        }

        [HttpDelete]
        public void Delete(int id)
        {
            developerRepository.Delete(id);
        }
    }
}

