using Microsoft.AspNetCore.Mvc;
using UnicornCustomer.Models;
using System.Linq;

namespace UnicornCustomer.Controllers.Employees
{
    public class Update : BaseController
    {
        [HttpPut("/api/employees/{id}")]
        public ActionResult UpdateEmployee(int id, [FromBody] EmployeeModel updatedEmployee)
        {
            if (updatedEmployee == null || updatedEmployee.Id != id)
            {
                return BadRequest();
            }

            var employees = ReadEmployeesFromFile();
            var existingEmployee = employees.FirstOrDefault(e => e.Id == id);
            if (existingEmployee == null)
            {
                return NotFound();
            }

            // Update employee data
            existingEmployee.First = updatedEmployee.First;
            existingEmployee.Name = updatedEmployee.Name;
            existingEmployee.Lastname = updatedEmployee.Lastname;
            existingEmployee.Birthdate = updatedEmployee.Birthdate;
            existingEmployee.Address = updatedEmployee.Address;
            existingEmployee.Phone = updatedEmployee.Phone;

            WriteEmployeesToFile(employees);

            return Ok();
        }
    }
}
