import { Component } from '@angular/core';
import { CharacterService } from '../../3.services/character.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-carachter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-carachter.component.html',
})
export class CreateCarachterComponent {
  character: any = {
    nominput: '',
    classeinput: '',
    alignementinput: '',
    raceinput: '',
    experienceinput: '',
    forceinput: '',
    dexteriteinput: '',
    constitutioninput: '',
    intelligenceinput: '',
    sagesseinput: '',
    charismeinput: '',
  };



  constructor(private characterService: CharacterService) {}

  createCharacter(): void {
    this.characterService.addCharacter(this.character);
    this.character = {
      nominput: '',
      classeinput: '',
      alignementinput: '',
      raceinput: '',
      experienceinput: '',
      forceinput: '',
      dexteriteinput: '',
      constitutioninput: '',
      intelligenceinput: '',
      sagesseinput: '',
      charismeinput: '',
    };
  }
}
