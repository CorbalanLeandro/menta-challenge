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

    const text = value.text;

    for (let i = 0; i < value.text.length; i++) {
      const currentCharacter = text[i];

      if (
        !lettersAndNumbersRegexp.test(currentCharacter) &&
        !allowedSymbols.has(currentCharacter)
      ) {
        throw new BadRequestException(
          `Not allowed character: ${currentCharacter}`,
        );
      }
    }

    return value;
  }
}
