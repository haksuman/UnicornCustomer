﻿using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;
using UnicornCustomer.Models;
using System.Text.Json;

namespace UnicornCustomer.Controllers
{
    public class BaseController : ControllerBase
    {
        private readonly string _filePath = "Data/employees.json";

        protected List<EmployeeModel> ReadEmployeesFromFile()
        {
            var employees = new List<EmployeeModel>();
            using (StreamReader r = new StreamReader(_filePath))
            {
                string json = r.ReadToEnd();
                employees = JsonConvert.DeserializeObject<List<EmployeeModel>>(json);
            }
            return employees;
        }

        protected void WriteEmployeesToFile(List<EmployeeModel> employees)
        {
            var fileContent = JsonConvert.SerializeObject(employees);
            System.IO.File.WriteAllText(_filePath, fileContent);
        }
    }
}