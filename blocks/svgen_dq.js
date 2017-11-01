'use strict';

export class svgen_dq {//{{{
  constructor(Ualpha, Ubeta) {
    this.in = Object.create(null);
    this.in.Ualpha = Ualpha;
    this.in.Ubeta = Ubeta;

    this.out = Object.create(null);
    this.out.Ta = 0;
    this.out.Tb = 0;
    this.out.Tc = 0;
  }

  resolve() {
    let Va = 0;
    let Vb = 0;
    let Vc = 0;

    let sector = 0;
    let t1 = 0;
    let t2 = 0;

    Va = this.in.Ubeta;
    Vb = (-1 / 2) * this.in.Ubeta + (Math.sqrt(3) / 2) * this.in.Ualpha;
    Vc = (-1 / 2) * this.in.Ubeta - (Math.sqrt(3) / 2) * this.in.Ualpha;

    // sector determination
    if (Va > 0) { sector = 1; }
    if (Vb > 0) { sector = sector + 2; }
    if (Vc > 0) { sector = sector + 4; }

    // X,Y,Z (Va,Vb,Vc) calculations
    Va = this.in.Ubeta;
    Vb = (1 / 2) * this.in.Ubeta + (Math.sqrt(3) / 2) * this.in.Ualpha;
    Vc = (1 / 2) * this.in.Ubeta - (Math.sqrt(3) / 2) * this.in.Ualpha;

    switch (sector) {
      case 0:
        this.out.Ta = 1 / 2;
        this.out.Tb = 1 / 2;
        this.out.Tc = 1 / 2;
        break;
      case 1:
        t1 = Vc;
        t2 = Vb;
        this.out.Tb = (1 / 2) * (1 - t1 - t2);
        this.out.Ta = this.out.Tb + t1;
        this.out.Tc = this.out.Ta + t2;
        break;
      case 2:
        t1 = Vb;
        t2 = -Va;
        this.out.Ta = (1 / 2) * (1 - t1 - t2);
        this.out.Tc = this.out.Ta + t1;
        this.out.Tb = this.out.Tc + t2;
        break;
      case 3:
        t1 = -Vc;
        t2 = Va;
        this.out.Ta = (1 / 2) * (1 - t1 - t2);
        this.out.Tb = this.out.Ta + t1;
        this.out.Tc = this.out.Tb + t2;
        break;
      case 4:
        t1 = -Va;
        t2 = Vc;
        this.out.Tc = (1 / 2) * (1 - t1 - t2);
        this.out.Tb = this.out.Tc + t1;
        this.out.Ta = this.out.Tb + t2;
        break;
      case 5:
        t1 = Va;
        t2 = -Vb;
        this.out.Tb = (1 / 2) * (1 - t1 - t2);
        this.out.Tc = this.out.Tb + t1;
        this.out.Ta = this.out.Tc + t2;
        break;
      case 6:
        t1 = -Vb;
        t2 = -Vc;
        this.out.Tc = (1 / 2) * (1 - t1 - t2);
        this.out.Ta = this.out.Tc + t1;
        this.out.Tb = this.out.Ta + t2;
        break;
    }

    this.out.Ta = 2 * (this.out.Ta - 1 / 2);
    this.out.Tb = 2 * (this.out.Tb - 1 / 2);
    this.out.Tc = 2 * (this.out.Tc - 1 / 2);
  }

  result() {
    return { Ta: this.out.Ta, Tb: this.out.Tb, Tc: this.out.Tc };
  }
}//}}}
