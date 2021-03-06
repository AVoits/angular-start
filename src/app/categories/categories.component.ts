import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public categories: string[] = [];

  @Input()
  isScrolled: boolean;

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 500; i++) {
      this.categories = [...this.categories, `Item ${i}`];
    }
  }

}
