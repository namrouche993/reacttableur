export function existsInArray(array, pair) {
    for (let i = 0; i < array.length; i++) {
      if (array[i][0] === pair[0] && array[i][1] === pair[1]) {
        return true;
      }
    }
    return false;
  }