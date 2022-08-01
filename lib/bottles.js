import { downTo } from './helpers';

export class Bottles {

  verse(numberOfBottles) {
    let output = '';
    numberOfBottles > 2 ? output = `${numberOfBottles} bottles of beer on the wall, ` +
                                   `${numberOfBottles} bottles of beer.\n` +
                                   'Take one down and pass it around, ' +
                                   `${numberOfBottles - 1} bottles of beer on the wall.\n` :

      numberOfBottles > 1 ? output = `${numberOfBottles} bottles of beer on the wall, ` +
                                     `${numberOfBottles} bottles of beer.\n` +
                                     'Take one down and pass it around, ' +
                                     `${numberOfBottles - 1} bottle of beer on the wall.\n` :

        output = `${numberOfBottles} bottle of beer on the wall, ` +
                 `${numberOfBottles} bottle of beer.\n` +
                 'Take it down and pass it around, ' +
                 'no more bottles of beer on the wall.\n';


                                  

    return output;
  }
}