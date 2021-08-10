interface Station {
  name: string;
  readings: { temp: number; time: string }[];
}

export class NumberRange {
  private data: { min: number; max: number };

  constructor(min: number, max: number) {
    this.data = { min, max };
  }

  public get min() {
    return this.data.min;
  }
  public get max() {
    return this.data.max;
  }

  public equal(arg: NumberRange) {
    return this.min === arg.min && this.max === arg.max;
  }
}

export function readingsOutsideRange(station: Station, range: NumberRange) {
  return station.readings.filter(
    (r) => r.temp < range.min || r.temp > range.max,
  );
}
