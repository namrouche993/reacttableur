export function startsWithElement(array, substring) {
    for (let i = 0; i < array.length; i++) {
      if (substring.startsWith(array[i])) {
        return true;
      }
    }
    return false;
  }