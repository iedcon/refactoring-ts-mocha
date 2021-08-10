import { expect } from 'chai';
import { Order, Priority } from '../../src/ch07/replacePrimitiveWithObject';

describe('replace primitive', function () {
  it('priority filter', function () {
    const priorityList = ['high', 'low', 'rush'];
    const orders = priorityList.map((priority) => new Order({ priority }));
    const highPriorityCount = orders.filter((o) =>
      o.priority.higherThan(new Priority('normal')),
    ).length;
    expect(highPriorityCount).equal(2);
  });
});
