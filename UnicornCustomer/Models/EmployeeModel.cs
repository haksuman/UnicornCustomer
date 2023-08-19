using System.Net;
using System;

namespace UnicornCustomer.Models
{
    public class EmployeeModel
    {
        public int Id { get; set; }
        public string First { get; set; }
        public string Name { get; set; }
        public string Lastname { get; set; }
        public DateTime Birthdate { get; set; }
        public AddressModel Address { get; set; }
        public string Phone { get; set; }
    }
}
