'use strict';

export class park {//{{{
  constructor(Isa, Isb, ph) {
    this.Isa = Isa;
    this.Isb = Isb;
    this.ph = ph;
    this.Isd = 0;
    this.Isq = 0;
  }

  resolve() {
    this.Isd = this.Isa * Math.cos(this.ph) + this.Isb * Math.sin(this.ph);
    this.Isq = this.Isb * Math.cos(this.ph) - this.Isa * Math.sin(this.ph);
  }

  result() {
    return {Isd: this.Isd, Isq: this.Isq};
  }
}//}}}

export class ipark {//{{{
  constructor(Isd, Isq, ph) {
    this.Isd = Isd;
    this.Isq = Isq;
    this.ph = ph;
    this.Isa = 0;
    this.Isb = 0;
  }

  resolve() {
    this.Isa = this.Isd * Math.cos(this.ph) - this.Isq * Math.sin(this.ph);
    this.Isb = this.Isd * Math.sin(this.ph) + this.Isq * Math.cos(this.ph);
  }

  result() {
    return {Isa: this.Isa, Isb: this.Isb};
  }
}//}}}
