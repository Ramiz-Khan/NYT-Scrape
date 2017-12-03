var mongoose = require("mongoose");

var ArticleSchema = new mongoose.Schema ({
    _id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    URL: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: false
    }
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;