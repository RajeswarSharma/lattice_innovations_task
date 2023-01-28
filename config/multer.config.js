const multer = require("multer");
const {randomBytes} = require("crypto");
const  {extname}  = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public");
  },
  filename: function (req, file, cb) {
    let extension = extname(file.originalname);
    let filename = randomBytes(32).toString("hex")+extension;
    cb(null,filename);
  },
});
const fileFilter =  (req, file, callback)=>{
        var ext = extname(file.originalname);
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
            return callback(new Error('Only images are allowed'))
        }
        callback(null, true)
    }

const limits =  {
    fileSize: 1024 * 1024 * 5, //Max size 5 MB
}


module.exports =  multer({storage,limits,fileFilter});