using Microsoft.AspNetCore.Mvc;
using UnicornCustomer.Models;

namespace UnicornCustomer.Controllers.Employees
{
    [ApiController]
    public class Get : BaseController
    {

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
