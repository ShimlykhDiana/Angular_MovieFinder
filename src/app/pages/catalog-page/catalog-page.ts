import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies';
import { Movie } from '../../models/movies.model';

@Component({
  selector: 'app-catalog-page',
  standalone: false,
  templateUrl: './catalog-page.html',
  styleUrl: './catalog-page.css'
})
export class CatalogPage {

constructor(
  private _moviesService: MoviesService
){}

public get movies(): Movie[] {
  return this._moviesService.filteredMovies
}
}