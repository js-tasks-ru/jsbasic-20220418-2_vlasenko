function namify(users) {
  let names = [];

  for (let el of users) {
    names.push(el.name);
  }

  return names;
}
