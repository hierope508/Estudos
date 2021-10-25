const express = require("express");

function routes(Book) {
    const bookRouter = express.Router();
    bookRouter.route("/books")
        .post((req, resp) => {
            const book = new Book(req.body);
            book.save();
            return resp.status(201).json(book);
        })
        .get((req, resp) => {
            const query = {};

            if (req.query.genre) {
                query.genre = req.query.genre;
            }

            Book.find(query, (err, books) => {
                if (err)
                    return resp.send(err);
                return resp.json(books);
            });
        });



    bookRouter.route("/books/:id").get((req, resp) => {
        Book.findById(req.params.id, (err, book) => {
            if (err)
                return resp.send(err);
            return resp.json(book);
        });
    });

    return bookRouter;

}

module.exports = routes;