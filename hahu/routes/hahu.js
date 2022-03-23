const { json } = require('express');
const express = require('express');
const router = express.Router();
const Hirdetes = require('../models/hirdetes');

router.post('/', function(req, res, next) {
    const _id = req.body._id;
    const kategoria = req.body.kategoria;
    const cim = req.body.cim;
    const leiras = req.body.leiras;
    const hirdetesDatuma = req.body.hirdetesDatuma;
    const serulesmentes = req.body.serulesmentes;
    const arFt = req.body.arFt;
    const kepUrl = req.body.kepUrl;

    try {
        if (arFt % 1000 != 0) {
            throw Error("Az ár nem osztható 1000-el!")
        }
        const hirdetes = new Hirdetes({_id, kategoria, cim, leiras, hirdetesDatuma,
            serulesmentes, arFt, kepUrl});
            hirdetes
            .save()
            .then(res.status(200).json({
                "message" : "A rekord rögzítése sikeres."
            }))
            .catch(err => console.log(err))
    } catch (err) {
        res.status(400).json({
            "arFt" : err.message
        })
    }
})

module.exports = router;