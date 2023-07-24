export function setDisplayPlus(data: string, number: number): string {
  if (data === '') {
    return data + number;
  } else if (number < 0) {
    return data + number;
  } else {
    return data + '+' + number;
  }
}

export function setDisplayMinus(data: string, number: number): string {
  if (number < 0) {
    return data + number;
  } else {
    return data + '-' + number;
  }
}
