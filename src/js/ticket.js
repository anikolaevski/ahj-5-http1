class ticket {
  constructor(obj) {
    this.id = Math.random().toString(16).slice(2);
    this.name = obj.name;
    this.description = obj.description;
    this.status = obj.status;
    this.created = new Date();
  }
}

module.exports = {
  ticket,
};
