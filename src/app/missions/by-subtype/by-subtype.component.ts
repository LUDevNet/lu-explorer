import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface TypeKey {
  type: string;
  subtype: string;
}

@Component({
  selector: 'app-by-subtype',
  templateUrl: './by-subtype.component.html',
  styleUrls: ['./by-subtype.component.css']
})
export class MissionsBySubtypeComponent implements OnInit {

  $defined: Observable<TypeKey>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.$defined = this.route.paramMap.pipe(map(map => {
      return {
        type: map.get('type'),
        subtype: map.get('subtype'),
      };
    }));
  }
}
