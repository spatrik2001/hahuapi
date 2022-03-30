const mongoose = require('mongoose');
const Schema = mongoose.Schema;

function arFtValidator(val) {
    return val % 1000 === 0;
};

const hirdetesSchema = new Schema({
    _id: Number,
    kategoria: {
        type: Number,
        default: 1,
        ref: 'Kategoria'
    },
    cim: {
        type: String,
        required: [true, "Cím megadása kötelező!"],
        unique: true,
        maxlength: 100
    },
    leiras: {
        type: String,
        maxlength: 3000
    },
    hirdetesDatuma: {
        type: Date,
        default: Date.now
    },
    serulesmentes: Boolean,
    arFt: {
        type: Number,
        required: true,
        validate: [arFtValidator, "Az ár nem osztható 1000-rel!"]
    },
    kepUrl: {
        type: String,
        maxlength: 300
    }
});

module.exports = mongoose.model('Hirdetes', hirdetesSchema, 'hirdetesek');