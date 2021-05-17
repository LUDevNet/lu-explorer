import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { LuJsonService } from '../../../services';

interface DB_MinifigComponent {
  id: number; // INTEGER
  head: number; // INTEGER
  chest: number; // INTEGER
  legs: number; // INTEGER
  hairstyle: number; // INTEGER
  haircolor: number; // INTEGER
  chestdecal: number; // INTEGER
  headcolor: number; // INTEGER
  lefthand: number; // INTEGER
  righthand: number; // INTEGER
  eyebrowstyle: number; // INTEGER
  eyesstyle: number; // INTEGER
  mouthstyle: number; // INTEGER
}

@Component({
  selector: 'lux-minifig-component',
  templateUrl: './minifig-component.component.html',
  styleUrls: ['./minifig-component.component.css']
})
export class MinifigComponentComponent implements OnInit, OnChanges {
  @Input() id;
  $component?: Observable<DB_MinifigComponent>;
  $torso?: Observable<any>;

  constructor(private luJsonService: LuJsonService) { }

  ngOnInit(): void {
    this.$component = this.luJsonService.getGeneric(this.id, "MinifigComponent", true);
    this.$component.subscribe(minifig => {
      this.$torso = this.luJsonService.getPagedJsonData('tables/MinifigDecals/Torsos/', minifig.chestdecal, "chestdecal");
    });
  }

  ngOnChanges(): void {
    // Re-Initialize
    this.ngOnInit();
  }

}
