var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var pagesSchema = new Schema({
  page_name: { type: String, required: true, unique: true },
  page_content: String,
});

pageModel = mongoose.model("pages", pagesSchema);
module.exports = pageModel;
