import { assert, expect } from 'chai';
import {
  NumberRange,
  readingsOutsideRange,
} from '../../src/ch06/introduceParameterObject';

describe('readings', function () {
  const station = {
    name: 'ZB1',
    readings: [
      { temp: 47, time: '2016-11-10 09:10' },
      { temp: 53, time: '2016-11-10 09:20' },
      { temp: 58, time: '2016-11-10 09:30' },
      { temp: 53, time: '2016-11-10 09:40' },
      { temp: 51, time: '2016-11-10 09:50' },
    ],
  };
  const operatingPlan = {
    temperatureFloor: 50,
    temperatureCeiling: 55,
  };
  const range = new NumberRange(
    operatingPlan.temperatureFloor,
    operatingPlan.temperatureCeiling,
  );
  it('outside range', function () {
    const result = readingsOutsideRange(station, range);
    expect(result.length).equal(2);
  });
  it('range equal', function () {
    const newRange = new NumberRange(50, 55);
    expect(range.equal(newRange)).equal(true);
  });
});
