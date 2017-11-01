'use strict';

export class clark { //{{{
  constructor(IsA, IsB) {
    this.in = Object.create(null);
    this.in.IsA = IsA;
    this.in.IsB = IsB;

    this.out = Object.create(null);
    this.out.Isa = 0;
    this.out.Isb = 0;
  }

  resolve() {
    this.out.Isa = this.in.IsA;
    this.out.Isb = 1 / Math.sqrt(3) * (this.in.IsA + 2 * this.in.IsB);
  }

  result() {
    return { Isa: this.out.Isa, Isb: this.out.Isb };
  }
} //}}}

export class iclark { //{{{
  constructor(Isa, Isb) {
    this.in = Object.create(null);
    this.in.Isa = Isa;
    this.in.Isb = Isb;

    this.out = Object.create(null);
    this.out.IsA = 0;
    this.out.IsB = 0;
    this.out.IsC = 0;
  }

  resolve() {
    this.out.IsA = this.in.Isa;
    this.out.IsB = (Math.sqrt(3) / 2) * this.in.Isb - (1 / 2) * this.in.Isa;
    this.out.IsC = (-1 / 2) * this.in.Isa - (Math.sqrt(3) / 2) * this.in.Isb;
  }

  result() {
    return { IsA: this.out.IsA, IsB: this.out.IsB, IsC: this.out.IsC };
  }
} //}}}
