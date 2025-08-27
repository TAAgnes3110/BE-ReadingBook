import db from "../config/db.js";
import authorModel from "./authorModel.js";

const bookSchema = db.bookSchema({
  _id: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    optional: true,
  },
  coverUrl: {
    type: String,
    optional: true,
  },
  authorId: {
    type: String,
    required: true,
    ref: "Author",
  },
  releasedDate: {
    type: Date,
    required: true,
  },
  avgRating: {
    type: Number,
    required: true,
    default: 0,
    max: 5,
  },
  txtUrl: {
    type: String,
    optional: true,
  },
  epubUrl: {
    type: String,
    optional: true,
  },
  bookUrl: {
    type: String,
    optional: true,
  },
  reviews: [
    {
      userId: {
        type: String,
        required: true,
        ref: "User",
      },
      content: {
        type: String,
      },
      rating: {
        type: Number,
        min: 0,
        max: 5,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: null,
  },
});

const bookModel = db.model("Book", bookSchema);

export default bookModel;
