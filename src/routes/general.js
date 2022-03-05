const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Bienvenido',
    message: 'Empezando proyecto en node con caro y robin'
  });
})

module.exports = router;