'use strict';

import chai from 'chai';

const expect = chai.expect;

import { clark, iclark } from '../blocks/clark.js';
import { park, ipark } from '../blocks/park.js';
import { svgen_dq } from '../blocks/svgen_dq.js';
import { ramp_gen } from '../blocks/ramp_gen.js';

// ========== test clark

const this_phase = {IsA: 0, IsB: 1, IsC: -1};
const this_dq = { Qs: 0.25, Ds: 0 };
const ph = 1;

describe('clark', function() { //{{{
  it('clark+iclark', function() {
    const this_clark = new clark();
    this_clark.in.IsA = this_phase.IsA;
    this_clark.in.IsB = this_phase.IsB;
    this_clark.resolve();

    const this_iclark = new iclark();
    this_iclark.in.Isa = this_clark.out.Isa;
    this_iclark.in.Isb = this_clark.out.Isb;
    this_iclark.resolve();

    expect(this_iclark.result()).to.deep.equal(this_phase);
  });
}); //}}}

describe('park', function() { //{{{
  it('park+ipark', function() {
    const this_clark = new clark(this_phase.IsA, this_phase.IsB);
    this_clark.resolve();

    const this_park = new park();
    this_park.in.Isa = this_clark.out.Isa;
    this_park.in.Isb = this_clark.out.Isb;
    this_park.in.ph = ph;
    this_park.resolve();

    const this_ipark = new ipark();
    this_ipark.in.Isd = this_park.out.Isd;
    this_ipark.in.Isq = this_park.out.Isq;
    this_ipark.in.ph = ph;
    this_ipark.resolve();

    expect(this_ipark.result()).to.deep.equal(this_clark.result());
  });
}); //}}}

describe('space vector generator', function() { //{{{
  it('svgen_dq', function() {
    const this_ipark = new ipark(this_dq.Qs, this_dq.Ds, ph);
    this_ipark.resolve();

    const this_svgen = new svgen_dq(this_ipark.out.Isa, this_ipark.out.Isb);
    this_svgen.resolve();

    console.log('svgen: ', this_svgen.result());
  });
}); //}}}

describe('ramp generator', function() { //{{{
  it.skip('ramp_gen', function() {
    const this_ramp = new ramp_gen(1, 50);

    const log = [];
    for(let dt = 0; dt < 100; ++dt){
      this_ramp.resolve();
      log.push(this_ramp.result());
    }

    console.log(log);
  });
}); //}}}
