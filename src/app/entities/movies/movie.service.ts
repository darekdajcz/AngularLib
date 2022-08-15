import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { SERVER_API_URL } from "../../app.constants";
import { Observable } from "rxjs";
import { MovieResponse } from "./dto/movie.response";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private resourceUrl = `${SERVER_API_URL}/movies`

  constructor(private readonly http: HttpClient) {
  }

  getAllMovies(): Observable<MovieResponse[]> {
    return this.http.get<MovieResponse[]>(this.resourceUrl)
  }


}
