import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { AlertModel, AlertType } from "./alert.model";
import { AlertService } from "../../services/alert.service";
import { ALERT_TIMEOUT } from "../../constants/timeout.constants";

@UntilDestroy()
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() id = 'default-alert';
  @Input() fade = true;

  @ViewChild('alertBox', { static: false }) alertBox?: ElementRef;

  alerts: AlertModel[] = [];

  alertSubscription!: Subscription;
  routeSubscription!: Subscription;
  hovered = false;

  constructor(private readonly router: Router,
              private readonly alertService: AlertService) {
  }

  ngOnInit(): void {
    // subscribe to new alert notifications
    this.alertSubscription = this.alertService.onAlert(this.id)
      .pipe(untilDestroyed(this))
      .subscribe(alert => {
        // clear alerts when an empty alert is received
        if (!alert.message) {
          // filter out alerts without 'keepAfterRouteChange' flag
          this.alerts = this.alerts.filter(x => x.keepAfterRouterChange);

          // remove 'keepAfterRouteChange' flag on the rest
          this.alerts.forEach(x => delete x.keepAfterRouterChange);
          return;
        }

        // add alert to array
        this.alerts.push(alert);

        // auto close alert if required
        if (alert.autoClose) {
          setTimeout(() => !this.hovered ? this.removeAlert(alert) : '', ALERT_TIMEOUT);
        }
      });

    // clear alerts on location change
    this.routeSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.alertService.clear(this.id);
      }
    });
  }

  ngOnDestroy(): void {
    this.alertSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

  removeAlert(alert: AlertModel): void {
    if (!this.alerts.includes(alert)) {
      return;
    }

    this.alerts = this.alerts.filter(x => x !== alert);
  }

  cssClass(alert: AlertModel): string | undefined {

    if (!alert) return undefined;

    const alertTypeClass: any = {
      [AlertType.Success]: 'alert alert-success',
      [AlertType.Error]: 'alert alert-error',
      [AlertType.Info]: 'alert alert-info',
      [AlertType.Warning]: 'alert alert-warning'
    };

    return alertTypeClass[alert.type];
  }

  onMouseOver(): void {
    this.hovered = true;
  }

  onMouseOut(): void {
    this.hovered = false;
  }
}
