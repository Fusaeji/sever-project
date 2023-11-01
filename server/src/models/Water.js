module.exports = (sequelize, DataTypes) => {
    const Water = sequelize.define('Water', {
        waterparkname: DataTypes.STRING,
        location: DataTypes.STRING,
        date: DataTypes.STRING,
        telephone: DataTypes.STRING,
        website: DataTypes.STRING,
        rateprice: DataTypes.STRING
    })
    return Water
}