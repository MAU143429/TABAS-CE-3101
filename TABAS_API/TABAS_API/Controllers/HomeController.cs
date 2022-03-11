using Microsoft.AspNetCore.Mvc;

namespace TABAS_API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HomeController : ControllerBase
    {
        [HttpGet(Name = "GetTrabajador")]
        public string Get(string nombre, string primer_apellido, string segundo_apellido, int cedula, string rol)
        {
            return "Nombre: " + nombre + " " + primer_apellido + " " + segundo_apellido + "\n" +
                "Cédula: " + cedula.ToString() + "\n" +
                "Rol: " + rol;
        }
    }
}
