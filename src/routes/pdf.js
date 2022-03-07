const router = require('express').Router();

const templates = {
  list: 'pdf/pdf-list',
  create: 'pdf/pdf-create',
  edit: 'pdf/pdf-edit',
};

router.get('/', (req, res) => {
  const data = [
    {
      id: 1,
      name: 'Evaluación de personal',
      url: 'https://drive.google.com/file/d/1WWzxzyyuo6CTXuOhUjhIR_9mOAUq1EW8/view?usp=sharing',
    },
    {
      id: 2,
      name: 'Evaluación de papas',
      url: 'https://drive.google.com/file/d/1WWzxzyyuo6CTXuOhUjhIR_9mOAUq1EW8/view?usp=sharing',
    },
  ];

  res.render(templates.list, {
    title: 'PDF Listado',
    data,
  });
});

module.exports = router;
