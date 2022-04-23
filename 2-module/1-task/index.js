function sumSalary(salaries) {
  let sum = 0;
  for (let el in salaries) {
    if (typeof salaries[el] === 'number' && salaries[el] != false && isNaN(salaries[el]) == false && isFinite(salaries[el]) == true) {
      sum += salaries[el];
    }
    else {
      continue;
    }
  }
  return sum;
}

// let salaries = {
//   John: 1000,
//   Ann: 1600,
//   Pete: 1300,
//   month: 'December',
//   currency: 'USD',
//   isPayed: false
// }
