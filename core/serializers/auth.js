const {errors} = require("../errors");
const User = require('../models/user');
const {JsonErrorResponse, JsonResponse} = require("../utils");
const argon2 = require('argon2');


class SignupSerializer {

    constructor(body) {
        this.name = body.name;
        this.password = body.password;
    }

    async is_valid() {
        if (!this.name) return JsonErrorResponse(1);
        if (!this.password) return JsonErrorResponse(3);
        if (await User.exists({name: this.name})) {
            return JsonErrorResponse(2);
        } else {
            return false;
        }
    }

    async create() {
        const password = await argon2.hash(this.password);
        const user = new User({name: this.name, password: password});
        await user.save(function(error) {
            if(error) return JsonErrorResponse(4);
        });
        return {token: user.token};
    }
}

class SigninSerializer {

    constructor(body) {
        this.name = body.name;
        this.password = body.password;
    }

    async is_valid() {
        if (!this.name) return JsonErrorResponse(1);
        if (!this.password) return JsonErrorResponse(3);
    }

    async auth() {
        let user = await User.findOne({name : this.name});
        if(!user) return JsonErrorResponse(5);
        const is_equal_password = await argon2.verify(user.password, this.password);
        if(!is_equal_password) return JsonErrorResponse(6);
        return {token: user.token};
    }
}

module.exports = {
    SignupSerializer: SignupSerializer,
    SigninSerializer: SigninSerializer,
};