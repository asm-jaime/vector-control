'use strict';

export const svgen_dq = (Ualpha, Ubeta) => {//{{{
  let Va = 0;
  let Vb = 0;
  let Vc = 0;

  let t1 = 0;
  let t2 = 0;

  let sector = 0;

  const result = { Ta: 0, Tb: 0, Tc: 0 };

  // iclark
  Va = Ubeta;
  Vb = (-1/2) * Ubeta + (Math.sqrt(3)/2) * Ualpha;
  Vc = (-1/2) * Ubeta - (Math.sqrt(3)/2) * Ualpha;

  // sector determination
  if (Va > 0) { sector = 1; }
  if (Vb > 0) { sector = sector + 2; }
  if (Vc > 0) { sector = sector + 4; }

  // X,Y,Z (Va,Vb,Vc) calculations
  Va = Ubeta;
  Vb = (1/2) * Ubeta + (Math.sqrt(3)/2) * Ualpha;
  Vc = (1/2) * Ubeta - (Math.sqrt(3)/2) * Ualpha;

  switch (sector) {
  case 0:
    result.Ta = 1/2;
    result.Tb = 1/2;
    result.Tc = 1/2;
    break;
  case 1:
    t1 = Vc;
    t2 = Vb;
    result.Tb = (1/2) * (1 - t1 - t2);
    result.Ta = result.Tb + t1;
    result.Tc = result.Ta + t2;
    break;
  case 2:
    t1 = Vb;
    t2 = -Va;
    result.Ta = (1/2) * (1 - t1 - t2);
    result.Tc = result.Ta + t1;
    result.Tb = result.Tc + t2;
    break;
  case 3:
    t1 = -Vc;
    t2 = Va;
    result.Ta = (1/2) * (1 - t1 - t2);
    result.Tb = result.Ta + t1;
    result.Tc = result.Tb + t2;
    break;
  case 4:
    t1 = -Va;
    t2 = Vc;
    result.Tc = (1/2) * (1 - t1 - t2);
    result.Tb = result.Tc + t1;
    result.Ta = result.Tb + t2;
    break;
  case 5:
    t1 = Va;
    t2 = -Vb;
    result.Tb = (1/2) * (1 - t1 - t2);
    result.Tc = result.Tb + t1;
    result.Ta = result.Tc + t2;
    break;
  case 6:
    t1 = -Vb;
    t2 = -Vc;
    result.Tc = (1/2) * (1 - t1 - t2);
    result.Ta = result.Tc + t1;
    result.Tb = result.Ta + t2;
    break;
  }

  result.Ta = 2 * (result.Ta - 1/2);
  result.Tb = 2 * (result.Tb - 1/2);
  result.Tc = 2 * (result.Tc - 1/2);
  return result;
};//}}}
