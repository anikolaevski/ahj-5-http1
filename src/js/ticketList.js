// eslint-disable-next-line import/prefer-default-export
export class TicketList {
  constructor() {
    this.set = new Set();
  }

  add(name) {
    if (!this.set.has(name)) {
      this.set.add(name);
    } else {
      // eslint-disable-next-line no-throw-literal
      throw (`Объект ${name} уже существует!`);
    }
  }

  delete(name) {
    if (this.set.has(name)) {
      this.set.delete(name);
    }
  }

  toArray() {
    return Array.from(this.set);
  }
}