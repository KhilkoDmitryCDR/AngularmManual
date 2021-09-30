import {Component} from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currentItem = "Thursday";
  title = 'AngularFW';
  userName: string = "";
  response: any;
  items = ['item1', 'item2', 'item3', 'item4'];

  constructor(private http: HttpClient) {
  }


  addItem(newItem: string) {
    this.items.push(newItem);
  }


  search() {
    this.http.get('https://api.github.com/users/' + this.userName)
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
      })
  }



}
