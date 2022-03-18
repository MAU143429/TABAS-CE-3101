namespace TABAS_API.Models
{
    public class Trabajador
    {
        public int id { get; set; }
        public string nombre { get; set; }
        public string apellidos { get; set; }
        public long cedula { get; set; }
        public string correo { get; set; }
        public long telefono { get; set; }
        public string contrasena { get; set; }
        public string rol { get; set; }

        public Trabajador(int id, string nombre, string apellidos, long cedula, string correo, long telefono, string contrasena, string rol)
        {
            this.id = id;
            this.nombre = nombre;
            this.apellidos = apellidos;
            this.cedula = cedula;
            this.correo = correo;
            this.telefono = telefono;
            this.contrasena = contrasena;
            this.rol = rol;
        }

    }
}
