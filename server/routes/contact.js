const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const validate = require('./../utl/validation.js');
const sendMail = require('./../utl/mail.js');

router.get('/', (req, res) => {

});

router.post('/', validate, (req, res) => {
  let data = req.body;
  if (data) {
    const errors = validationResult(req);
   if (!errors.isEmpty()) {
     res.status(422).json({ errors: errors.mapped() });
   }
    sendMail(data).then((succ) => {
      res.sendStatus(200);
    }).catch((err) => {
      res.status(500).json({"errors" : {"internal": {"msg": "Internal error"}}});
    });

  } else {
    res.status(422).json({"errors" : {"internal": {"msg": "Data undefined"}}});
  }
});

module.exports = router;
