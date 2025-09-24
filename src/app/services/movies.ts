import { Injectable } from '@angular/core';
import { MOVIES } from '../constants/films.constants';
import { Movie } from '../models/movies.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private _movies: Movie[] = MOVIES
  private _searchString: string = ''

  public get getFullMovies(): Movie[]{
    return this._movies
  }

  public get filteredMovies(): Movie[]{
    return this._movies.filter((item)=> item.title.includes(this._searchString))
  }

  public get searchString(): string{
    return this._searchString
  }

  public set searchString(value: string){
    this._searchString = value
  }
}
