export class Order {
  private _priority: Priority;
  constructor(data: { priority: string }) {
    this._priority = new Priority(data.priority);
  }

  public get priority() {
    return this._priority;
  }

  public set priority(aPriority: Priority) {
    this._priority = aPriority;
  }

  public get priorityString() {
    return this._priority.toString();
  }
  public set priorityString(aString: string) {
    this._priority = new Priority(aString);
  }
}

export class Priority {
  private _value: string;
  constructor(value: string | Priority) {
    if (value instanceof Priority) return value;
    if (Priority.legalValues().includes(value)) this._value = value;
    else throw new Error(`<${value}> is Invalid Priority`);
  }
  toString() {
    return this._value;
  }
  private get _index() {
    return Priority.legalValues().findIndex((s) => s === this._value);
  }
  public static legalValues() {
    return ['low', 'normal', 'high', 'rush'];
  }
  equals(other: Priority) {
    return this._index === other._index;
  }
  higherThan(other: Priority) {
    return this._index > other._index;
  }
  lowerThan(other: Priority) {
    return this._index < other._index;
  }
}
