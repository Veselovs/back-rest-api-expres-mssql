const express = require('express');
const Db = require ("../dbservices");
//const Db = require ("./src/dbservices");
const router = express.Router();

// router.get('/', function (req, res) {
//     //res.send('LogIn bla-bla');
//     //res.json([1,2,45]);
//     res.json(['bla-bla','sss'])
// });


router.route('/').get((req, res) => {
    console.log('simply slash');
    res.json([1,2,45]);
})

router.route('/aaa').get((req, res) => {
    Db.getAll().then((data) => {
        //console.log('all');
        res.json(data[0]);
    })
})

router.route('/aaa/:id').get((req, res) => {
    Db.getOne(req.params.id).then((data) => {
        // console.log("222");
        res.json(data[0]);
    })
})

module.exports=router;
