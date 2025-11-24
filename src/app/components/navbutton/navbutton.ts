import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbutton',
  imports: [],
  templateUrl: './navbutton.html',
  styleUrl: './navbutton.css',
})
export class Navbutton {
    @Input() texte = "texte du bouton";
}
