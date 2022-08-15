// Bookmark: Page 268

import { downTo } from './helpers';
import { capitalize } from './helpers';

class VerseFake {
  static lyrics(number) {
    return `This is verse ${number}.\n`;
  }
}

class CountdownSong {
  constructor(verseTemplate = BottleVerse, max = 99, min = 0) {
    this.verseTemplate = verseTemplate;
    this.max = max;
    this.min = min;
  }

  song() {
    return this.verses(this.max, this.min);
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

  constructor(bottleNumber) {
    this.bottleNumber = bottleNumber;
  }

  lyrics() {
    return (
      capitalize(`${this.bottleNumber} of beer on the wall, `) +
      `${this.bottleNumber} of beer.\n` +
      `${this.bottleNumber.action()}` +
      `${this.bottleNumber.successor()} of beer on the wall.\n`
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

export { VerseFake, CountdownSong, BottleVerse };