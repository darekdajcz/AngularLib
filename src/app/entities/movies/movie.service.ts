import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { SERVER_API_URL } from "../../app.constants";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { MovieInterface } from "./dto/movie.response";
import { CreateMovieModel } from "./dto/create-movie.model";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private resourceUrl = `${ SERVER_API_URL }/movies`

  constructor(private readonly http: HttpClient) {
  }

  private _movieData$: BehaviorSubject<MovieInterface[] | null> = new BehaviorSubject<MovieInterface[] | null>(null);

  get movieData$(): Observable<MovieInterface[] | null> {
    return this._movieData$.asObservable();
  }

  set movieData(movieData: MovieInterface[] | null) {
    this._movieData$.next(movieData);
  }

  getAllMovies(): Observable<MovieInterface[]> {
    return this.http.get<MovieInterface[]>(this.resourceUrl)
      .pipe(tap((res) => this.movieData = res))
  }

  getMovieById(movieId: string): Observable<MovieInterface> {
    return this.http.get<MovieInterface>(`this.resourceUrl${ movieId }`)
  }

  createMovie = (movie: CreateMovieModel): Observable<MovieInterface> =>
    this.http.post<MovieInterface>(this.resourceUrl, movie)

  deleteMovieById = (movieId: string): Observable<MovieInterface> => {
    const movieParams = new HttpParams()
      .set('movieId', movieId)
    return this.http.delete<MovieInterface>(this.resourceUrl, { params: movieParams })
  }


  // @Post('/')
  // async createMovie(@Res() res: Response, @Body() movie: CreateMovieModel) {
  //   try {
  //     const data = await this.movieService.createMovie(movie);
  //     res.status(HttpStatus.OK).json(data);
  //   } catch (err) {
  //     res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err);
  //   }
  // }
  //
  // @Put('')
  // async updateMovieById(@Res() res: Response, @Body() movieParam: Partial<CreateMovieModel>, @Query('movieId') movieId: string) {
  //   const data = this.movieService.updateMovie(movieId, movieParam);
  //   res.status(HttpStatus.OK).json(data);
  // }
  //
  // @Delete('/')
  // async deleteMovieById(@Query('movieId') movieId: string) {
  //   return await this.movieService.removeMovie(movieId);
  // }

}
