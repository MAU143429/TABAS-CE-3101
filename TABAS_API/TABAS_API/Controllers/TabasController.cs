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
        List<Trabajador> trabajadores = new List<Trabajador>
        {
            new Trabajador(1, "Gabriel", "Vargas", 123456789, "Novato"),
            new Trabajador(2, "Yendry", "Badilla", 123456789, "Jefe"),
            new Trabajador(3, "Mauricio", "Calderón", 123456789, "Jefe"),
            new Trabajador(4, "Victor", "Castrillo", 123456789, "Novato")
        };

        // GET: api/<TabasController>
        [HttpGet("GetVuelos")]
        public string Get()
        {
            return viajes;
        }

        // GET api/<TabasController>/5
        [HttpGet]
        public Trabajador Get(int id)
        {
            Trabajador trabajador = trabajadores.Find(t => t.id == id);
            return trabajador;
        }

        // POST api/<TabasController>
        [HttpPost]
        public List<Trabajador> Post(string nombre, string apellidos, int cedula, string rol)
        {
            int id = trabajadores.Last().id + 1;
            Trabajador trabajador = new Trabajador(id, nombre, apellidos, cedula, rol);
            trabajadores.Add(trabajador);
            return trabajadores;
            //return trabajadores;

        }
    }
}
