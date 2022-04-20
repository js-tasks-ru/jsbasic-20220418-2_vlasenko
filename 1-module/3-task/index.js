function ucFirst(str) {
  if (str.length > 1) {
    let firstChar = str[0];
    let anotherChar = str.slice(1, str.length);
    return firstChar.toUpperCase() + anotherChar;
  }
  else if (str == '') {
    return '';
  }
  else {
    return str[0].toUpperCase();
  }
}
