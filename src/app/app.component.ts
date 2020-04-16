import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  x = 12;
  isUnchanged = true;
  justClicked() {
    this.password = 'Mypassword!!!';
    setTimeout('1000');
    console.log('btn clicked');
    console.log(`
    About to generate a password with the following:
    Includes letters: ${this.includeLetters}
    Includes numbers: ${this.includeNumbers}
    Includes symbols: ${this.includeSymbols}


    `);
  }

  justClicked2() {
    setTimeout(() => {
      this.password = 'clicked2!!!';
    }, 1000);

    console.log('btn clicked');
  }

  chk01() {
    console.log('Chk01 clicked' + this.x);
    this.isUnchanged = !this.isUnchanged;
  }

  getName() {
    return 'grrgrg';
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
    console.log(this.includeLetters);
    // this.password = this.includeLetters.toString();
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
    console.log(this.includeNumbers);
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
    console.log(this.includeSymbols);
  }

  // getPassword(){
  //   return this.password + 111;
  // }
}
