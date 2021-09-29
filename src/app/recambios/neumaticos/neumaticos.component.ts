import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";

@Component({
  selector: 'app-neumaticos',
  templateUrl: './neumaticos.component.html',
  styleUrls: ['./neumaticos.component.scss']
})
export class NeumaticosComponent implements OnInit {

  constructor(svc: DataHandlerService) {
    svc.consoleText('Hello world');
  }

  ngOnInit(): void {
  }

}
