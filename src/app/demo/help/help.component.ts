import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hjapp-help',
  templateUrl: './help.component.html',
  styles: []
})
export class HelpComponent implements OnInit {
  name: string;
  @Input()
  public set custInput(v : string) {
    this.name = v;
  }

  @Output()
  myClick : EventEmitter<object> = new EventEmitter<object>();
  
  constructor() { }

  ngOnInit() {
    
  }

  ShowMe(){
    this.myClick.emit(Object(this.name));
  }

}
