function highlight(table) {
  let indexStatus;
  let indexAge;
  let indexGender;

  [...table.tHead.querySelectorAll('td')].forEach(cel => {
    if (cel.innerText === 'Status') {
      indexStatus = cel.cellIndex;
    }
    if (cel.innerText === 'Age') {
      indexAge = cel.cellIndex;
    }
    if (cel.innerText === 'Gender') {
      indexGender = cel.cellIndex;
    }
  });

  if (!indexStatus || !indexAge || !indexGender) {
    return;
  }

  [...table.tBodies].forEach(body => [...body.rows].forEach(row => {

    let status = row.cells[indexStatus];
    let age = row.cells[indexAge];
    let gender = row.cells[indexGender];

    if (!status.dataset.available) {
      row.hidden = true;
    }
    if (status.dataset.available === 'true') {
      row.classList.add('available');
    }
    if (status.dataset.available === 'false') {
      row.classList.add('unavailable');
    }

    if (parseInt(age.innerText) < 18) {
      row.style['text-decoration'] = 'line-through';
    }

    if (gender.innerText === 'm') {
      row.classList.add('male');
    }
    if (gender.innerText === 'f') {
      row.classList.add('female');
    }
  }));
}
