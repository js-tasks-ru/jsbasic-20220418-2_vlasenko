function truncate(str, maxlength) {
  if (str.length > maxlength) {
    let subStr = str.slice(0, maxlength - 1);
    return subStr + '…';
  }
  else {
    return str;
  }
}
