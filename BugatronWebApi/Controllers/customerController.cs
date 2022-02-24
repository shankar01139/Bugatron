using BugatronWebApi.Model;
using BugatronWebApi.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;

namespace BugatronWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class customerController : Controller
    {
        private readonly customerRepository customerRepository;
        public customerController()
        {
            customerRepository = new customerRepository();
        }
        [HttpGet]
        [EnableCors("AllowOrigin")]
        public IEnumerable<customer_info> GetAll()
        {
            return customerRepository.GetAll();
        }

        [HttpGet("{id}")]
        public customer_info GetById(int id)
        {
            return customerRepository.GetById(id);
        }

        [HttpGet("{mail}/{password}")]
        [ApiExplorerSettings(IgnoreApi = true)]
        public IActionResult Login(string mail, string password)
        {
            return customerRepository.Login(mail, password);
        }

        [HttpPost]
        public void Post([FromBody] customer_info cust)
        {
            if (ModelState.IsValid)
            {
                customerRepository.DevAdd(cust);
            }
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] customer_info cust)
        {
            cust.customer_id = id;
            if (ModelState.IsValid)
            {
                customerRepository.Update(cust);
            }
        }

        [HttpPut("putPass /{mail}/{password}")]
        public void PutPass(string mail, string password)
        {
            customer_info cust = new customer_info();
            cust.customer_mail = mail;
            cust.customer_pass = password;
            if (ModelState.IsValid)
            {
                customerRepository.ResetPass(cust);
            }
        }

        [HttpDelete]
        public void Delete(int id)
        {
            customerRepository.Delete(id);
        }
    }
}
