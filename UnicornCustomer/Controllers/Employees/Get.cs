using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;
using UnicornCustomer.Models;

namespace UnicornCustomer.Controllers.Employees
{
    [ApiController]
    public class Get : ControllerBase
    {
        private readonly string _filePath = "Data/employees.json";

        private List<EmployeeModel> ReadEmployeesFromFile()
        {
            var employees = new List<EmployeeModel>();
            using (StreamReader r = new StreamReader(_filePath))
            {
                string json = r.ReadToEnd();
                employees = JsonConvert.DeserializeObject<List<EmployeeModel>>(json);
            }
            return employees;
        }

        [HttpGet("/api/employees/{id}")]
        public ActionResult<EmployeeModel> GetEmployee(int id)
        {
            var employees = ReadEmployeesFromFile();
            var employee = employees.Find(s => s.Id == id);
            if (employee == null)
            {
                return NotFound();
            }
            return employee;
        }

    }
}
