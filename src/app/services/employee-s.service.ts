import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeSService {
  private apiServerUrl = '';


  constructor(private http :  HttpClient) { }

    public getEmployees (): Observable<any>{
      return this.http.get<any>(`${this.apiServerUrl}/employee/all`);
    }

    //public addEmployee():Observable<any>{
      //return this.http.post<any> (`${this.apiServerUrl}/employee/add`, employee);
    //}

    //public updateEmployee():Observable<any>{
     // return this.http.put<any> (`${this.apiServerUrl}/employee/update`, employee);
    //}

    public deleteEmployee(employeeId: string):Observable<any>{
      return this.http.delete<void> (`${this.apiServerUrl}/employee/delete/${employeeId}`);
    }
}
