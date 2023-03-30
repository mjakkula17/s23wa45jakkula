var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
if(Object.keys(req.query).length == 0){
  var h = Math.random();
  res.render('computation',{val1:`math.cos() applied to ${h} is ${Math.cos(h)}`,
  val2:`math.asin() applied to ${h} is ${Math.asin(h)}`,
  val3:`math.asinh() applied to ${h} is ${Math.asinh(h)}`
});
}

else{
  for(let k in req.query){
    res.render('computation',{val1:`math.acosh() applied to ${req.query[k]} is  ${Math.acosh(req.query[k])}`,
    val2:`math.asin() applied to ${req.query[k]} is ${Math.asin(req.query[k])}`,
    val3:`math.asinh() applied to ${req.query[k]} is ${Math.asinh(req.query[k])}`})
  }

}
 
});

module.exports = router;