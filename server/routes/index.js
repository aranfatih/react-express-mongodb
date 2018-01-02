const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/programmers', (req, res) => {
  let programmers = 
  [
    {name: "Aran", skills: ['ReactJs', 'NodeJs', 'GraphQL', 'RelayJs']},
    {name: "Emma", skills: ['HTML', 'CSS', 'Java']}
  ];

  res.send({programmers: programmers, authenticated: req.isAuthenticated()});
})

module.exports = router;
