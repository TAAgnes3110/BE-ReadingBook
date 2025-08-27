import db from "../config/db.js";
import genreModel from "./genreModel.js";

//trim: Không nhận khoảng trắng
//lowercase: Chuyển đổi thành chữ thường
//required: Bắt buộc phải có
//unique: Không trùng lặp (xét trong database)

/*User: Mô hình người dùng bao gồm {
  _id: String,
  fullname: String,
  email: String,
  password: String,
  avatar: String,
  preferences: [String],
  isActive: Boolean,
  role: String,
  token: {
    token: String,
    device: String,
    createdAt: Date,
    expiredAt: Date,
  },
  lastLogin: Date,
  createdAt: Date,
  updatedAt: Date,
} */

const userSchema = db.userSchema({
  _id: {
    type: String,
  },

  fullname: {
    type: String,
    required: true,
    trim: true,
    minlength: [2, "Fullname must be at least 2 characters long"],
    maxlength: [100, "Fullname must be at most 100 characters long"],
  },

  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    minlength: [13, "Email must be at least 13 characters long"],
    maxlength: [100, "Email must be at most 100 characters long"],
  },

  password: {
    type: String,
    required: true,
    hashed: true,
    minlength: [6, "Password must be at least 6 characters long"],
  },

  avatar: {
    type: String,
    trim: true,
  },

  preferences: {
    type: [String],
    ref: "Genre",
    default: [],
  },

  isActive: {
    type: Boolean,
    default: true,
  },

  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },

  token: {
    token: {
      type: String,
      required: true,
    },
    device: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    expiredAt: {
      type: Date,
      required: true,
    },
  },
  lastLogin: {
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

const userModel = db.model("User", userSchema);

export default userModel;
