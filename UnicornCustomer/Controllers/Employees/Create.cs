using Microsoft.AspNetCore.Mvc;
using System.Linq;
using UnicornCustomer.Models;

namespace UnicornCustomer.Controllers.Employees
{
    public class Create : BaseController
    {
        private int GetNextId()
        {
            var employees = ReadEmployeesFromFile();
            int maxId = employees.Count > 0 ? employees.Max(e => e.Id) : 0;
            return maxId + 1;
        }

        [HttpPost("/api/employees")]
        public ActionResult<EmployeeModel> CreateEmployee([FromBody] EmployeeModel newEmployee)
        {
            if (newEmployee == null)
            {
                return BadRequest();
            }

            int newId = GetNextId();
            newEmployee.Id = newId;

            var employees = ReadEmployeesFromFile();
            employees.Add(newEmployee);

            WriteEmployeesToFile(employees);

            return CreatedAtAction(nameof(Get.GetEmployee), new { id = newEmployee.Id }, newEmployee);
        }
    }
}
