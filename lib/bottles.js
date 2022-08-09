// Bookmark: Page 90

import { downTo } from './helpers';

export class Bottles {
  container(number) {
    if (number === 1) {
      return 'bottle';
    } else {
      return 'bottles';
    }
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
    switch (number) {
      case 0:
        return (
          'No more bottles of beer on the wall, ' +
          'no more bottles of beer.\n' +
          'Go to the store and buy some more, ' +
          '99 bottles of beer on the wall.\n'
        );
      case 1:
        return (
          `${number} bottle of beer on the wall, ` +
          `${number} bottle of beer.\n` +
          'Take it down and pass it around, ' +
          'no more bottles of beer on the wall.\n'
        );
      default:
        return (
          `${number} bottles of beer on the wall, ` +
          `${number} bottles of beer.\n` +
          'Take one down and pass it around, ' +
          `${number-1} ${this.container(number - 1)}` +  
          ' of beer on the wall.\n'
        );
    }
  }
}