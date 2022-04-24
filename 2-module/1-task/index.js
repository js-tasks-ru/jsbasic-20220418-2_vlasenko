function sumSalary(salaries) {
  let sum = 0;
  for (let el in salaries) {
    if (typeof salaries[el] === 'number' && salaries[el] != false && !isNaN(salaries[el]) && isFinite(salaries[el])) {
      sum += salaries[el];
    }
  }
  return sum;
}

