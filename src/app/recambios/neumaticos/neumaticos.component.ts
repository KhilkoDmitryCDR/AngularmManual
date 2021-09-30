import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";


@Component({
  selector: 'app-neumaticos',
  templateUrl: './neumaticos.component.html',
  styleUrls: ['./neumaticos.component.scss']
})
export class NeumaticosComponent implements OnInit {


  @Input() item!: string;
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  constructor(svc: DataHandlerService) {
    svc.consoleText('Hello world');
  }

  ngOnInit(): void {
  }




}
