import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rgame',
  templateUrl: './rgame.component.html',
  styleUrls: ['./rgame.component.scss']
})
export class RgameComponent implements OnInit {

  cells = [];
  robos = ["0","2","0","2","0","0","1","0","0","0","0","0","0","0","0","0","0","0","0","1","0","0","1","1"]

  constructor() { }

  ngOnInit() {
    for(let i=0;i<this.robos.length;i++){
      this.cells.push({
        cellIndex:i,
        robo:parseInt(this.robos[i]),
        status:false,
        range:{
          min:0,
          max:0
        }
      })
    }
  }

  checkBoundary(c,i){
    let sellCellRange = {
        min:parseInt(i)-parseInt(c.robo),
        max:parseInt(i)+parseInt(c.robo)
    }  
    
    for(var k=0; k <  this.cells.length; k++){      
      if(this.cells[k].robo != '0' && k !==i ){;
        let cellRange = { 
          min: k - parseInt(this.cells[k].robo),
          max: k + parseInt(this.cells[k].robo)
        }
        this.cells[k].range = {
          min:cellRange.min,
          max:cellRange.max
        }

        if(sellCellRange.min <= cellRange.min && sellCellRange.max >= cellRange.min){          
          this.cells[i].status = true
        }
  
        if(sellCellRange.min <= cellRange.max && sellCellRange.max >= cellRange.max){
          this.cells[i].status = true
        }
      }
    }
  }

  
}
