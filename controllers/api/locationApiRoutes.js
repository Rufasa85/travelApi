const express = require('express');
const router = express.Router();
const {Location,Trip} = require('../../models');

router.get("/",(req,res)=>{
    Location.findAll().then(locData=>{
        res.json(locData)
    }).catch(err=>{
        res.status(500).json({err});
    })
})

router.post("/",(req,res)=>{
    Location.create({name:req.body.name}).then(newLoc=>{
        res.json(newLoc)
    }).catch(err=>{
        res.status(500).json({err});
    })
})

router.get("/:id",(req,res)=>{
    Location.findByPk(req.params.id,{
        include:[Trip]
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
    Location.destroy({
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