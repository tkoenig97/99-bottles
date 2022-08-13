// Bookmark: Page 194

import { downTo } from './helpers';
import { capitalize } from './helpers';

class Bottles {
  constructor(verseTemplate = BottleVerse) {
    this.verseTemplate = verseTemplate;
  }

  song() {
    return this.verses(99, 0);
  }

  verses(upper, lower) {
    return downTo(upper, lower)
      .map(i => this.verse(i))
      .join('\n');
  }

  verse(number) {
    return this.verseTemplate.lyrics(number);
  }
}

class BottleVerse {
  static lyrics(number) {
    return new BottleVerse(BottleNumber.for(number)).lyrics();
  }

  constructor(number) {
    this.number = number;
  }

  lyrics() {
    const bottleNumber = this.number instanceof BottleNumber ?
      this.number :
      BottleNumber.for(this.number);

    return (
      capitalize(`${bottleNumber} of beer on the wall, `) +
      `${bottleNumber} of beer.\n` +
      `${bottleNumber.action()}` +
      `${bottleNumber.successor()} of beer on the wall.\n`
    );
  }
}

class BottleNumber {
  constructor(number) {
    this.number = number;
  }

  static for(number) {
    let bottleNumberClass;
    try {
      bottleNumberClass = eval(`BottleNumber${number}`);
    } catch (e) {
      bottleNumberClass = BottleNumber;
    }

    return new bottleNumberClass(number);
  }

  toString() {
    return `${this.quantity()} ${this.container()}`;
  }

  container() {
    return 'bottles';
  }

  pronoun() {
    return 'one';
  }

  quantity() {
    return this.number.toString();
  }

  action(){
    return `Take ${this.pronoun()} down and pass it around, `;
  }

  successor() {
    return BottleNumber.for(this.number - 1);
  }
}

class BottleNumber0 extends BottleNumber {
  quantity() {
    return 'no more';
  }

  action() {
    return  'Go to the store and buy some more, ';
  }

  successor() {
    return BottleNumber.for(99);
  }
}

class BottleNumber1 extends BottleNumber {
  container() {
    return 'bottle';
  }

  pronoun() {
    return 'it';
  }
}

class BottleNumber6 extends BottleNumber {
  quantity() {
    return '1';
  }
  
  container() {
    return 'six-pack';
  }
}

export { Bottles };