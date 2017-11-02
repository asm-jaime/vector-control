'use strict';

export class gen_sin { //{{{
  constructor(dt, freq, amplitude) {
    this.t = 0;

    this.in = Object.create(null);
    this.in.dt = dt;
    this.in.freq = freq;
    this.in.amplitude = amplitude;

    this.angle = 0;
    this.out = 0;
  }

  resolve() {
    const angle = 2 * Math.PI * (this.t % this.in.freq) / this.in.freq;
    this.out = this.in.amplitude * Math.sin(angle);

    this.t = this.t + this.in.dt;
  }

  result() {
    return { out: this.out };
  }
} //}}}
