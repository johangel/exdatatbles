import { Component, OnInit } from '@angular/core';
 

@Component({
  selector: 'app-datatablenet',
  templateUrl: './datatable.net.component.html',
  styleUrls: ['./datatable.net.component.css']
})
export class DatatableNetComponent implements OnInit {

    constructor() { }

    ngOnInit(){
      $('#example').DataTable();
  }
}
