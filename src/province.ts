type ProvinceData = {
  name: string;
  demand: number;
  producers: ProducerData[] | Producer[];
  price: number;
};

type ProducerData = {
  name: string;
  cost: number;
  production: number;
};

export class Province {
  private _name: string;
  private _producers: Producer[];
  private _totalProduction: number;
  private _demand: number;
  private _price: number;

  constructor(doc: ProvinceData) {
    this._name = doc.name;
    this._producers = [];
    this._totalProduction = 0;
    this._demand = doc.demand;
    this._price = doc.price;
    doc.producers.forEach((d: Producer) =>
      this.addProducer(new Producer(this, d))
    );
  }

  addProducer(arg: Producer) {
    this._producers.push(arg);
    this._totalProduction += arg.production;
  }

  public get name() {
    return this._name;
  }
  public get producers() {
    return this._producers.slice();
  }
  public get totalProduction(): number {
    return this._totalProduction;
  }
  public set totalProduction(arg: number) {
    this._totalProduction = arg;
  }
  public get demand(): number {
    return this._demand;
  }
  public set demand(arg: number) {
    this._demand = arg;
  }
  public get price(): number {
    return this._price;
  }
  public set price(arg: number) {
    this._price = arg;
  }

  public get shortfall() {
    return this._demand - this.totalProduction;
  }
  public get profit() {
    return this.demandValue - this.demandCost;
  }
  public get demandValue() {
    return this.satisfiedDemand * this.price;
  }
  public get satisfiedDemand() {
    return Math.min(this._demand, this.totalProduction);
  }
  public get demandCost() {
    let remainingDemand = this.demand;
    let result = 0;
    this.producers
      .sort((a, b) => a.cost - b.cost)
      .forEach((p) => {
        const contribution = Math.min(remainingDemand, p.production);
        remainingDemand -= contribution;
        result += contribution * p.cost;
      });
    return result;
  }
}

export class Producer {
  private _province: Province;
  private _cost: number;
  private _name: string;
  private _production: number;

  constructor(aProvince: Province, data: ProducerData) {
    this._province = aProvince;
    this._cost = data.cost;
    this._name = data.name;
    this._production = data.production || 0;
  }

  public get name() {
    return this._name;
  }

  public get cost() {
    return this._cost;
  }
  public set cost(arg: number) {
    this._cost = arg;
  }

  public get production() {
    return this._production;
  }
  public set production(amount: number) {
    this._province.totalProduction += amount - this._production;
    this._production = amount;
  }
}
