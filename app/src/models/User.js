"use strict";

const {response} = require("express");
const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    const client = this.body;
    const { id, psword } = await UserStorage.getUserInfo(client.id);
    
    if (id === client.id) {
      if (psword === client.psword) {
        return { success: true };
      }
      return { success: false, msg: "비밀번호가 틀렸습니다."};
    }
    return { success: false, msg: "존재하지 않는 아이디입니다."};
    // if (id) {
    //   if (id === this.body.id && psword === this.body.psword) {
    //     return { success: true };
    //   }
    //   return { success: false, msg: "비밀번호가 틀렸습니다." };
    // }
    // return { success: false, msg: "존재하지 않는 아이디입니다."};

  }

  async register() {
    const client = this.body;
    try {
    const response = await UserStorage.save(client);
    return response;
    } catch (err) {
      const a = {success: false, msg: err};
      return a;
    }
  }
}

module.exports = User;