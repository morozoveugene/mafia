const { Router } = require('express');
const User = require('../models/user');
const router = new Router();


router.get('/', async (request, response) => {
   response.send('Goodbye world');
});

// router.get('/new', async (request, response) => {
//    const user = new User({
//       name: Math.round(new Date().getTime()/1000)
//    });
//    await user.save();
//    response.send('Hmmm');
// });

module.exports = router;