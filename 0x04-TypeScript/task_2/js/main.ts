// --- Interfacce ---
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

// --- Classi ---
export class Director implements DirectorInterface {
  workFromHome = () => 'Working from home';
  getCoffeeBreak = () => 'Getting a coffee break';
  workDirectorTasks = () => 'Getting to director tasks';
}

export class Teacher implements TeacherInterface {
  workFromHome = () => 'Impossibile lavorare da casa';
  getCoffeeBreak = () => 'Cannot have a break';
  workTeacherTasks = () => 'Getting to work';
}

// --- Funzione createEmployee ---
export function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// --- Funzioni richieste dal test ---
export function isDirector(employee: Director | Teacher): employee is Director {
  return 'workDirectorTasks' in employee;
}

export function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// --- Tipo e funzione extra ---
export type Subjects = 'Math' | 'History';

export function teachClass(todayClass:Subjects): string { // MODIFICATO: Spazio rimosso
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  return 'Teaching History';
}
