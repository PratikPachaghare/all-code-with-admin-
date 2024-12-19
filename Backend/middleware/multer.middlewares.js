const multer = require('multer');
const fs = require('fs');
const path = require('path');

const temp = path.join(process.cwd(), 'public', 'temp');


// Ensure the directory exists
if (!fs.existsSync(temp)) {
    fs.mkdirSync(temp, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, temp); 
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

module.exports.upload = multer({ storage });
