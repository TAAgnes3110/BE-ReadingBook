import db from "../config/db.js";

const authorSchema = db.authorSchema({
  _id: {
    type: String,
  },
  _name: {
    type: String,
    required: true,
  },
});

const authorModel = db.model("Author", authorSchema);

export default authorModel;
