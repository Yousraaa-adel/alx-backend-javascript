export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this.name;
  }

  get length() {
    return this.length;
  }

  get students() {
    return this.students;
  }
}
