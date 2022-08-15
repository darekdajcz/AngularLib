export class AlertModel {
  id!: string;
  type!: string;
  message!: string;
  autoClose = true;
  keepAfterRouterChange?: boolean;
  params?: any;

  constructor(alert: Partial<AlertModel>) {
    Object.assign(this, alert);
    if (this.params) {
      Object.assign(this, this.params);
    }
  }
}

export enum AlertType {
  Success = 'Success',
  Error = 'Error',
  Info = 'Info',
  Warning = 'Warning'
}
