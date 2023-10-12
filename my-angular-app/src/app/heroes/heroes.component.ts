import { Component } from '@angular/core';
import { Hero } from '../Hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
 // hero = 'Windstorm';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes: Hero[] = [];
  constructor(private heroService: HeroService) {}
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
 // heroes = HEROES;
  selectedHero?: Hero;
onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
}
