import { Component, OnInit, AfterViewInit } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'hjapp-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  lstName: string[];
  constructor() { }

  ngOnInit() {
    this.lstName = ["hassanoor", "jamman", "Mondal"];
    
  }
  
  
  ShowAlert(h){
    alert("This is the message to show to " + JSON.stringify(h ));
  }

}
