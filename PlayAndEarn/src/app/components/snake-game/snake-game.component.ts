import { Component, OnInit, APP_BOOTSTRAP_LISTENER } from '@angular/core';
import * as snake from '../snake-game/snake.js';

declare function playGame(): any;
declare function myMethod(): any;

@Component({
  selector: 'app-snake-game',
  templateUrl: './snake-game.component.html',
  styleUrls: ['./snake-game.component.css']
})
export class SnakeGameComponent implements OnInit {
  cvs: HTMLElement;
  
  constructor() {
   
   }
   
  
  ngOnInit() {
    
    
    this.cvs = document.getElementById('snake');
    //this.cvs.textContent = '1111';    change cvs value

    
    
   
  }

  
     
  
  

}



