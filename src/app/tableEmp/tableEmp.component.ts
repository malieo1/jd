import { EmployeeSService } from './../services/employee-s.service';
import { Component, OnInit } from '@angular/core';
import { Employee} from './../models/employee'
import { response } from 'express';
import { HttpErrorResponse } from '@angular/common/http';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-tableEmp',
  templateUrl: './tableEmp.component.html',
  styleUrls: ['./tableEmp.component.css']
})
export class TableEmpComponent implements OnInit {
  
  public employees:Employee[];
  public tableData1: TableData;


constructor( private employeeSService : EmployeeSService) { }

  public getEmployees() : void {
    this.employeeSService.getEmployees().subscribe(
     ( response: Employee[] )=>{
      this.employees = response;
      },
      (error: HttpErrorResponse) => {
        alert (error.message);
      }

    );
  }

ngOnInit() {
    this.tableData1 = {
        headerRow: [ 'ID', 'Name', 'Country', 'City', 'Salary'],
        dataRows: [
            ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
            ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
            ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
            ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
            ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
            ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615']
        ]
    };

    this.getEmployees();
}

}
