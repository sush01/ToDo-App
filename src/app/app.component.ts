import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ALLOWED_PASSWORD_LENGTH_VALUE = 1000;
  title = 'first-angular-project';
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password: string = ``;
  onChangeLength(event: any) {
    const value = event?.target.value;
    const parsedValue = parseInt(value);
    this.length = 0;
    if (!isNaN(parsedValue) && parsedValue <= this.ALLOWED_PASSWORD_LENGTH_VALUE) {
      this.length = parsedValue;
    }
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick() {
    const numbers = `1234567890`;
    const letters = `abcdefghijklmnopqrstuvwxyz`
    const symbols = `!@#€%&*()`;

    let validChars = ``;
    if (this.includeLetters) {
      validChars += letters;
    }

    if (this.includeNumbers) {
      validChars += numbers;
    }
    console.log(validChars);
    if (this.includeSymbols) {
      validChars += symbols;
    }
    console.log(validChars.length)

    let generatedPassword = ``;
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      console.log(Math.random())
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }

}
