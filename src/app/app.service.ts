import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomerDTO} from "./customer/dto/customer.-dto.model";



@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private readonly http: HttpClient) {
  }

  getCustomer(): Observable<CustomerDTO[]> {
    return this.http.get<CustomerDTO[]>('http://localhost:3000/customers/')
  }

}
