import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() path;
  @Input() width: string = '64px';
  baseUrl: string;

  constructor() {
    this.baseUrl = environment.data.baseUrl;
  }

  ngOnInit() {
  }

}
