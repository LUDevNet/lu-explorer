import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() prefix: string;
  @Input() current: number;
  @Input('count') page_count: number;

  constructor() { }

  ngOnInit() {
  }

}
