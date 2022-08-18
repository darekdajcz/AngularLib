import { AfterViewChecked, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from '../../app.service';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewChecked {

  @ViewChild(MatSidenav) sideNav!: MatSidenav;
  opened = false;

  constructor(private readonly translate: TranslateService, private readonly appService: AppService,
              private readonly router: Router,
              private readonly breakpointObserver: BreakpointObserver, private readonly cdref: ChangeDetectorRef) {
    translate.setDefaultLang('pl');
    translate.use('pl');
  }

  ngOnInit(): void {
  }


  click(): void {
    this.appService.getCustomer().subscribe({
      next: (res) => res.forEach((x) => console.log(x.firstName))
    });
  }

  toggleSideNav() {
    this.opened = !this.opened;
  }

  ngAfterViewChecked(): void {
    // this.breakpointObserver.observe(['(max-width: 800px)']).subscribe((res) => {
    //   if (res.matches) {
    //     this.sideNav.mode = 'over'
    //     this.sideNav.close()
    //   } else {
    //     this.sideNav.mode = 'side'
    //     this.sideNav.open()
    //   }
    //   this.cdref.detectChanges();
    // })
  }

  redirectTo(pathRedirectTo: string) {

    this.router.navigate([pathRedirectTo]).then(() => this.opened = false);
  }
}
