export class Person {
  private _name: string;
  private _courses: Course[];

  constructor(name: string) {
    this._name = name;
    this._courses = [];
  }

  public get name() {
    return this._name;
  }

  public get courses() {
    return [...this._courses];
  }

  addCourse(aCourse: Course) {
    this._courses.push(aCourse);
  }

  removeCourse(
    aCourse: Course,
    fnIfAbsent = () => {
      throw new RangeError();
    },
  ) {
    const index = this._courses.indexOf(aCourse);
    if (index === -1) fnIfAbsent();
    else this._courses.splice(index, 1);
  }
}

export class Course {
  private _name: string;
  private _isAdvanced: boolean;

  constructor(name: string, isAdvanced: boolean) {
    this._name = name;
    this._isAdvanced = isAdvanced;
  }

  public get name() {
    return this._name;
  }
  public get isAdvanced() {
    return this._isAdvanced;
  }
}
