function showSalary(users, age) {
  users = users.filter((el) => el.age <= age);
  console.log(users);
  let result = '';

  for (let i = 0; i < users.length; i++) {
    if (users.length - i != 1) {
      {
        let str = `${users[i].name}, ${users[i].balance}\n`;
        result += str;
      }
    }
    else {
      let str = `${users[i].name}, ${users[i].balance}`;
      result += str;
    }
  }
  return result;
}
