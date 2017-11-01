'use strict';

export class clark {//{{{
  constructor(IsA, IsB) {
    this.IsA = IsA;
    this.IsB = IsB;
    this.Isa = 0;
    this.Isb = 0;
  }

  resolve() {
    this.Isa = this.IsA;
    this.Isb = 1 / Math.sqrt(3) * (this.IsA + 2 * this.IsB);
  }

  result() {
    return {Isa: this.Isa, Isb: this.Isb};
  }
}//}}}

export class iclark {//{{{
  constructor(Isa, Isb) {
    this.input.Isa = Isa;
    this.input.Isb = Isb;
    this.output.IsA = 0;
    this.output.IsB = 0;
    this.output.IsC = 0;
  }

  resolve() {
    this.IsA = this.Isa;
    this.IsB = (Math.sqrt(3) / 2) * this.Isb - (1 / 2) * this.Isa;
    this.IsC = (-1 / 2) * this.Isa - (Math.sqrt(3) / 2) * this.Isb;
  }

  result() {
    return {IsA: this.IsA, IsB: this.IsB, IsC: this.IsC};
  }
}//}}}
