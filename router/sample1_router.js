const express = require('express');
const router = express.Router();
const Sample1 = require('../models/sample1-model');


router.get('/',async (req,res) =>{
    try{
        const samples = await Sample1.find();
        res.json(samples);
    }catch(err){
        res.status(500).json({message: err.message});
    }
})


module.exports = router;