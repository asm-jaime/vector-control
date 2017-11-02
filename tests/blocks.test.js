'use strict';

import chai from 'chai';

const expect = chai.expect;

import { clark, iclark } from '../blocks/clark.js';
import { park, ipark } from '../blocks/park.js';
import { svgen_dq } from '../blocks/svgen_dq.js';
import { gen_ramp } from '../blocks/gen_ramp.js';
import { gen_sin } from '../blocks/gen_sin.js';
import { pid } from '../blocks/pid.js';

import { output, line } from 'd3node-vilog';

// ========== test clark

const this_phase = { IsA: 0, IsB: 1, IsC: -1 };
const this_dq = { Qs: 0.25, Ds: 0 };
const ph = 1;

describe('clark', function() { //{{{
  it.skip('clark+iclark', function() {
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
  it.skip('park+ipark', function() {
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

describe('generators', function() { //{{{
  it.skip('gen_ramp', function() {
    const this_ramp = new gen_ramp();
    this_ramp.in.dt = 1;
    this_ramp.in.freq = 50;
    this_ramp.in.amplitude = 1;

    const log = [];
    for (let dt = 0; dt < 100; ++dt) {
      this_ramp.resolve();
      log.push({ key: dt, value: this_ramp.result().pos });
    }
    output('./tests/gen_ramp.log', line({ data: log }));
  });

  it.skip('gen_sin', function() {
    const this_sin = new gen_sin(1, 50, 2);
    const log = [];
    for (let dt = 0; dt < 200; ++dt) {
      this_sin.resolve();
      log.push({ key: dt, value: this_sin.out });
    }
    output('./tests/gen_sin.log', line({ data: log }));
  });
}); //}}}

describe('regulators', function() { //{{{
  it('pid', function() {
    const this_ramp = new gen_ramp();
    this_ramp.in.dt = 1;
    this_ramp.in.freq = 100;
    this_ramp.in.amplitude = 1;

    const this_pid = new pid();
    this_pid.in.reference = 1;

    const log = [];
    for (let dt = 0; dt < 200; ++dt) {
      this_ramp.resolve();

      this_pid.in.feedback = this_ramp.result().pos;
      this_pid.resolve();
      log.push({ key: dt, value: this_pid.result().out });
    }

    output('./tests/pid.log', line({ data: log }));
  });
}); //}}}
