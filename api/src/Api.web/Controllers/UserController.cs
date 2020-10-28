using System;
using Microsoft.AspNetCore.Mvc;
using src.Api.domain.Entity;
using src.Api.persistence.Data;

namespace src.Api.web.Controllers
{

  #region UserController
  [Route("api/[controller]")]
  [ApiController]
  public class UserController : Controller
  {

    private readonly UserContext _context;

    public UserController(UserContext context)
    {
      _context = context;
    }
    #endregion
    //
    // GET: /api/User
    [HttpGet]
    public String Index()
    {
      return "Hello";
    }

    [HttpGet("{id}")]
    public User FindUserById([FromServices] UserContext context, String id)
    {
      return context.Users.Find(id);
    }

    [HttpPost]
    public async void Create(User user)
    {
      // TODO incomplete method
      _context.Add(user);
      await _context.SaveChangesAsync();
    }
  }

}