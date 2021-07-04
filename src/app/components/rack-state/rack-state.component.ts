import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Shelf } from 'src/app/interfaces/shelf';
import { RackService } from 'src/app/servises/product.service';

@Component({
  selector: 'app-rack-state',
  templateUrl: './rack-state.component.html',
  styleUrls: ['./rack-state.component.scss']
})
export class RackStateComponent implements OnInit {
  currentRack$: Subject<Shelf[]> = this.rackService.rack;

  constructor(private rackService: RackService) { }

  ngOnInit(): void {
  }

}
