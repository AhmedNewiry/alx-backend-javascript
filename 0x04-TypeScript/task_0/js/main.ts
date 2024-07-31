interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'Los Angeles',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tableHead = document.createElement('thead');
const headRow = document.createElement('tr');
const th1 = document.createElement('th');
const th2 = document.createElement('th');

th1.innerText = 'First Name';
th2.innerText = 'Location';

headRow.appendChild(th1);
headRow.appendChild(th2);
tableHead.appendChild(headRow);
table.appendChild(tableHead);

const tableBody = document.createElement('tbody');

studentsList.forEach(student => {
  const row = document.createElement('tr');
  const firstNameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  firstNameCell.innerText = student.firstName;
  locationCell.innerText = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);
