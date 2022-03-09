const router = require('express').Router();
const storage = require('../../common/storage');
const {
  listPdf,
  createPdf,
  storePdf,
} = require('../controllers/pdf-controller');

router.get('/', listPdf);

router.get('/create/', createPdf);

router.post('/create/', storage.single('file'), storePdf);

module.exports = router;
