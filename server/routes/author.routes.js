const controller = require('../controllers/author.controller');

module.exports = app => {
    app.get('/api/getAllAuthors', controller.findAllAuthors);
    app.post('/api/create/new', controller.createAuthor);
}
