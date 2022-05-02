const express = require('express');
const memberRoute = express.Router();
const MemberModel = require('../models/Member.model');


// Get all member list
memberRoute.route('/').get((req, res, next) => {
    MemberModel.find((error,data)=>{
        if(error) return next(error)
        res.json(data);
    })
})

// Login member
memberRoute.route('/login/:username/:password').get((req, res, next) => {
    MemberModel.findOne({username:req.params.username, password:req.params.password} , (error,data)=>{
        if(error) return next(error)
        res.json(data)
    })
})

module.exports = memberRoute;