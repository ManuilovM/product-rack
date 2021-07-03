import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';
import { Shelf } from '../interfaces/shelf';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { secretKey } from './secretKey';


@Injectable({
  providedIn: 'root'
})
export class RackService {
  rack: Subject<Shelf[]>;
  currentRack: Array<Shelf>;
  secretKey: string = secretKey;

  constructor(private http: HttpClient) {}

  getPrimaryRack():Observable<any>{
    const url = "https://api.jsonbin.io/b/5e6b40e207f1954acedf3427/1"
    return this.http.get(url, { headers: {
      'secret-key' : secretKey,
      'contentType': 'application/json'
   } })
  }

  setCurrentRack(rack:Array<Shelf>){
    this.currentRack = rack;
  }

  reliseRack(){
    this.rack.next(this.currentRack);
  }

}
