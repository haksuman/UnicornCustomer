using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace UnicornCustomer.Controllers.Employees
{
    public class Delete : BaseController
    {
        [HttpDelete("/api/employees/{id}")]
        public ActionResult DeleteEmployee(int id)
        {
            var employees = ReadEmployeesFromFile();
            var employee = employees.FirstOrDefault(e => e.Id == id);
            if (employee == null)
            {
                return NotFound();
            }

            employees.Remove(employee);

            WriteEmployeesToFile(employees);

            return Ok();
        }
    }
}
