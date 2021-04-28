const express = require('express');
const router = express.Router();
const {Trip} = require('../models');

router.post("/",(req,res)=>{
    Trip.create({
        budget:req.body.budget,
        people:req.body.people,
        LocationId:req.body.LocationId,
        TravellerId:req.body.TravellerId
    }).then(newLoc=>{
        res.json(newLoc)
    }).catch(err=>{
        res.status(500).json({err});
    })
})


router.delete("/:id",(req,res)=>{
    Trip.destroy({
        where:{
            id:req.params.id
        }
    }).then(locData=>{
        if(!locData){
            res.status(404).json({message:"no such record"})
        } else {
            res.json(locData)
        }
    }).catch(err=>{
        res.status(500).json({err});
    }) 
})

module.exports = router;