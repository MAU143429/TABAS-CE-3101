namespace TABAS_API.Models
{
    public class Trabajador
    {
        public int id { get; set; }
        public string nombre { get; set; }
        public string apellidos { get; set; }
        public int cedula { get; set; }
        public string rol { get; set; }

        public Trabajador(int id, string nombre, string apellidos, int cedula, string rol)
        {
            this.id = id;
            this.nombre = nombre;
            this.apellidos = apellidos;
            this.cedula = cedula;
            this.rol = rol;
        }

    }
}
