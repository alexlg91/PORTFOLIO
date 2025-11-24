import { Component, signal } from '@angular/core';
import { Navbar } from "./components/navbar/navbar";

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
  imports: [Navbar]
})
export class App {

}
