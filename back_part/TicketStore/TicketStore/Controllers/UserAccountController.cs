using Microsoft.AspNetCore.Mvc;

namespace TicketStore.Controllers;
public class UserAccountController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}
