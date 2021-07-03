import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Shelf } from '../interfaces/shelf';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RackService {
  rack: Subject<Shelf[]>;
  currentRack: Array<Shelf>;

  constructor(private http: HttpClient) {}

  getPrimaryRack(){

  }

  setCurrentRack(rack:Array<Shelf>){
    this.currentRack = rack;
  }

  reliseRack(){
    this.rack.next(this.currentRack);
  }

}
