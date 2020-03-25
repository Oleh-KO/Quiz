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
  check: boolean = false;
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

  toQuestionOne() {
    this.firstA = true;
    this.firstB = true;
    this.secondA = false;
    this.secondB = false;
    this.thirdA = false;
    this.thirdB = false;
  }

  toQuestionTwo() {
    this.firstA = false;
    this.firstB = false;
    this.secondA = true;
    this.secondB = true;
    this.thirdA = false;
    this.thirdB = false;
  }

  toQuestionThree() {
    this.firstA = false;
    this.firstB = false;
    this.secondA = false;
    this.secondB = false;
    this.thirdA = true;
    this.thirdB = true;
  }

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

    if (this.elementA.checked == true) {
      this.progressBarA.style.backgroundColor = "green";
    }

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
      this.answers[0] += 1;
    } else {
      this.answers[0] -= 1;
    }

    if (this.check === true) {
      for (let index = 0; index < this.answers.length; index++) {
        let a = index;
        if (this.answers[a] > 0) {
          if (a === 0) {
            this.thirdA = false;
            this.thirdB = false;
            this.firstA = true;
            this.firstB = true;
            return

          } else if (a === 1) {
            this.thirdA = false;
            this.thirdB = false;
            this.secondA = true;
            this.secondB = true;
            this.firstA = false;
            this.firstB = false;
            return
          } else if (a === 2) {
            this.thirdA = true;
            this.thirdB = true;
            this.firstA = false;
            this.firstB = false;
          }
        }
      }
    } else {
      this.firstA = false;
      this.firstB = false;
      this.secondA = true;
      this.secondB = true;
    }

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

    if (this.elementD.checked == true) {
      this.progressBarB.style.backgroundColor = "green";
    }

  }

  NextQuestionTwo() {

    this.elementA = document.getElementById("radioA") as HTMLInputElement;
    this.elementB = document.getElementById("radioB") as HTMLInputElement;
    this.elementC = document.getElementById("radioC") as HTMLInputElement;
    this.elementD = document.getElementById("radioD") as HTMLInputElement;
    this.progressBarB = document.getElementsByClassName("progressB")[0] as HTMLInputElement;

    if (this.elementD.checked == true) {
      this.progressBarB.style.backgroundColor = "green";
      this.answers[1] -= 1;
    } else {
      this.progressBarB.style.backgroundColor = "gray";
      this.answers[1] += 1;
    }

    if (this.elementD.checked !== true && this.elementA.checked == true || this.elementB.checked == true || this.elementC.checked == true) {
      this.progressBarB.style.backgroundColor = "red";
      this.answers[1] -= 2;
    }

    if (this.check === true) {

      for (let index = 0; index < this.answers.length; index++) {
        let a = index;
        if (this.answers[a] > 0) {
          if (a === 0) {
            this.thirdA = false;
            this.thirdB = false;
            this.firstA = true;
            this.firstB = true;
            return

          } else if (a === 1) {
            this.thirdA = false;
            this.thirdB = false;
            this.secondA = true;
            this.secondB = true;
            this.firstA = false;
            this.firstB = false;
            return
          } else if (a === 2) {
            this.thirdA = true;
            this.thirdB = true;
            this.secondA = false;
            this.secondB = false;
          }
        }
      }
    } else {
      this.thirdA = true;
      this.thirdB = true;
      this.secondA = false;
      this.secondB = false;
    }

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

    if (this.elementA.checked !== false || this.elementB.checked !== false || this.elementC.checked !== false || this.elementD.checked !== false) {
      this.radB.style.color = "green";
      this.radB.style.borderRadius = "12px";
    }

    if (this.elementB.checked !== true) {
      this.progressBarC.style.backgroundColor = "red";
    }

  }

  NextQuestionThree() {
    this.check = true;

    this.elementA = document.getElementById("radioA") as HTMLInputElement;
    this.elementB = document.getElementById("radioB") as HTMLInputElement;
    this.elementC = document.getElementById("radioC") as HTMLInputElement;
    this.progressBarC = document.getElementsByClassName("progressC")[0] as HTMLInputElement;

    if (this.elementB.checked !== true) {
      this.progressBarC.style.backgroundColor = "red";
    }

    if (this.elementA.checked == false && this.elementB.checked == false && this.elementC.checked == false) {
      this.progressBarC.style.backgroundColor = "gray";
      this.answers[2] += 1;
    } else {
      this.answers[2] -= 1;
    }

    if (this.elementB.checked == true) {
      this.progressBarC.style.backgroundColor = "green";
    }

    for (let index = 0; index < this.answers.length; index++) {
      let a = index;
      if (this.answers[a] > 0) {
        if (a === 0) {
          this.thirdA = false;
          this.thirdB = false;
          this.firstA = true;
          this.firstB = true;
          return

        } else if (a === 1) {
          this.thirdA = false;
          this.thirdB = false;
          this.secondA = true;
          this.secondB = true;
          this.firstA = false;
          this.firstB = false;
          return
        }
      }
    }
  }

  ngOnInit(): void {
  }

}
