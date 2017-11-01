'use strict';

export class svgen_dq {
  constructor(Ualpha, Ubeta) {
    this.Ualpha = Ualpha;
    this.Ubeta = Ubeta;
    this.Ta = 0;
    this.Tb = 0;
    this.Tc = 0;
  }

  resolve() {
    let Va = 0;
    let Vb = 0;
    let Vc = 0;

    let sector = 0;
    let t1 = 0;
    let t2 = 0;

    Va = this.Ubeta;
    Vb = (-1 / 2) * this.Ubeta + (Math.sqrt(3) / 2) * this.Ualpha;
    Vc = (-1 / 2) * this.Ubeta - (Math.sqrt(3) / 2) * this.Ualpha;

    // sector determination
    if (Va > 0) { sector = 1; }
    if (Vb > 0) { sector = sector + 2; }
    if (Vc > 0) { sector = sector + 4; }

    // X,Y,Z (Va,Vb,Vc) calculations
    Va = this.Ubeta;
    Vb = (1 / 2) * this.Ubeta + (Math.sqrt(3) / 2) * this.Ualpha;
    Vc = (1 / 2) * this.Ubeta - (Math.sqrt(3) / 2) * this.Ualpha;

    switch (sector) {
      case 0:
        this.Ta = 1 / 2;
        this.Tb = 1 / 2;
        this.Tc = 1 / 2;
        break;
      case 1:
        t1 = Vc;
        t2 = Vb;
        this.Tb = (1 / 2) * (1 - t1 - t2);
        this.Ta = this.Tb + t1;
        this.Tc = this.Ta + t2;
        break;
      case 2:
        t1 = Vb;
        t2 = -Va;
        this.Ta = (1 / 2) * (1 - t1 - t2);
        this.Tc = this.Ta + t1;
        this.Tb = this.Tc + t2;
        break;
      case 3:
        t1 = -Vc;
        t2 = Va;
        this.Ta = (1 / 2) * (1 - t1 - t2);
        this.Tb = this.Ta + t1;
        this.Tc = this.Tb + t2;
        break;
      case 4:
        t1 = -Va;
        t2 = Vc;
        this.Tc = (1 / 2) * (1 - t1 - t2);
        this.Tb = this.Tc + t1;
        this.Ta = this.Tb + t2;
        break;
      case 5:
        t1 = Va;
        t2 = -Vb;
        this.Tb = (1 / 2) * (1 - t1 - t2);
        this.Tc = this.Tb + t1;
        this.Ta = this.Tc + t2;
        break;
      case 6:
        t1 = -Vb;
        t2 = -Vc;
        this.Tc = (1 / 2) * (1 - t1 - t2);
        this.Ta = this.Tc + t1;
        this.Tb = this.Ta + t2;
        break;
    }

    this.Ta = 2 * (this.Ta - 1 / 2);
    this.Tb = 2 * (this.Tb - 1 / 2);
    this.Tc = 2 * (this.Tc - 1 / 2);
  }

  result() {
    return { Ta: this.Ta, Tb: this.Tb, Tc: this.Tc };
  }
}
