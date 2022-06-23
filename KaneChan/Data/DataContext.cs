using Microsoft.EntityFrameworkCore;

namespace KaneChan.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options) { }
        public DbSet<Tarefa>  Tarefas { get; set; }
        public DbSet<TarefaTipo> TarefaTipos { get; set; }
        public DbSet<Status>  Statuses { get; set; }

    }
}
