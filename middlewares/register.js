
const { body, validationResult } = require('express-validator');

exports.RegisterValidation = [
    body('name','please enter a name').notEmpty(),
    body('lastname','please enter a name').notEmpty(),
    body('email','should be a valid email').isEmail(),
    body('pass','should be at least 6 caracters ').isLength({min:6})
]

exports.LoginValidation = [
    body('email','Email incorrect').isEmail(),
    body('pass','password incorrect ').isLength({min:6})
]

exports.Validation =(req,res,next)=>{
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
}