export interface MovieResponse {
  movies: MovieInterface[];
}

export interface MovieInterface {
  _id: string,
  title: string;
  amount: string;
  duration: string;
}
