let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let mongooseUniqueValidator = require('mongoose-unique-validator');

let schema = new Schema({
    name: {type: String, required: false, default: "An Attendee"},
    description: {type: String, required: true, unique: true},
    popularity: {type: Number, required: true},
    isAnswered: {type: Boolean, default: false}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Question', schema);