import { Injectable } from '@nestjs/common';
import {
  charactersWithOneClosedStroke,
  charactersWithThreeClosedStrokes,
  charactersWithTwoClosedStrokes,
} from './constants/characters';

@Injectable()
export class AppService {
  countClosedStrokes(text: string): number {
    let strokesCount = 0;

    for (let i = 0; i < text.length; i++) {
      const currentCharacter = text[i];

      if (charactersWithOneClosedStroke.has(currentCharacter)) {
        strokesCount++;
      } else if (charactersWithTwoClosedStrokes.has(currentCharacter)) {
        strokesCount += 2;
      } else if (charactersWithThreeClosedStrokes.has(currentCharacter)) {
        strokesCount += 3;
      }
    }

    return strokesCount;
  }
}
