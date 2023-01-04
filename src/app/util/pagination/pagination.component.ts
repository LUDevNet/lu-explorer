import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

  @Input() prefix: string;
  @Input() current: number;
  @Input('count') page_count: number;

  constructor() { }

  pageLink(page: number): string {
    return `${this.prefix}/page/${page}`;
  }

}
