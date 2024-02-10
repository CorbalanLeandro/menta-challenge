const atSymbolString = '@';
const percentSymbolString = '%';
const perMilSymbolString = '‰';
const infinitySymbolString = '∞';
const ampersandSymbolString = '&';
const openingQuestionSymbolString = '¿';
const closingQuestionSymbolString = '?';

export const allowedSymbols = new Set([
  atSymbolString,
  '#',
  '$',
  percentSymbolString,
  infinitySymbolString,
  perMilSymbolString,
  ampersandSymbolString,
  '/',
  '(',
  ')',
  '=',
  openingQuestionSymbolString,
  closingQuestionSymbolString,
  '_',
  '-',
]);

export const lettersAndNumbersRegexp = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ0-9 ]$/;

export const charactersWithOneClosedStroke = new Set([
  atSymbolString,
  openingQuestionSymbolString,
  closingQuestionSymbolString,
  ampersandSymbolString,
  'a',
  'á',
  'A',
  'Á',
  'b',
  'd',
  'D',
  'e',
  'é',
  'i',
  'j',
  'o',
  'ó',
  'O',
  'Ó',
  'p',
  'P',
  'q',
  'Q',
  'R',
  '0',
  '4',
  '6',
  '9',
]);

export const charactersWithTwoClosedStrokes = new Set([
  'B',
  '8',
  percentSymbolString,
  infinitySymbolString,
  'ü',
  'Ü',
]);

export const charactersWithThreeClosedStrokes = new Set([perMilSymbolString]);
