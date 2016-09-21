/**
 * Created by ariacus on 21/09/16.
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Users = new Schema({
        username: String,
        email: String
    }
);


mongoose.model("user",Users);
mongoose.connect("mongodb://127.0.0.1/rest");