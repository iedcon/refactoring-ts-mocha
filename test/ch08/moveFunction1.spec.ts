import { expect } from 'chai';
import { trackSummary } from '../../src/ch08/moveFunction1';

describe('move function 1', function () {
  it('calculate distance', function () {
    const points = [
      { lat: 37, lon: 128 },
      { lat: 35, lon: 129 },
      { lat: 39, lon: 131 },
    ];
    const result = trackSummary(points);
    // 대략적인 거리 측정
    expect(result.distance).to.be.within(446.65, 446.66);
  });
});
