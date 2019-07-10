import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, Scroll} from '@angular/router';
import {filter} from 'rxjs/operators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewChecked {

  private fragment: string;
  public linkGroup: string[] = [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router ) {
    this.activatedRoute.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  ngOnInit() {
    for (let i = 0; i < 100; i += 10) {
      this.linkGroup = [...this.linkGroup, `bar-${i}`];
    }
  }

  ngAfterViewChecked() {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView({behavior: 'smooth'});
    } catch (e) { }
  }
}
