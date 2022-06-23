﻿using System.ComponentModel.DataAnnotations;

namespace KaneChan
{
    public class Tarefa
    {
        public int Id { get; set; }
        [StringLength(200)]
        public string Status { get; set; } = string.Empty;
        public string Comentario { get; set; } = string.Empty;
        public int TarefaTipoId { get; set; }
        public TarefaTipo? TarefaTipo { get; set; }   
        
    }
}
