import * as _ from 'lodash';

type TCustomerData = {
  [key: string]: {
    name: string;
    id: string;
    usages: {
      [key: string]: {
        [key: string]: number;
      };
    };
  };
};

class CustomerData {
  private _data: TCustomerData;

  constructor(data: TCustomerData) {
    this._data = data;
  }

  setUsage(customerId: string, year: string, month: string, amount: number) {
    this._data[customerId].usages[year][month] = amount;
  }

  usage(customerId: string, year: string, month: string) {
    return this._data[customerId].usages[year][month];
  }

  public get rawData() {
    return _.cloneDeep(this._data);
  }
}

const customerData = new CustomerData({
  '1920': {
    name: 'Martin Fowler',
    id: '1920',
    usages: {
      '2016': {
        '1': 50,
        '2': 55,
      },
      '2015': {
        '1': 70,
        '2': 63,
      },
    },
  },
  '38673': {
    name: 'Nill Ford',
    id: '38673',
    usages: {
      '2016': {
        '1': 50,
        '2': 55,
      },
      '2015': {
        '1': 70,
        '2': 63,
      },
    },
  },
});

export function getCustomerData() {
  return customerData;
}
