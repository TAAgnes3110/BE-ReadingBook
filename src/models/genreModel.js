import db from "../config/db.js";

const Genre = db.genreSchema({
  _id: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
    trim: true,
    minlength: [2, "Name must be at least 2 characters long"],
    maxlength: [100, "Name must be at most 100 characters long"],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const genreModel = db.model("Genre", Genre);

export default genreModel;
