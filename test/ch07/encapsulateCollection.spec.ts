import { expect } from 'chai';
import { Person, Course } from '../../src/ch07/encapsulateCollection';

describe('encapsule collection', function () {
  let aPerson: Person;
  const basicCourseNames = ['math', 'english', 'science'];
  this.beforeEach(function () {
    aPerson = new Person('leo');
  });
  it('set courses', function () {
    basicCourseNames.forEach((name) =>
      aPerson.addCourse(new Course(name, false)),
    );
    const settedCourseNames = aPerson.courses.map((course) => course.name);
    expect(settedCourseNames).to.include.members([
      'math',
      'english',
      'science',
    ]);
  });
  it('check advanced', function () {
    basicCourseNames.forEach((name, index) =>
      aPerson.addCourse(new Course(name, index % 2 == 0)),
    );
    const numAdvancedCourses = aPerson.courses.filter(
      (c) => c.isAdvanced,
    ).length;
    expect(numAdvancedCourses).equal(2);
  });
  it('getter return copied collection', function () {
    basicCourseNames.forEach((name) =>
      aPerson.addCourse(new Course(name, false)),
    );
    const courses = aPerson.courses;
    courses.push(new Course('test', false));
    expect(aPerson.courses.length).equal(3);
  });
});
