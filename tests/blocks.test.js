'use strict';

// import chai from 'chai';

// const expect = chai.expect;

import { clark, iclark } from '../blocks/clark.js';
import { park, ipark } from '../blocks/park.js';
import { svgen_dq } from '../blocks/svgen_dq.js';

// ========== test clark

const curr_phase = {IsA: 0, IsB: 1, IsC: -1};
const curr_dq = { Qs: 0.25, Ds: 0 };
const ph = 1;

describe('tr clark', function() { //{{{
  it.skip('clark', function() {
    const res = clark(curr_phase.IsA, curr_phase.IsB);
    console.log(res);
  });
  it.skip('iclark', function() {
    const res_clark = clark(curr_phase.IsA, curr_phase.IsB);
    const res = iclark(res_clark.Isa, res_clark.Isb);
    console.log(res);
  });
}); //}}}

describe('tr park', function() { //{{{
  console.log('curr phase: ', curr_phase);
  const curr_clark = clark(curr_phase.IsA, curr_phase.IsB);
  console.log('curr clark: ', curr_clark);
  it.skip('park', function() {
    const res = park(curr_clark.Isa, curr_clark.Isb, ph);
    console.log(res);
  });
  it.skip('ipark', function() {
    const res_park = park(curr_clark.Isa, curr_clark.Isb, ph);
    const res = ipark(res_park.Isd, res_park.Isq, ph);
    console.log(res);
  });
}); //}}}

describe('space vector generator', function() { //{{{
  it('svgen_dq', function() {
    const res_ipark = ipark(curr_dq.Qs, curr_dq.Ds, ph);
    const res = svgen_dq(res_ipark.Isa, res_ipark.Isb);
    console.log(res);
  });
}); //}}}
