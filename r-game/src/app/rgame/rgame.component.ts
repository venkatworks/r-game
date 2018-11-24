import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rgame',
  templateUrl: './rgame.component.html',
  styleUrls: ['./rgame.component.scss']
})
export class RgameComponent implements OnInit {

  cells = [];
  robos = [".","1",".","1",".",".","2",".",".",".","3",".",".","3",".",".",".","1",".","1","."]

  constructor() { }

  ngOnInit() {
    for(let i=0;i<this.robos.length;i++){
      this.cells.push({
        cellIndex:i,
        robo:this.robos[i],
        status:false
      })
    }
  }

  

  onCellClick(cell) {
     // check is the move will conflict or not.
     console.log(cell);
     // current cell value
     // need to check with all the other cell
    
  }

}
