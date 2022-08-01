import { downTo } from './helpers';

export class Bottles {

  verse(numberOfBottles) {
    return numberOfBottles - 1 > 1 ? 
      `${numberOfBottles} bottles of beer on the wall, ` +
            `${numberOfBottles} bottles of beer.\n` +
            'Take one down and pass it around, ' +
            `${numberOfBottles - 1} bottles of beer on the wall.\n` :

      `${numberOfBottles} bottles of beer on the wall, ` +
            `${numberOfBottles} bottles of beer.\n` +
            'Take one down and pass it around, ' +
            `${numberOfBottles - 1} bottle of beer on the wall.\n`;
  }
}