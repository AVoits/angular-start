import {AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, Scroll} from '@angular/router';
import {filter} from 'rxjs/operators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewChecked, OnDestroy {

  private fragment: string;
  public linkGroup: string[] = [];
  public isScrolled = false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router ) {
    this.activatedRoute.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  ngOnInit() {
    for (let i = 0; i < 100; i += 10) {
      this.linkGroup = [...this.linkGroup, `bar-${i}`];
    }
  }

  ngAfterViewChecked() {
    const element = document.querySelector('#' + this.fragment);
    element.scrollIntoView({behavior: 'smooth'});
    this.isScrolled = true;
    setTimeout(this.clearScroll, 1000);
  }

  ngOnDestroy(): void {}

  private clearScroll() {
    this.isScrolled = false;
    window.location.hash = '';
  }
}
