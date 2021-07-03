import { Component, OnInit } from '@angular/core';
import { Shelf } from 'src/app/interfaces/shelf';
import { RackService } from 'src/app/servises/product.service';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-rack',
  templateUrl: './rack.component.html',
  styleUrls: ['./rack.component.scss']
})
export class RackComponent implements OnInit {
  currentRack$: Subject<Shelf[]> = this.rackService.rack;

  constructor(private rackService: RackService) { }
  
  ngOnInit(): void {
    this.rackService.getPrimaryRack().subscribe({
      next: (rack: Shelf[])=>{ 
        this.rackService.setCurrentRack(rack);
        this.rackService.reliseRack();
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
