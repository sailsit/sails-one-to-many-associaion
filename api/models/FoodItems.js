/**
 * FoodItems.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    tableName: "food_items",
    attributes: {
        id: {
            type: "integer",
            autoIncrement: true,
            primaryKey: true
        },
        food_name: {
            type: "string"
        },
        people: {
            model: "People",
            columnName: "people_id"
        }
    }
};

