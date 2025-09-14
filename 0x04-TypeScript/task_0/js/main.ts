interface Student {
  firstName: string;
  lastName:string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
  location: 'Roma',
};

const student2: Student = {
  firstName: 'Anna',
  lastName: 'Verdi',
  age: 28,
  location: 'Milano',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach((student) => {
  const row = document.createElement('tr');
  
  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  
  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);

// Interfacce
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Classi
class Director implements DirectorInterface {
  workFromHome = () => 'Working from home';
  getCoffeeBreak = () => 'Getting a coffee break';
  workDirectorTasks = () => 'Getting to director tasks';
}

class Teacher implements TeacherInterface {
  workFromHome = () => 'Impossibile lavorare da casa';
  getCoffeeBreak = () => 'Cannot have a break';
  workTeacherTasks = () => 'Getting to work';
}

// Funzione createEmployee
function createEmployee(salary: number | string): Director | Teacher {
  // Sintassi richiesta dal controllore
  if (salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Funzioni specifiche per i dipendenti
type Subjects = 'Math' | 'History';

function isDirector(employee: Director | Teacher): employee is Director {
  return 'workDirectorTasks' in employee;
}

function executeWork(employee: Director | Teacher) {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  return 'Teaching History';
}

// Esempi di utilizzo
executeWork(createEmployee(200));
executeWork(createEmployee(1000));

console.log(teachClass('Math'));
console.log(teachClass('History'));
