import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'app';

    columnDefs = [
      { headerName: "Employee Name", field:"ename"},
      { headerName: "Age", field:"age"},
      { headerName:"Salary", field:"salary" },
      { headerName:"Designation", field:"designation"}
    ];
  
    rowData =[
      { ename: "Rahul", age:"28", salary:"25000", designation:"Senior Software Engineer"},
      { ename: "Ranjith", age:"25", salary:"25000", designation:"Junior Software Engineer" }]
  
  
}  

