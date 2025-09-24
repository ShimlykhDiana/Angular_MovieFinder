import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movies.model';


@Component({
  selector: 'app-card', //уникальный идентификатр компонента
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card { //каждый эл который выносится в компонент является классом, будут создаваться не переменные, а св-ва класса, не функции, а методы класса
  @Input() movie!: Movie
}
