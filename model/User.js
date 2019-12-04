const {
    Sequelize,
    Model
} = require("sequelize");
// const MD5 = require("crypto").createHash('md5');
const {
    sequelize
} = require("../core/db");

class User extends Model {

}
User.init({
    uname: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.STRING(20),
        comment: "主键（用户名）"
    },
    upwd: {
        type: Sequelize.STRING(50),
        comment: "密码"
    },
    uLevel: {
        type: Sequelize.INTEGER,
        default: 1
    }
}, {
    sequelize,
    tableName: "users"
})

module.exports = {
    User
}