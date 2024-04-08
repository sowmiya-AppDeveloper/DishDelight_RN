const mongoose = require("mongoose");
const { Schema } = mongoose;

const ImageSchema = new Schema({
  userId: {
    type: String,
    require: true,
  },
  Image: {
    data: String,
    contentType: String,
  },
});

module.exports = mongoose.model("imageModal", ImageSchema);
