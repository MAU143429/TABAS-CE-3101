using Microsoft.AspNetCore.Mvc;
using TABAS_API.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TABAS_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TabasController : ControllerBase
    {
        string viajes = System.IO.File.ReadAllText("Models/Vuelos.json");
        string bagcarts = System.IO.File.ReadAllText("Models/bagcarts.json");
        List<Trabajador> trabajadores = new List<Trabajador>
        {
            new Trabajador(1, "Gabriel", "Vargas", 123456789, "example@gmail.com", 84659213, "123", "Novato"),
            new Trabajador(2, "Yendry", "Badilla", 123456789, "example@hotmail.com", 86795135, "12345","Jefe"),
            new Trabajador(3, "Mauricio", "Calderón", 123456789, "example@yahoo.com", 84371197, "123456","Jefe"),
            new Trabajador(4, "Victor", "Castrillo", 123456789, "example@estudiantec.com", 88267599, "1234567", "Novato")
        };

    // GET: api/Tabas/GetVuelos
    [HttpGet("GetVuelos")]
        public string Get()
        {
            return viajes;
        }

        // GET api/<TabasController>/
        [HttpGet("GetBagcart")]
        public string GetBagcart()
        {
            return bagcarts;
        }
        /*
        // POST api/<TabasController>
        [HttpPost("AddEmployee")]
        public void Post(string nombre, string apellidos, long cedula, string correo, long telefono, string contrasena, string rol)
        {
            int id = trabajadores.Last().id + 1;
            Trabajador trabajador = new Trabajador(id, nombre, apellidos, cedula, correo, telefono, contrasena, rol);
            trabajadores.Add(trabajador);
            //return trabajadores;

        }*/

        
        // POST api/Tabas/AddEmployee
        [HttpPost("AddEmployee")]
        public List<Trabajador> Post(Trabajador nuevoTrabajador)
        {
            Console.WriteLine(nuevoTrabajador);
            int id = trabajadores.Last().id + 1;
  
            trabajadores.Add(nuevoTrabajador);
            return trabajadores;
        }
        /*
        // POST api/Tabas/AddEmployee
        [HttpPost("AddEmployee")]
        public string Post(string texto)
        {
            return texto;
        }*/

    }
}
