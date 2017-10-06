'use strict';

export const clark = (IsA, IsB) => {
  const result = {Isa: 0, Isb: 0};
  result.Isa = IsA;
  result.Isb = 1/Math.sqrt(3)*(IsA + 2*IsB);
  return result;
};

export const iclark = (Isa, Isb) => {
  const result = {IsA: 0, IsB: 0, IsC: 0};
  result.IsA = Isa;
  result.IsB = (Math.sqrt(3)/2)*Isb - (1/2)*Isa;
  result.IsC = (-1/2)*Isa - (Math.sqrt(3)/2)*Isb;
  return result;
};
