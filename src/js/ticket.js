class ticket {
  constructor (obj) {
    //this.id = 
    this.name = obj.name;
    this.description = obj.description;
    this.status = obj.status;
    this.created = new Date();
  }
}
