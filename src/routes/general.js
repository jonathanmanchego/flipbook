const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('Pagina de inicio');
})

module.exports = router;