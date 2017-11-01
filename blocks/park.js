'use strict';

export class park { //{{{
  constructor(Isa, Isb, ph) {
    this.in = Object.create(null);
    this.in.Isa = Isa;
    this.in.Isb = Isb;
    this.in.ph = ph;

    this.out = Object.create(null);
    this.out.Isd = 0;
    this.out.Isq = 0;
  }

  resolve() {
    this.out.Isd =
      this.in.Isa * Math.cos(this.in.ph) +
      this.in.Isb * Math.sin(this.in.ph);
    this.out.Isq =
      this.in.Isb * Math.cos(this.in.ph) -
      this.in.Isa * Math.sin(this.in.ph);
  }

  result() {
    return { Isd: this.out.Isd, Isq: this.out.Isq };
  }
} //}}}

export class ipark { //{{{
  constructor(Isd, Isq, ph) {
    this.in = Object.create(null);
    this.in.Isd = Isd;
    this.in.Isq = Isq;
    this.in.ph = ph;

    this.out = Object.create(null);
    this.out.Isa = 0;
    this.out.Isb = 0;
  }

  resolve() {
    this.out.Isa =
      this.in.Isd * Math.cos(this.in.ph) -
      this.in.Isq * Math.sin(this.in.ph);
    this.out.Isb =
      this.in.Isd * Math.sin(this.in.ph) +
      this.in.Isq * Math.cos(this.in.ph);
  }

  result() {
    return { Isa: this.out.Isa, Isb: this.out.Isb };
  }
} //}}}
