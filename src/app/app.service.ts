import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private readonly http: HttpClient) {
  }

  getCustomer() {
    return this.http.get<any>('http://localhost:3000/customers/')
  }

}
