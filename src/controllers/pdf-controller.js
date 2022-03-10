const { Pdf } = require('../../models');

const templates = {
  list: 'pdf/pdf-list',
  create: 'pdf/pdf-create',
  edit: 'pdf/pdf-edit',
};

module.exports = {
  listPdf: async (req, res) => {
    let data = [];
    try {
      data = await Pdf.findAll();
      console.log(req);
      data = data.map(pdf => ({
        id: pdf.id,
        name: pdf.name,
        url: pdf.url,
        linkToFlipbook: `https://heyzine.com/api1/rest?pdf=${
          req.hostname + '/uploads/' + pdf.url
        }&k=6d290c3d4f7b6761`,
      }));
    } catch (e) {
      console.error(e);
    }
    res.render(templates.list, {
      title: 'PDF Listado',
      data,
    });
  },
  createPdf: (req, res) => {
    res.render(templates.create, {
      title: 'PDF Crear',
    });
  },
  storePdf: async (req, res) => {
    if (!req.file) res.redirect('/pdf/create');

    const { name } = req.body;
    const { filename } = req.file;
    const pdfToCreate = await Pdf.create({
      name,
      url: filename,
    });
    try {
      await pdfToCreate.save();
    } catch (e) {
      console.error(e);
      res.render(templates.create, {
        title: 'PDF Crear',
        error: true,
      });
    }

    res.redirect('/pdf/');
  },
};
