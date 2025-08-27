import db from "../config/db.js";
import userModel from "./userModel.js";
import bookModel from "./bookModel.js";

const librarySchema = db.librarySchema({
  _id: {
    type: String,
  },
  userId: {
    type: String,
    required: true,
    ref: "User",
  },
  bookId: {
    type: String,
    required: true,
    ref: "Book",
  },
  status: {
    type: String,
    enum: ["reading", "completed", "wishlist"],
    default: "wishlist",
  },
  progress: {
    type: Number,
    min: 0,
    max: 100,
    default: 0,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    optional: true,
  },
  review: {
    type: String,
    optional: true,
  },
  lastReadAt: {
    type: Date,
    default: Date.now,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const libraryModel = db.model("Library", librarySchema);

export default libraryModel;
