import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
  public searchString: string = ''

  constructor(private _moviesService: MoviesService){
  
  }

  public updateValue(event: Event) {
    const target = event.target as HTMLInputElement
    this.searchString = target.value

  }

  public updateSearch(event: Event){
    this._moviesService.searchString = this.searchString
  }

}
