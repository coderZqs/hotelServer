let {
    Sequelize,
    Model
} = require("sequelize");


let {
    sequelize
} = require("../core/db");


class Hotel extends Model {

}


Hotel.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    hname: {
        type: Sequelize.STRING(45),
        allowNull: false,
    },
    cid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "评价id",
    },
    level: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "等级"
    },
    address: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    intro: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    guestId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }


}, {
    sequelize,
    tableName: "hotel"
})

module.exports = {
    Hotel
}