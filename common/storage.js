const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads'),
  filename: (req, file, cb) => {
    const file_name_splits = file.originalname.split('.');
    const len = file_name_splits.length;
    const ext = file_name_splits[len - 1];
    cb(null, file.fieldname + '-' + Date.now() + '.' + ext);
  },
});

module.exports = multer({ storage });
