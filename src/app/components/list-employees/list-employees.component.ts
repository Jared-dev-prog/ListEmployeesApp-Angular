import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css'],
})
export class ListEmployeesComponent {
  employees: Employee[] = [];
  selectEmployee: string = 'all';

  allEmployees: number = 0;
  allMale: number = 0;
  allFemale: number = 0;

  selectFilter: string = 'all';

  constructor() {
    this.employees = [
      {
        id: 1,
        name: 'Jared Trejo',
        sex: 'Male',
        salary: 5000,
      },
      {
        id: 2,
        name: 'Berenice Garcia',
        sex: 'Female',
        salary: 5000,
      },
      {
        id: 3,
        name: 'Jonathan Aldana',
        sex: 'Male',
        salary: 5000,
      },
      {
        id: 4,
        name: 'Tania Urbina',
        sex: 'Female',
        salary: 5000,
      },
      {
        id: 5,
        name: 'Otoniel Aguirre',
        sex: 'Male',
        salary: 5000,
      },
    ];
  }

  getEmployees(): number {
    return this.employees.length;
  }

  getMale(): number {
    const amountMale = this.employees.filter(
      (employee) => employee.sex === 'Male'
    );
    return amountMale.length;
  }

  getFemale(): number {
    const amountFemale = this.employees.filter(
      (employee) => employee.sex === 'Female'
    );
    return amountFemale.length;
  }

  selectFilterParent(filter: string) {
    this.selectFilter = filter;
  }
}
