import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-calculator';
  display:number = 0;
  myFunc = 'NoFunction';

  tempDisp = 'noNumber';
  dotCounter = 0;

  firstNumber = 0;
  secondNumber = 0;

  handleBtnClick(value:string,func:any){
    if(func=='number'){
      this.updateNumber(value)
    }
    else{
      this.handleFunction(value)
    }
  }

  updateNumber(val:string){
    if(val=='.') this.handleDot();
    else{
      
      if(this.tempDisp == 'noNumber'){
        this.tempDisp = val
      }

      else{
        this.tempDisp += val
      }
      this.display = parseFloat(this.tempDisp)
    }
    // console.log(this.display); 
  }

  //function handling

  handleFunction(val:any){
    if(val=='C'){
      this.firstNumber=0
      this.secondNumber=0
      this.myFunc = 'NoFunction'
      this.clear()
    }

    else if(val=='='){
      if(this.myFunc=='NoFunction'){
        this.firstNumber = this.display
      }
      else{
        this.secondNumber = this.display;
        this.firstNumber = this.equals();
        this.myFunc = 'NoFunction'
      }
      
    }

    else if(this.myFunc == 'NoFunction'){
      this.firstNumber = this.display;
      this.clear();
      this.myFunc = val;
    }

    

    else{
      this.secondNumber = this.display;
      this.firstNumber = this.equals()
      this.myFunc = val;
      this.clear()
      
    }
  }

  //clear Function
  clear(){
    this.display = 0;
    this.dotCounter = 0;
    this.tempDisp = 'noNumber';
  }

  equals():number{
    if(this.myFunc=='+') this.display = this.firstNumber+this.secondNumber;
    else if(this.myFunc=='-') this.display = this.firstNumber-this.secondNumber;
    else if(this.myFunc=='*') this.display = this.firstNumber*this.secondNumber;
    else if(this.myFunc=='/') {
      if(this.secondNumber == 0) alert("Can't divide by zero")
      else this.display = this.firstNumber/this.secondNumber;
    }
    else if(this.myFunc=='%') {
      if(this.secondNumber == 0) alert("Modulo by zero is undefined")
      else this.display = this.firstNumber%this.secondNumber;
    }
    else this.display = this.firstNumber;
    return this.display;

  }
  // Float handling
  handleDot(){
    if(this.tempDisp === 'noNumber'){
      this.tempDisp = '0.'
    }
    else if(this.dotCounter===0){
      this.tempDisp += '.' 
    }
    this.display = parseFloat(this.tempDisp)
    this.dotCounter++;
    console.log(this.display);
  }
}
