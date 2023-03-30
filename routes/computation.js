var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
if(Object.keys(req.query).length == 0){
  var x = Math.random();
  res.render('computation',{val1:`math.cos() applied to ${x} is ${Math.cos(x)}`,
  val2:`math.asin() applied to ${x} is ${Math.asin(x)}`,
  val3:`math.asinh() applied to ${x} is ${Math.asinh(x)}`
});
}

else{
  for(let y in req.query){
    res.render('computation',{val1:`math.acosh() applied to ${req.query[y]} is  ${Math.acosh(req.query[y])}`,
    val2:`math.asin() applied to ${req.query[y]} is ${Math.asin(req.query[y])}`,
    val3:`math.asinh() applied to ${req.query[y]} is ${Math.asinh(req.query[y])}`})
  }

}
 
});

module.exports = router;