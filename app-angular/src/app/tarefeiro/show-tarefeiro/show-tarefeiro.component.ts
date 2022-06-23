
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TarefeiroApiService } from 'src/app/tarefeiro-api.service';

@Component({
  selector: 'app-show-tarefeiro',
  templateUrl: './show-tarefeiro.component.html',
  styleUrls: ['./show-tarefeiro.component.css']
})
export class ShowTarefeiroComponent implements OnInit {
  tarefeiroList$!: Observable<any[]>
  tarefeiroTiposList$!: Observable<any[]>
  tarefeiroTiposList: any=   []
  tarefeiroTiposMap:Map<number, string> = new Map()


  constructor(private service: TarefeiroApiService) { }

  ngOnInit(): void {
    this.tarefeiroList$ = this.service.getT()
    this.tarefeiroTiposList$ = this.service.getTT()
    this.refreshTarefeiroTipoMap()
  }
  modalTitle = ''
  activateAddEditTarefeiroComponent = false
  tarefeiro:any

  refreshTarefeiroTipoMap(){
    this.service.getTT().subscribe(data=>{
      this.tarefeiroTiposList = data

      for(let i = 0; i < data.length; i++)
      {
        this.tarefeiroTiposMap.set(this.tarefeiroTiposList[i].id, this.tarefeiroTiposList[i].tarefaNome)
      }
    })
  }
  modalAdd(){
    this.tarefeiro = {
      id: 0 ,
      status: null,
      comentario: null,
      tarefaTipoId: null
    }
    this.modalTitle = "Nova Tarefa"
    this.activateAddEditTarefeiroComponent = true
  }

  modalClose(){
    this.activateAddEditTarefeiroComponent = false
    this.tarefeiroList$ = this.service.getT()
  }

}
