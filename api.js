//let  Db = require('./dbservices');
let  express = require('express');
let  bodyParser = require('body-parser');
let  cors = require('cors');
let  app = express();
//let  router = express.Router();
//const bbb=require('./src/routes/bbb')
//const bbb=require('./src/routes/index')

app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());
app.use(cors());
//app.use(bbb);
require("./src/routes")(app);


// router.use((request, response, next) => {
//     //console.log('middleware');
//     next();
// });
//
// router.route('/').get((req, res) => {
//     console.log('simply slash');
//     res.json([1,2,45]);
// })
//
// router.route('/aaa').get((req, res) => {
//     Db.getAll().then((data) => {
//         //console.log('all');
//         res.json(data[0]);
//     })
// })
//
// router.route('/aaa/:id').get((req, res) => {
//     Db.getOne(req.params.id).then((data) => {
//        // console.log("222");
//         res.json(data[0]);
//     })
// })



let  port = process.env.PORT || 8090;
app.listen(port);
console.log('Order API is running at ' + port);
