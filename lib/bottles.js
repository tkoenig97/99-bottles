// Bookmark: Page 106 - capitalize is not defined

import { downTo } from './helpers';
import { capitalize } from './helpers';

export class Bottles {
  song() {
    return this.verses(99, 0);
  }

  verses(upper, lower) {
    return downTo(upper, lower)
      .map(i => this.verse(i))
      .join('\n');
  }

  verse(number) {
    switch (number) {
      case 0:
        return (
          `${capitalize(this.quantity(number))} ` + 
          `${this.container(number)} ` +
          'of beer on the wall, ' +
          `${this.quantity(number)} ` + 
          `${this.container(number)} ` +
          'of beer.\n' +
          `${this.action(number)}` +
          `${this.quantity(99)} `+ 
          `${this.container(number - 1)} ` + 
          'of beer on the wall.\n'
        );
      default:
        return (
          `${capitalize(this.quantity(number))} ` +
          `${this.container(number)} ` +
          'of beer on the wall, ' +
          `${this.quantity(number)} ` + 
          `${this.container(number)} ` +
          'of beer.\n' +
          `${this.action(number)}`+
          `${this.quantity(this.successor(number))} ` + 
          `${this.container(number - 1)} ` +  
          'of beer on the wall.\n'
        );
    }
  }

  container(number) {
    if (number === 1) {
      return 'bottle';
    } else {
      return 'bottles';
    }
  }

  pronoun(number) {
    if (number === 1) {
      return 'it';
    } else {
      return 'one';
    }
  }

  quantity(number) {
    if (number === 0) {
      return 'no more';
    } else {
      return number.toString();
    }
  }

  action(number){
    if (number === 0) {
      return 'Go to the store and buy some more, ';
    } else {
      return `Take ${this.pronoun(number)} down and pass it around, `;
    }
  }

  successor(number) {
    return number - 1;
  }
}