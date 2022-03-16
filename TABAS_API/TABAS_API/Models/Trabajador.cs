namespace TABAS_API.Models
{
    public class Trabajador
    {
        private string nombre { get; set; }
        private string apellidos { get; set; }
        private int cedula { get; set; }
        private string rol { get; set; }

        public Trabajador()
        {
        }

        public Trabajador(string nombre, string apellidos, int cedula, string rol)
        {
            this.nombre = nombre;
            this.apellidos = apellidos;
            this.cedula = cedula;
            this.rol = rol;
        }

    }
}
