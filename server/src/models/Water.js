module.exports = (sequelize, DataTypes) => {
    const Water = sequelize.define('Water', {
        waterparkname: DataTypes.STRING,
        location: DataTypes.STRING,
        date: DataTypes.STRING,
        telephone: DataTypes.INTEGER,
        website: DataTypes.STRING,
        rateprice: DataTypes.INTEGER
    })
    return Water
}