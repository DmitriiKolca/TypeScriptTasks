export function getSymbolOfComparing(number1: number, number2: number): string {
  if (number1 > number2) {
    return '>';
  } else if (number1 < number2) {
    return '<';
  } else if (number1 === number2) {
    return '=';
  } else {
    return '';
  }
}
