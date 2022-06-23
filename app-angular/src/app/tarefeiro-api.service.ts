import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefeiroApiService {
  readonly tarefeiroAPIUrl = "https://localhost:7168/api"

  constructor(private http:HttpClient) { }

  //Tarefas

  getT():Observable<any[]>{
    return this.http.get<any>(this.tarefeiroAPIUrl  + '/tarefas')
  }

  addT(data:any):Observable<any>{
    return this.http.post(this.tarefeiroAPIUrl + '/tarefas', data)
  }

  updateT(id: number|string, data:any){
    return this.http.put(this.tarefeiroAPIUrl  + `/tarefas/${id}`, data)
  }

  deleteT(id: number|string){
    return this.http.delete(this.tarefeiroAPIUrl + `/tarefas/${id}`);
  }

  //Tarefa Tipos
  getTT():Observable<any[]>{
    return this.http.get<any>(this.tarefeiroAPIUrl  + '/tarefaTipos')
  }

  addTT(data:any):Observable<any>{
    return this.http.post(this.tarefeiroAPIUrl + '/tarefaTipos', data)
  }

  updateTT(id: number|string, data:any){
    return this.http.put(this.tarefeiroAPIUrl  + `/tarefaTipos/${id}`, data)
  }

  deleteTT(id: number|string){
    return this.http.delete(this.tarefeiroAPIUrl + `/tarefaTipos/${id}`);
  }

  //Status
  getS():Observable<any[]>{
    return this.http.get<any>(this.tarefeiroAPIUrl  + '/statuses')
  }

  addS(data:any):Observable<any>{
    return this.http.post(this.tarefeiroAPIUrl + '/statuses', data)
  }

  updateS(id: number|string, data:any){
    return this.http.put(this.tarefeiroAPIUrl  + `/statuses/${id}`, data)
  }

  deleteS(id: number|string){
    return this.http.delete(this.tarefeiroAPIUrl + `/statuses/${id}`);
  }
}
