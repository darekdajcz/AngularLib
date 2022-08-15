import { environment } from "../environments/environment";

export const ANGULAR_MAT_DATE_FORMATS = {
  parse: {
    dateInput: 'L'
  },
  display: {
    dateInput: 'L',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'L',
    monthYearA11yLabel: 'MMMM YYYY'
  }
}

export const VERSION = environment.VERSION;
export const SERVER_API_URL = environment.SERVER_API_URL;

