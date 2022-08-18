export class CreateMovieModel {
  title: string;
  amount: string;
  duration: string;

  constructor(title: string, amount: string, duration: string) {
    this.title = title;
    this.amount = amount;
    this.duration = duration;
  }
}
