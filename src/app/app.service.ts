import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomerDTO} from "./entities/customer/dto/customer.-dto.model";
import { SERVER_API_URL } from "./app.constants";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private resourceUrl = `${SERVER_API_URL}/customers`

  constructor(private readonly http: HttpClient) {
  }

  getCustomer(): Observable<CustomerDTO[]> {
    return this.http.get<CustomerDTO[]>(this.resourceUrl)
  }
}
