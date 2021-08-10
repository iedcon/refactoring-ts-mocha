import { expect } from 'chai';
import { Account, AccountType } from '../../src/ch08/moveFunction2';

describe('move function 2', function () {
  context('no over drawn', () => {
    const daysOverDrawn = 0;
    it('not premium', () => {
      const account = new Account(daysOverDrawn, new AccountType(false));
      expect(account.bankCharge).to.eql(4.5);
    });
    it('premium', () => {
      const account = new Account(daysOverDrawn, new AccountType(false));
      expect(account.bankCharge).to.eql(4.5);
    });
  });
  context('not premium over drawn always charge X1.75', () => {
    it('daysOverDrawn lte 7', () => {
      const account = new Account(4, new AccountType(false));
      expect(account.bankCharge).to.eql(11.5);
    });
    it('daysOverDrawn gt 7', () => {
      const account = new Account(10, new AccountType(false));
      expect(account.bankCharge).to.eql(22);
    });
  });
  context('premium over drawn charge diff with duration', () => {
    it('daysOverDrawn lte 7 always +10', () => {
      const account = new Account(4, new AccountType(true));
      expect(account.bankCharge).to.eql(14.5);
    });
    it('daysOverDrawn gt 7 diff with duration', () => {
      const account = new Account(10, new AccountType(true));
      expect(account.bankCharge).to.eql(17.05);
    });
    it('daysOverDrawn gt 7 diff with duration', () => {
      const account = new Account(15, new AccountType(true));
      expect(account.bankCharge).to.eql(21.3);
    });
  });
});
