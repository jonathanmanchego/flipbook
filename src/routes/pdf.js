const router = require('express').Router();
const storage = require('../../common/storage');
const {
  listPdf,
  createPdf,
  storePdf,
  destroyPdf,
} = require('../controllers/pdf-controller');

router.get('/', listPdf);

router.get('/create/', createPdf);

router.post('/create/', storage.single('file'), storePdf);

router.get('/:id/delete', destroyPdf);

module.exports = router;
