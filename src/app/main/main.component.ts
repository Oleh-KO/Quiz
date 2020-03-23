import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  answers = [0, 0, 0];

  firstA: boolean = true;
  firstB: boolean = true;
  secondA: boolean = false;
  secondB: boolean = false;
  thirdA: boolean = false;
  thirdB: boolean = false;
  progressBarA;
  progressBarB;
  progressBarC;

  elementA;
  elementB;
  elementC;
  elementD;

  submit;
  radA;
  radB;
  radC;
  radD;

  constructor() { }

  SubmitQuestion() {

    this.elementA = document.getElementById("radioA") as HTMLInputElement;
    this.elementB = document.getElementById("radioB") as HTMLInputElement;
    this.elementC = document.getElementById("radioC") as HTMLInputElement;
    this.submit = document.getElementById("submit") as HTMLInputElement;
    this.radA = document.getElementsByClassName("radA")[0] as HTMLElement;
    this.radB = document.getElementsByClassName("radB")[0] as HTMLElement;
    this.radC = document.getElementsByClassName("radC")[0] as HTMLElement;

    this.progressBarA = document.getElementsByClassName("progressA")[0] as HTMLInputElement;
    this.progressBarB = document.getElementsByClassName("progressB")[0] as HTMLInputElement;
    this.progressBarC = document.getElementsByClassName("progressC")[0] as HTMLInputElement;

    if (this.elementA.checked !== false || this.elementB.checked !== false || this.elementC.checked !== false) {
      this.radA.style.color = "green";
      this.radB.style.color = "red";
      this.radC.style.color = "red";
      this.progressBarA.style.backgroundColor = "red";
    }

    console.log(this.elementA.checked, 'elem');

    if (this.elementA.checked == true) {
      this.progressBarA.style.backgroundColor = "green";
    }

    // if (this.elementA.checked !== true) {
    //   this.progressBarA.style.backgroundColor = "red";

    // } 
    // else {
    //   this.progressBarA.style.backgroundColor = "green";

    // }

  }

  NextQuestion() {
    this.elementA = document.getElementById("radioA") as HTMLInputElement;
    this.elementB = document.getElementById("radioB") as HTMLInputElement;
    this.elementC = document.getElementById("radioC") as HTMLInputElement;
    this.progressBarA = document.getElementsByClassName("progressA")[0] as HTMLInputElement;

    if (this.elementA.checked !== true) {
      this.progressBarA.style.backgroundColor = "red";
    }

    if (this.elementA.checked == false && this.elementB.checked == false && this.elementC.checked == false) {
      this.progressBarA.style.backgroundColor = "gray";
      console.log('gray1');
      this.answers[0] += 1;
    }

    // else {
    //   this.progressBarA.style.backgroundColor = "green";

    // }
    this.firstA = false;
    this.firstB = false;
    this.secondA = true;
    this.secondB = true;

  }

  SubmitQuestionTwo() {
    this.elementA = document.getElementById("radioA") as HTMLInputElement;
    this.elementB = document.getElementById("radioB") as HTMLInputElement;
    this.elementC = document.getElementById("radioC") as HTMLInputElement;
    this.elementD = document.getElementById("radioD") as HTMLInputElement;

    this.radD = document.getElementsByClassName("radD")[0] as HTMLElement;
    this.progressBarB = document.getElementsByClassName("progressB")[0] as HTMLInputElement;

    if (this.elementA.checked !== false || this.elementB.checked !== false || this.elementC.checked !== false || this.elementD.checked !== false) {
      this.radD.style.border = "4px solid green";
      this.radD.style.borderRadius = "12px";

    }

    if (this.elementD.checked !== true) {
      this.progressBarB.style.backgroundColor = "red";

    }
    // else {
    //   this.progressBarB.style.backgroundColor = "green";

    // }


  }

  NextQuestionTwo() {
    this.thirdA = true;
    this.thirdB = true;
    this.secondA = false;
    this.secondB = false;

    this.elementA = document.getElementById("radioA") as HTMLInputElement;
    this.elementB = document.getElementById("radioB") as HTMLInputElement;
    this.elementC = document.getElementById("radioC") as HTMLInputElement;
    this.elementD = document.getElementById("radioD") as HTMLInputElement;
    this.progressBarB = document.getElementsByClassName("progressB")[0] as HTMLInputElement;

    if (this.elementD.checked !== true) {
      this.progressBarB.style.backgroundColor = "red";
    }

    if (this.elementA.checked == false && this.elementB.checked == false && this.elementC.checked == false) {
      this.progressBarB.style.backgroundColor = "gray";
      this.answers[1] += 1;

    }
    

    // else {
    //   this.progressBarB.style.backgroundColor = "green";

    // }

  }

  SubmitQuestionThree() {
    this.elementA = document.getElementById("radioA") as HTMLInputElement;
    this.elementB = document.getElementById("radioB") as HTMLInputElement;
    this.elementC = document.getElementById("radioC") as HTMLInputElement;
    this.submit = document.getElementById("submit") as HTMLInputElement;
    this.radA = document.getElementsByClassName("radA")[0] as HTMLElement;
    this.radB = document.getElementsByClassName("radB")[0] as HTMLElement;
    this.radC = document.getElementsByClassName("radC")[0] as HTMLElement;

    this.progressBarA = document.getElementsByClassName("progressA")[0] as HTMLInputElement;
    this.progressBarB = document.getElementsByClassName("progressB")[0] as HTMLInputElement;
    this.progressBarC = document.getElementsByClassName("progressC")[0] as HTMLInputElement;

    if (this.elementA.checked !== false || this.elementB.checked !== false || this.elementC.checked !== false) {
      this.radA.style.color = "red";
      this.radB.style.color = "green";
      this.radC.style.color = "red";
      this.progressBarA.style.backgroundColor = "green";

    }

    if (this.elementB.checked !== true) {
      this.progressBarC.style.backgroundColor = "red";

    }
    // else {
    //   this.progressBarC.style.backgroundColor = "green";
    // }

  }

  NextQuestionThree() {
    this.elementA = document.getElementById("radioA") as HTMLInputElement;
    this.elementB = document.getElementById("radioB") as HTMLInputElement;
    this.elementC = document.getElementById("radioC") as HTMLInputElement;
    this.progressBarC = document.getElementsByClassName("progressC")[0] as HTMLInputElement;

    if (this.elementA.checked == false && this.elementB.checked == false && this.elementC.checked == false) {
      this.progressBarC.style.backgroundColor = "gray";
      this.answers[2] += 1;

    }

    if (this.elementB.checked !== true) {
      this.progressBarC.style.backgroundColor = "red";

    }

    for (let index = 0; index < this.answers.length; index++) {
      if (this.answers[index] > 0) {
        if (index = 0) {
          this.thirdA = false;
          this.thirdB = false;
          this.firstA = true;
          this.firstB = true;
        } else if (index = 1) {
          this.thirdA = false;
          this.thirdB = false;
          this.secondA = true;
          this.secondB = true;
        }
      }

    }
    // else {
    //   this.progressBarC.style.backgroundColor = "green";

    // }
  }

  ngOnInit(): void {
  }

}
