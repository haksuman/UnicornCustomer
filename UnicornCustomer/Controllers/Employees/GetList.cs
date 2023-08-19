using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using UnicornCustomer.Models;

namespace UnicornCustomer.Controllers.Employees
{
    public class GetList : BaseController
    {
        [HttpGet("/api/employees")]
        public ActionResult<List<EmployeeModel>> GetEmployees()
        {
            var employees = ReadEmployeesFromFile();
            return employees;
        }
    }
}
