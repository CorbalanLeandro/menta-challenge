import { BadRequestException, PipeTransform } from '@nestjs/common';
import { ICountClosedStrokesRequest } from '../interfaces/request';
import {
  allowedSymbols,
  lettersAndNumbersRegexp,
} from '../constants/characters';

export class CountClosedStrokesValidationPipe implements PipeTransform {
  transform(value: any): ICountClosedStrokesRequest {
    if (!value || value.text == null || typeof value.text !== 'string') {
      throw new BadRequestException('"text" property must be a string.');
    }

    const { text } = value;

    const notAllowedCharacters: Set<string> = new Set();
    for (let i = 0; i < value.text.length; i++) {
      const currentCharacter = text[i];

      if (
        !lettersAndNumbersRegexp.test(currentCharacter) &&
        !allowedSymbols.has(currentCharacter)
      ) {
        notAllowedCharacters.add(currentCharacter);
      }
    }

    if (notAllowedCharacters.size > 0) {
      throw new BadRequestException(
        `Not allowed character: ${[...notAllowedCharacters].join(', ')}.`,
      );
    }

    // sanitizing input
    return { text };
  }
}
