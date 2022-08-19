import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-movie-form',
  templateUrl: './create-movie-form.component.html',
  styleUrls: ['./create-movie-form.component.scss']
})
export class CreateMovieFormComponent implements OnInit {

  @Input() movieFormGroup!: FormGroup;
  @Input() movieId!: string;
  @Output() saveMovieEmitter = new EventEmitter<void>();
  @Output() clearFormEmitter = new EventEmitter<void>();

  ngOnInit(): void {
  }

  saveMovie() {
    this.saveMovieEmitter.emit();
  }

  clearForm() {
    this.clearFormEmitter.emit();
  }
}
