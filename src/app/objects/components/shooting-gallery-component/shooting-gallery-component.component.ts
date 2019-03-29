import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shooting-gallery-component',
  templateUrl: './shooting-gallery-component.component.html',
  styleUrls: ['./shooting-gallery-component.component.css']
})
export class ShootingGalleryComponentComponent implements OnInit {

  private component_id;

  @Input() set id(value: number) {
    this.component_id = value;
  }

  get id(): number {
    return this.component_id;
  }

  constructor() { }

  ngOnInit() {
  }

}
