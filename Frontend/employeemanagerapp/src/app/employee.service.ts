import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${environment.apiBaseUrl}/employee/all`);
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(
      `${environment.apiBaseUrl}/employee/add`,
      employee
    );
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(
      `${environment.apiBaseUrl}/employee/update`,
      employee
    );
  }

  public deleteEmployee(employeeId: number): Observable<void> {
    return this.http.delete<void>(
      `${environment.apiBaseUrl}/employee/delete/${employeeId}`
    );
  }
}
