"use strict";
exports.__esModule = true;
exports.users = exports.User = void 0;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    return User;
}());
exports.User = User;
exports.users = {
    "lucas@gmail.com": new User('lucas@gmail.com', 'Lucas', '123'),
    "cris@gmail.com": new User('cris@gmail.com', 'Cris', '123'),
    "jaci@gmail.com": new User('jaci@gmail.com', 'Jaciara', '123'),
    "hellen@gmail.com": new User('hellen@gmail.com', 'Hellen', '123'),
    "toze@gmail.com": new User('toze@gmail.com', 'Antonio', '123'),
    "caique@gmail.com": new User('caique@gmail.com', 'Caique', '123')
};
