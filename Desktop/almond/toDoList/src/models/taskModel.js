const { sequelize, DataTypes } = require("sequelize");

module.exports=(sequelize,DataTypes)=>{
const tasks = sequelize.define('tasks',{
    task:{
        type:DataTypes.STRING,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    dueDate:{
       type: DataTypes.STRING,
       default:false
    },
    done:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
 
    isDeleted:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    },
});

return tasks

}