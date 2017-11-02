'use strict';

export class pid {
  constructor(reference, feedback) {
    this.Err = 0;     // error between ref and fdb

    this.Kp = 1.3;    // proportional gain
    this.Ki = 0.02;   // integral gain
    this.Kc = 0.5;    // integral correction gain
    this.Kd = 1.05;   // derivative gain

    this.Ui = 0;      // integral output
    this.Ud = 0;      // derivative output
    this.Up = 0;      // proportional output
    this.Up_pre = 0;  // previous proportional output

    this.Satur_pre = 0; // pre-saturated output
    this.Satur_err = 0; // saturated difference

    this.out_max = 1;   // maximum output
    this.out_min = -1;  // minimum output

    this.in = Object.create(null);
    this.in.reference = reference;
    this.in.feedback = feedback;

    this.out = 0;     // PID output
  }

  resolve() {
    this.Err = this.in.reference - this.in.feedback;

    this.Up = this.Kp * this.Err;
    this.Ui = this.Ui + this.Ki * this.Up + this.Kc * this.Satur_err;

    this.Satur_pre = this.Up + this.Ui;

    /* Saturate the output */
    if (this.Satur_pre > this.out_max) {
      this.out = this.out_max;
    } else if (this.Satur_pre < this.out_min) {
      this.out = this.out_min;
    } else {
      this.out = this.Satur_pre;
    }

    this.Satur_err = this.out - this.Satur_pre;
    this.Up_pre = this.Up;
  }

  result() {
    return { out: this.out };
  }
}
