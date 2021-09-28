var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/getUser",function(req,res){
  res.send([{"name":"Lufor","age":24},{"name":"Peter Parker","age":20}])
})

module.exports = router;
