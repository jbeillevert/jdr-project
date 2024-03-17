import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCarachterComponent } from '../../2.components/create-carachter/create-carachter.component';
import { DisplayCarachterComponent } from '../../2.components/display-carachter/display-carachter.component';
import { CharacterService } from '../../3.services/character.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CreateCarachterComponent, DisplayCarachterComponent, CommonModule],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  characters: any[];

  constructor(private characterService: CharacterService) {
    this.characters = this.characterService.getCharacters();
  }

  ngOnInit(): void {
    this.characters = this.characterService.getCharacters();
    console.log("Characters:", this.characters); 
  }

  deleteCharacter(character: any): void {
    this.characterService.deleteCharacter(character);
    this.characters = this.characterService.getCharacters(); 
  }

}
