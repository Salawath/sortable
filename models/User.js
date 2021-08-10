const dbpool = require("../util/database");

module.exports = class User {
  constructor(id, name, email, password, position) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.position = position;
  }

  save() {
    return dbpool.execute(
      "insert into users (name,email,password,position) values (?,?,?,?)",
      [this.name, this.email, this.password, this.position]
    );
  }

  update() {
    return dbpool.execute(
      "update users set name =? ,email =?,password =?,position =? where id =?",
      [this.name, this.email, this.password, this.position, this.id]
    );
  }

  static deleteById(id) {
    return dbpool.execute("delete from users where id =?", [id]);
  }

  static fetchAll() {
    return dbpool.execute("select * from users order by position asc");
  }

  static fetchById(id) {
    return dbpool.execute("select * from users where id = ?", [id]);
  }

  static sortupdate(id, position) {
    return dbpool.execute("update users set position =?  where id =?", [
      position,
      id,
    ]);
  }
};
