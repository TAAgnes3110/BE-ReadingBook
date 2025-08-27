/**
 * Logger configuration using Winston
 *
 * - Winston cho phép quản lý log với nhiều cấp độ (debug, info, error, ...)
 * - Ở môi trường development: bật log "debug" và có màu sắc cho dễ nhìn
 * - Ở môi trường production: chỉ log từ mức "info" trở lên, không có màu
 * - Hỗ trợ log error dưới dạng stack trace thay vì chỉ message
 * - Transports: hiện tại in log ra console, có thể mở rộng thêm (ghi file, gửi cloud, ...)
 */

const winston = require("winston");
const config = require("./config");

/**
 * Custom format để xử lý error object.
 * Nếu message là một Error, thay thế message = error.stack
 * => giúp log ra đầy đủ stack trace.
 */
const enumerateErrorFormat = winston.format((info) => {
  if (info instanceof Error) {
    Object.assign(info, { message: info.stack });
  }
  return info;
});

/**
 * Tạo Winston logger instance
 */
const logger = winston.createLogger({
  // Mức log: development => debug, production => info
  level: config.env === "development" ? "debug" : "info",

  // Định dạng log đầu ra
  format: winston.format.combine(
    enumerateErrorFormat(),
    config.env === "development"
      ? winston.format.colorize()
      : winston.format.uncolorize(),
    winston.format.splat(),
    winston.format.printf(({ level, message }) => `${level}: ${message}`)
  ),

  transports: [
    new winston.transports.Console({
      stderrLevels: ["error"],
    }),
  ],
});

module.exports = logger;
