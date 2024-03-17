import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private charactersKey = 'characters';

  constructor() { }

  getCharacters(): any[] {
    const charactersString = localStorage.getItem(this.charactersKey);
    if (charactersString) {
      try {
        return JSON.parse(charactersString);
      } catch (error) {
        console.error("Error parsing characters:", error);
        return [];
      }
    }
    return [];
  }

  addCharacter(character: any): void {
    const characters = this.getCharacters();
    characters.push(character);
    localStorage.setItem(this.charactersKey, JSON.stringify(characters));
  }

  deleteCharacter(character: any): void {
    const characters = this.getCharacters();
    const index = characters.findIndex((c: any) => c === character);
    if (index !== -1) {
      characters.splice(index, 1);
      localStorage.setItem(this.charactersKey, JSON.stringify(characters));
    }
  }
}
