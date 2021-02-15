"use strict";

class UserStorage {
  static #users = {
    id: ["test", "isms", "pims"],
    psword: ["1234", "qwer", "qw12"],
    name: ["Admin", "Audit", "Custommer"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;