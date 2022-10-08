using System;
using System.ComponentModel.DataAnnotations;

namespace TicketStore.Models;
public class Users
{
        public int ID { get; set; }
        public string PhoneNumber { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Password { get; set; }
}
