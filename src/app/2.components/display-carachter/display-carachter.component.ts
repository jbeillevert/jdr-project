import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterService } from '../../3.services/character.service';

@Component({
  selector: 'app-display-carachter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-carachter.component.html',
})
export class DisplayCarachterComponent {
  @Input() character: any;
  @Output() deleteCharacterEvent = new EventEmitter<any>();

  constructor(private characterService: CharacterService) {}

  deleteCharacter(): void {
    this.deleteCharacterEvent.emit(this.character);  
  }

}
