const multer = require("multer");
const path = require("path");
module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "uploads"),
    filename: (req, file, cb) => {
      const uniqueness = Date.now(); //evita erro por arquivos com mesmo nome
      const extension = path.extname(file.originalname);
      const name = path.basename(file.originalname, extension);
      cb(null, `${name}-${uniqueness}${extension}`);
    }
  })
};
