const express = require('express');
const router = express.Router();
const {Traveller,Trip,Location} = require('../models');

router.get("/",(req,res)=>{
    Traveller.findAll().then(locData=>{
        res.json(locData)
    }).catch(err=>{
        res.status(500).json({err});
    })
})

router.post("/",(req,res)=>{
    Traveller.create({
        name:req.body.name,
        email:req.body.email
    }).then(newLoc=>{
        res.json(newLoc)
    }).catch(err=>{
        res.status(500).json({err});
    })
})

router.get("/:id",(req,res)=>{
    Traveller.findByPk(req.params.id,{
        include:[{
            model:Trip,
            include:[Location]
        }]
    }).then(locData=>{
        if(!locData){
            res.status(404).json({message:"no such record"})
        }else {
            res.json(locData)
        }
    }).catch(err=>{
        res.status(500).json({err});
    }) 
})

router.delete("/:id",(req,res)=>{
    Traveller.destroy({
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