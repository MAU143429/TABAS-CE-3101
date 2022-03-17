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
            new Trabajador(1, "Gabriel", "Vargas", 123456789, "example@gmail.com", 84659213, "Novato"),
            new Trabajador(2, "Yendry", "Badilla", 123456789, "example@hotmail.com", 86795135, "Jefe"),
            new Trabajador(3, "Mauricio", "Calderón", 123456789, "example@yahoo.com", 84371197, "Jefe"),
            new Trabajador(4, "Victor", "Castrillo", 123456789, "example@estudiantec.com", 88267599, "Novato")
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
        public List<Trabajador> Post(string nombre, string apellidos, long cedula, string correo, long telefono, string rol)
        {
            int id = trabajadores.Last().id + 1;
            Trabajador trabajador = new Trabajador(id, nombre, apellidos, cedula, correo, telefono, rol);
            trabajadores.Add(trabajador);
            return trabajadores;
            //return trabajadores;

        }
    }
}
