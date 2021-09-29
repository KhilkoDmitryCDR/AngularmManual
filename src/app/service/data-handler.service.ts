import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor() {
  }

  consoleText(arg: string) {
    console.log(arg)

  }
}
