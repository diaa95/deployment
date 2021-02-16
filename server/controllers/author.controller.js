const Author = require('../models/author.model');

module.exports.findAllAuthors = (request, response) => {
    Author.find()
        .then(allAuthors => response.json(allAuthors))
        .catch(err => response.json({message: "something went wrong", error: err}))
};

module.exports.createAuthor = (request, response) => {
    Author.create(request.body)
        .then(author => response.json(author))
        .catch(err => response.status(400).json(err))
};
