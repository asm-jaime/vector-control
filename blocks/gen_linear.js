'use strict';

export class gen_linear {
  constructor(dt, points) {
    this.t = 0;
    this.i = 0;
    this.diff = 0;

    this.in = Object.create(null);
    this.in.dt = dt;
    this.in.points = [{val: 0, pos: 0}];
    this.in.points = points;

    this.out = 0.0;
  }

  resolve() {
    if (this.t === this.in.points[this.i].pos) {
      if (this.i > this.in.points.length - 2) {
        this.out = this.in.points[this.in.points.length - 1].val;
        this.t = this.t + this.in.dt;
        return;
      }

      this.diff =
        (this.in.points[this.i + 1].val - this.in.points[this.i].val) /
        (this.in.points[this.i + 1].pos - this.in.points[this.i].pos);

      this.out = this.in.points[this.i].val;
      this.i++;
    } else {
      this.out = this.out + this.diff;
    }

    this.t = this.t + this.in.dt;
  }

  result() {
    return { out: this.out };
  }
}
