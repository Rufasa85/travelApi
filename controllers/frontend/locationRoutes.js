const express = require('express');
const router = express.Router();
const {Location,Trip,Traveller} = require("../../models");


router.get('/',(req,res)=>{
   Location.findAll().then(locData=>{
    //    res.json(locData)
    const hbsData = locData.map(location=>location.get())
        res.render("locations",{
            locations:hbsData
        })
   })
})

router.get('/:id',(req,res)=>{
    Location.findByPk(req.params.id,{
        include:[
            {
                model:Trip,
                include:[Traveller]
            }
        ]
    }).then(data=>{

        const hbsData = data.get({plain:true});
        console.log(hbsData);
        res.render("singleLocation",hbsData)
    })
})

module.exports = router;