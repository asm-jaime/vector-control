'use strict';

export const park = (Isa, Isb, ph) => {
  const result = {Isd: 0, Isq: 0};
  result.Isd = Isa*Math.cos(ph)+Isb*Math.sin(ph);
  result.Isq = Isb*Math.cos(ph)-Isa*Math.sin(ph);
  return result;
};

export const ipark = (Isd, Isq, ph) => {
  const result = {Isa: 0, Isb: 0};
  result.Isa = Isd*Math.cos(ph)-Isq*Math.sin(ph);
  result.Isb = Isd*Math.sin(ph)+Isq*Math.cos(ph);
  return result;
};
